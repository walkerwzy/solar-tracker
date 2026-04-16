# AGENTS.md - Solar Reflector Tracker

## Quick Start

```bash
cd /Users/walker/Documents/_code/solar
python main.py
# App runs at http://localhost:8000
```

## Project Structure

```
main.py          # FastAPI app + embedded HTML UI (entry point)
tracker_logic.py # Solar position calculation (bisector method)
pyproject.toml   # Dependencies: fastapi, uvicorn, pysolar, pyserial
DESIGN.md        # Design system spec (future UI work)
```

## Commands

- **Run**: `python main.py` (starts uvicorn on port 8000)
- **Package**: Already installed via `uv pip install -e .`

## Key Implementation Details

- **pysolar coordinate transform**: Raw azimuth from pysolar (S=0, E=-90, W=90) is converted to N=0, E=90, S=180 via `sun_azi = (raw + 180) % 360`
- **Bisector method**: Horizontal motor angle is midpoint between sun and target azimuths (handles 360° wraparound)
- **Time simulation**: `/calculate` endpoint accepts `m_offset` (minutes from midnight UTC) to simulate different times
- **Serial control**: pyserial dependency present but not actively used in current code (motor control via serial is the intended physical layer)

## Dependencies

- fastapi >= 0.100.0
- uvicorn[standard] >= 0.20.0
- pysolar >= 0.11
- pyserial >= 3.5

## Notes

- Default location: Shanghai (lat: 31.23, lon: 121.47)
- Target azimuth 180° = South-facing
- UI is embedded HTML served by FastAPI (not a separate frontend)