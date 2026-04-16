# AGENTS.md - Solar Reflector Tracker

## Quick Start

```bash
npm install
npm run dev
# App runs at http://localhost:3000
```

## Project Structure

```
src/
├── components/       # UI components (TelemetryPanel, TimeControls, etc.)
├── lib/solar.ts     # SunCalc3 calculations
├── App.tsx         # Main app
└── main.tsx        # Entry point
```

## Commands

- **Run**: `npm run dev`
- **Build**: `npm run build`

## Key Implementation Details

- **SunCalc3 coordinate transform**: Raw azimuth from SunCalc3 is converted to N=0, E=90, S=180 via `azimuth = ((azimuthDegrees + 180) % 360 + 360) % 360`
- **Bisector method**: Horizontal motor angle is midpoint between sun and target azimuths (handles 360° wraparound)
- **Time simulation**: Uses local time from selected date

## Dependencies

- React 19
- @noim/suncalc3
- three

## Notes

- Default location: Shanghai (lat: 31.23, lon: 121.47)
- Target azimuth 180° = South-facing
- All calculations done client-side in browser