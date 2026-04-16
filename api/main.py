from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from api.tracker_logic import SolarReflector
import datetime
import pytz

app = FastAPI()

config = {
    "lat": 31.23,
    "lon": 121.47,
    "target_azimuth": 25.0,
    "target_altitude": 10.0,
    "timezone": "Asia/Shanghai"
}

TZ = pytz.timezone(config["timezone"])

def read_html_template():
    with open("index.html", "r", encoding="utf-8") as f:
        return f.read()

@app.get("/", response_class=HTMLResponse)
async def index():
    return read_html_template()

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
