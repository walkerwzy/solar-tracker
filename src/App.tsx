import { useState, useEffect, useMemo } from 'react';
import { SimulationCanvas } from './components/SimulationCanvas';
import { TelemetryPanel } from './components/TelemetryPanel';
import { TimeControls } from './components/TimeControls';
import { getSolarData, getSunTimes } from './lib/solar';

export default function App() {
  const [time, setTime] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isReversed, setIsReversed] = useState(false);
  const [hOffset, setHOffset] = useState(0);
  const [vOffset, setVOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return now.toISOString().split('T')[0];
  });
  
  const [sunriseTime, setSunriseTime] = useState(6);
  const [sunsetTime, setSunsetTime] = useState(20);
  const [lat] = useState(31.23);
  const [lon] = useState(121.47);

  const declination = useMemo(() => {
    const date = new Date(selectedDate);
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
    return 23.45 * Math.sin((2 * Math.PI / 365) * (dayOfYear - 81));
  }, [selectedDate]);

  useEffect(() => {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const date = new Date(year, month - 1, day, 12);
    const times = getSunTimes(date, lat, lon);
    
    if (times.sunrise) {
      const [sh, sm] = times.sunrise.split(':').map(Number);
      const dawnHours = (sh * 60 + sm - 30) / 60;
      setSunriseTime(Math.max(0, dawnHours));
    }
    if (times.sunset) {
      const [ss, sm] = times.sunset.split(':').map(Number);
      const duskHours = (ss * 60 + sm + 30) / 60;
      setSunsetTime(Math.min(24, duskHours));
    }
  }, [selectedDate, lat, lon]);

  const solarData = useMemo(() => {
    return getSolarData(time, selectedDate, lat, lon, 25.0, 10.0);
  }, [time, selectedDate, lat, lon]);

  const actualSunData = useMemo(() => ({
    azimuth: solarData.azimuth,
    altitude: solarData.altitude,
    motorH: solarData.motorH,
    motorV: solarData.motorV
  }), [solarData]);

  const pitch = solarData.motorV;
  const yaw = solarData.motorH;

  // Playback loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prev) => {
          const delta = 0.02 * playbackSpeed * (isReversed ? -1 : 1);
          let next = prev + delta;
          if (next > sunsetTime) next = sunriseTime;
          if (next < sunriseTime) next = sunsetTime;
          return next;
        });
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying, sunriseTime, sunsetTime, playbackSpeed, isReversed]);

  return (
    <main className="h-screen flex flex-col lg:flex-row p-4 lg:p-10 gap-4 lg:gap-10 overflow-y-auto lg:overflow-hidden">
      {/* Simulation Viewport */}
      <section className="flex-1 relative overflow-hidden glass-panel min-h-[225px] md:min-h-[450px] lg:min-h-0 order-1 lg:order-1">
        <div className="hidden lg:block absolute top-4 lg:top-8 left-4 lg:left-8 z-20 pointer-events-none">
          <div className="glass-panel p-4 lg:p-6 border-none bg-white/5">
            <p className="text-[10px] text-primary uppercase font-bold tracking-widest mb-1">Active Viewport</p>
            <h3 className="font-display text-lg lg:text-2xl text-on-surface font-light">Reflection Logic Alpha</h3>
          </div>
        </div>

        <SimulationCanvas time={time} />

        <div className="hidden lg:block">
          <TimeControls
            time={time}
            setTime={setTime}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            sunriseTime={sunriseTime}
            sunsetTime={sunsetTime}
            playbackSpeed={playbackSpeed}
            setPlaybackSpeed={setPlaybackSpeed}
            isReversed={isReversed}
            setIsReversed={setIsReversed}
            embedded={true}
          />
        </div>
      </section>

      <div className="lg:hidden w-full order-2">
        <TimeControls
          time={time}
          setTime={setTime}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          sunriseTime={sunriseTime}
          sunsetTime={sunsetTime}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
          isReversed={isReversed}
          setIsReversed={setIsReversed}
          embedded={false}
        />
      </div>

      {/* Right Side Data Panel */}
      <div className="w-full md:w-[768px] lg:w-[400px] lg:min-w-[400px] order-3 lg:order-3 no-scrollbar">
<TelemetryPanel
          time={time}
          azimuth={actualSunData.azimuth}
          altitude={actualSunData.altitude}
          pitch={pitch + vOffset}
          yaw={yaw + hOffset}
          hOffset={hOffset}
          vOffset={vOffset}
          setHOffset={setHOffset}
          setVOffset={setVOffset}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          lat={lat}
          lon={lon}
          declination={declination}
        />
      </div>
    </main>
  );
}