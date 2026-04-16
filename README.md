# Helios Tracker

A real-time solar tracking simulation with 3D visualization and motor control calculations.

![Solar Tracker](https://img.shields.io/badge/React-19-blue.svg)
![SunCalc3](https://img.shields.io/badge/SunCalc3-orange.svg)
![Three.js](https://img.shields.io/badge/Three.js-0.183-orange.svg)

> 📖 [中文版](./README_zh.md)

## Features

- 🌞 Real-time solar position calculation (altitude & azimuth) using SunCalc3
- 🪞 Motor angle calculation using bisector method
- 🌍 Timezone-synchronized (Asia/Shanghai UTC+8)
- 🎮 Time simulation with play/pause/fast-forward/rewind controls
- 📅 Date picker for historical/future simulation
- 🎨 3D visualization with Three.js
- 📊 Live telemetry dashboard

## Screenshots

![Helios Tracker Screenshot](./screenshot.png)

## Quick Start

### Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
```

Serve from `dist/` directory.

## Configuration

Edit `src/App.tsx` to change default parameters:

```typescript
const [lat] = useState(31.23);   // Latitude
const [lon] = useState(121.47);  // Longitude
```

## Architecture

```
helios-tracker/
├── src/
│   ├── components/           # UI components
│   ├── lib/solar.ts        # SunCalc3 calculations
│   ├── App.tsx            # Main app
│   └── main.tsx           # Entry point
├── package.json           # Node dependencies
├── vite.config.ts         # Vite config
└── README.md             # This file
```

## Tech Stack

- **Frontend**: React 19, TypeScript, Three.js, Tailwind CSS v4, Framer Motion, Lucide React
- **Calculations**: SunCalc3 (browser-based)
- **Build**: Vite

## License

See [LICENSE](./LICENSE) for details.