import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .tracker_logic import SolarReflector
import datetime
import pytz

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

config = {
    "lat": 31.23,
    "lon": 121.47,
    "target_azimuth": 25.0,
    "target_altitude": 10.0,
    "timezone": "Asia/Shanghai"
}

TZ = pytz.timezone(config["timezone"])

static_path = os.path.join(os.path.dirname(__file__), "static")
if os.path.exists(static_path):
    app.mount("/static", StaticFiles(directory=static_path), name="static")

def read_index():
    index_path = os.path.join(static_path, "index.html")
    if os.path.exists(index_path):
        with open(index_path, "r", encoding="utf-8") as f:
            return f.read()
    return """
    <html>
    <body style="font-family: sans-serif; padding: 2rem; text-align: center;">
        <h1>Helios Tracker</h1>
        <p>Frontend not built. Run <code>cd frontend && npm run build</code></p>
    </body>
    </html>
    """

@app.get("/", response_class=HTMLResponse)
async def index():
    return read_index()

@app.get("/sunrise_sunset")
async def sunrise_sunset(lat: float, lon: float, date: str):
    date_only = date.split('T')[0]
    date_obj = datetime.datetime.strptime(date_only, "%Y-%m-%d").replace(tzinfo=TZ)
    tracker = SolarReflector(lat, lon)
    return tracker.get_sunrise_sunset(date_obj)

@app.get("/calculate")
async def calculate(lat: float, lon: float, t_azi: float, t_alt: float, m_offset: int, date: str = None):
    if date:
        date_only = date.split('T')[0]
        date_obj = datetime.datetime.strptime(date_only, "%Y-%m-%d").replace(tzinfo=TZ)
        target_time = date_obj.replace(hour=0, minute=0, second=0, microsecond=0) + datetime.timedelta(minutes=m_offset)
    else:
        now = datetime.datetime.now(TZ)
        target_time = now.replace(hour=0, minute=0, second=0, microsecond=0) + datetime.timedelta(minutes=m_offset)
    
    tracker = SolarReflector(lat, lon, t_azi, t_alt)
    return tracker.calculate_angles(target_time)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)