> 我写这个项目的目的，就是想让我家能有更多的时间接受太阳光的照射，想到了用镜子追踪太阳然后反射进房间的方案

# Solar Reflector Tracker

> 📖 [中文版](./README_zh.md)

A real-time solar tracking simulation with 3D visualization and motor control calculations, with geospatial awareness and astronomical calculations.

![Solar Tracker](https://img.shields.io/badge/Python-3.13+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.160-orange.svg)

## Screenshot

![Screenshot](./screen.png)

## Features

- 🌞 Real-time solar position calculation (altitude & azimuth)
- 🪞 Motor angle calculation using bisector method
- 🌍 Timezone-synchronized (Asia/Shanghai UTC+8)
- 🎮 Time simulation with play/pause/fast-forward/rewind controls
- 📅 Date picker for historical/future simulation
- 🎨 3D visualization with Three.js
- 📊 Live telemetry dashboard

## Quick Start

```bash
# dependencies
uv sync
# Run the server
uv run uvicorn main:app --reload
# Open in browser
http://localhost:8000
```

## Configuration

Edit `main.py` to change default parameters:

```python
config = {
    "lat": 31.23,           # Latitude
    "lon": 121.47,         # Longitude
    "target_azimuth": 25.0, # The angle between the target direction and the north
    "target_altitude": 10.0, # The angle between the target direction and the horizontal plane
    "timezone": "Asia/Shanghai"
}
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Main UI |
| `GET /calculate` | Get sun position & motor angles |
| `GET /sunrise_sunset` | Get sunrise/sunset times |

## Architecture

```
solar/
├── main.py           # FastAPI server & config
├── tracker_logic.py  # pysolar calculations
├── index.html        # Embedded UI with Three.js
├── pyproject.toml    # Dependencies
├── AGENTS.md         # Development guide
└── .gitignore        # Git ignore rules
```

## Tech Stack

- **Backend**: FastAPI, pysolar, pytz
- **Frontend**: Three.js, Tailwind CSS, Vanilla JS
- **Build**: UV package manager

## License

See [LICENSE](./LICENSE) for details.