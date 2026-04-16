import { useState, useEffect, useMemo } from 'react';
import { SimulationCanvas } from './components/SimulationCanvas';
import { TelemetryPanel } from './components/TelemetryPanel';
import { TimeControls } from './components/TimeControls';
import { calculateSunPosition, calculateMirrorOrientation, getPitchYaw } from './lib/solarCalculations';
import * as THREE from 'three';

const API_BASE = import.meta.env.DEV ? '' : '/api';

interface SunData {
  sun_alt: number;
  sun_azi: number;
  motor_h: number;
  motor_v: number;
}

interface SunriseSunset {
  sunrise: string;
  sunset: string;
}

export default function App() {
  const [time, setTime] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  });
  
  const [sunriseTime, setSunriseTime] = useState(6);
  const [sunsetTime, setSunsetTime] = useState(20);
  const [sunData, setSunData] = useState<SunData | null>(null);
  const [lat] = useState(31.23);
  const [lon] = useState(121.47);

  // Fetch sunrise/sunset when date changes
  useEffect(() => {
    const fetchSunriseSunset = async () => {
      try {
        const res = await fetch(`${API_BASE}/sunrise_sunset?lat=${lat}&lon=${lon}&date=${selectedDate}`);
        const data: SunriseSunset = await res.json();
        
        if (data.sunrise) {
          const [sh, sm] = data.sunrise.split(':').map(Number);
          const dawnHours = (sh * 60 + sm - 30) / 60;
          setSunriseTime(Math.max(0, dawnHours));
        }
        if (data.sunset) {
          const [ss, sm] = data.sunset.split(':').map(Number);
          const duskHours = (ss * 60 + sm + 30) / 60;
          setSunsetTime(Math.min(24, duskHours));
        }
      } catch (err) {
        console.error('Failed to fetch sunrise/sunset:', err);
      }
    };
    
    fetchSunriseSunset();
  }, [selectedDate, lat, lon]);

  // Fetch sun position from backend
  useEffect(() => {
    const fetchSunData = async () => {
      try {
        const mOffset = Math.round(time * 60);
        const res = await fetch(
          `${API_BASE}/calculate?lat=${lat}&lon=${lon}&t_azi=25.0&t_alt=10.0&m_offset=${mOffset}&date=${selectedDate}`
        );
        const data: SunData = await res.json();
        setSunData(data);
      } catch (err) {
        console.error('Failed to fetch sun data:', err);
      }
    };
    
    fetchSunData();
  }, [time, selectedDate, lat, lon]);

  // Use backend data or fallback to calculation
  const actualSunData = useMemo(() => {
    if (sunData) {
      return {
        azimuth: sunData.sun_azi,
        altitude: sunData.sun_alt,
        motorH: sunData.motor_h,
        motorV: sunData.motor_v
      };
    }
    // Fallback to local calculation
    return {
      azimuth: 0,
      altitude: 0,
      motorH: 0,
      motorV: 0
    };
  }, [sunData]);

  // Simulation constants
  const targetPos = useMemo(() => new THREE.Vector3(8, 0, 0), []);
  const mirrorPos = useMemo(() => new THREE.Vector3(-8, 0, 0), []);

  // Calculate derived values for telemetry
  const localSunData = useMemo(() => calculateSunPosition(time), [time]);
  const mirrorQuaternion = useMemo(() => 
    calculateMirrorOrientation(localSunData.position, mirrorPos, targetPos),
    [localSunData.position, mirrorPos, targetPos]
  );
  const { pitch, yaw } = useMemo(() => getPitchYaw(mirrorQuaternion), [mirrorQuaternion]);

  // Playback loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prev) => {
          let next = prev + 0.02;
          if (next > sunsetTime) next = sunriseTime;
          if (next < sunriseTime) next = sunsetTime;
          return next;
        });
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sunriseTime, sunsetTime]);

  return (
    <main className="h-screen flex p-10 gap-10 overflow-hidden">
      {/* Simulation Viewport */}
      <section className="flex-1 relative overflow-hidden glass-panel">
        <div className="absolute top-8 left-8 z-20 pointer-events-none">
          <div className="glass-panel p-6 border-none bg-white/5">
            <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">Active Viewport</p>
            <h3 className="font-display text-2xl text-on-surface font-light">Reflection Logic Alpha</h3>
          </div>
        </div>

        <SimulationCanvas time={time} />

        <TimeControls
          time={time}
          setTime={setTime}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          sunriseTime={sunriseTime}
          sunsetTime={sunsetTime}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </section>

      {/* Right Side Data Panel */}
      <div className="w-[400px]">
        <TelemetryPanel
          time={time}
          azimuth={actualSunData.azimuth || localSunData.azimuth}
          altitude={actualSunData.altitude || localSunData.altitude}
          pitch={(actualSunData.motorV || pitch) + vOffset}
          yaw={(actualSunData.motorH || yaw) + hOffset}
          hOffset={hOffset}
          vOffset={vOffset}
          setHOffset={setHOffset}
          setVOffset={setVOffset}
        />
      </div>
    </main>
  );
}