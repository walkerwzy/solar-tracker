import React from 'react';
import { Clock, MapPin, Sun, Settings2, Download, LocateFixed, Calendar } from 'lucide-react';
import { Dial } from './Dial';

interface TelemetryPanelProps {
  time: number;
  azimuth: number;
  altitude: number;
  pitch: number;
  yaw: number;
  hOffset: number;
  vOffset: number;
  setHOffset: (v: number) => void;
  setVOffset: (v: number) => void;
  selectedDate: string;
  setSelectedDate: (d: string) => void;
  lat: number;
  lon: number;
  declination: number;
}

export const TelemetryPanel: React.FC<TelemetryPanelProps> = ({
  time,
  azimuth,
  altitude,
  pitch,
  yaw,
  hOffset,
  vOffset,
  setHOffset,
  setVOffset,
  selectedDate,
  setSelectedDate,
  lat,
  lon,
  declination
}) => {
  const formatTime = (t: number) => {
    const hours = Math.floor(t);
    const mins = Math.floor((t % 1) * 60);
    const secs = Math.floor(((t % 1) * 60 % 1) * 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateStr: string) => {
    return dateStr;
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <section className="glass-panel p-8 flex flex-col gap-8 h-full overflow-y-auto border-none">
      <div className="flex justify-between items-center">
        <h3 className="font-display text-2xl font-bold text-on-surface tracking-tight">Live Telemetry</h3>
        <span className="text-[10px] text-primary font-mono bg-primary/10 px-2 py-0.5 rounded border border-primary/20">STABLE</span>
      </div>

      <div className="space-y-6">
        {/* Temporal Reference */}
        <div className="bg-white/5 p-6 rounded-[24px] border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="text-primary w-4 h-4" />
              <span className="text-[10px] text-on-surface-dim uppercase tracking-widest">Temporal Reference</span>
            </div>
            <div className="relative w-4 h-8">
              <input
                type="date"
                id="panel-date-picker"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <label
                htmlFor="panel-date-picker"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 pointer-events-none" />
              </label>
            </div>
          </div>
          <div className="font-mono text-lg text-on-surface tracking-wider">
            {selectedDate} {formatTime(time)}
          </div>
        </div>

        {/* Node Geolocation */}
        <div className="bg-white/5 p-6 rounded-[24px] border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="text-primary w-4 h-4" />
              <span className="text-[10px] text-on-surface-dim uppercase tracking-widest">Node Geolocation</span>
            </div>
            <button className="text-on-surface-dim hover:text-primary transition-colors" title="Request Location">
              <LocateFixed className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-[10px] text-on-surface-dim">LATITUDE</span>
              <span className="font-mono text-on-surface">{lat.toFixed(2)}° {lat >= 0 ? 'N' : 'S'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-on-surface-dim">LONGITUDE</span>
              <span className="font-mono text-on-surface">{lon.toFixed(2)}° {lon >= 0 ? 'E' : 'W'}</span>
            </div>
          </div>
        </div>

        {/* Solar Dynamics */}
        <div className="bg-white/5 p-6 rounded-[24px] border border-white/10 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="text-primary w-4 h-4" />
            <span className="text-[10px] text-on-surface-dim uppercase tracking-widest">Solar Dynamics</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Dial
              label="Azimuth"
              value={`${azimuth.toFixed(1)}°`}
              percentage={azimuth / 360}
              type="azimuth"
            />
            <Dial
              label="Altitude"
              value={`${altitude.toFixed(1)}°`}
              percentage={altitude / 90}
              type="altitude"
            />
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <span className="text-sm text-on-surface-dim">Declination</span>
            <span className="font-mono text-on-surface font-medium">{declination.toFixed(1)}°</span>
          </div>
        </div>

        {/* Actuator Calculation */}
        <div className="bg-white/5 p-6 rounded-[24px] border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Settings2 className="text-primary w-4 h-4" />
            <span className="text-[10px] text-on-surface-dim uppercase tracking-widest">Actuator Calculation</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 p-4 rounded-[16px]">
              <p className="text-[10px] text-on-surface-dim uppercase mb-1">PITCH</p>
              <p className="font-mono text-xl text-primary">{pitch.toFixed(1)}°</p>
            </div>
            <div className="bg-white/5 p-4 rounded-[16px]">
              <p className="text-[10px] text-on-surface-dim uppercase mb-1">YAW</p>
              <p className="font-mono text-xl text-primary">{yaw.toFixed(1)}°</p>
            </div>
          </div>

          {/* Calibration Offsets */}
          <div className="border-t border-white/10 pt-6">
            <span className="text-[10px] text-on-surface-dim uppercase tracking-widest block mb-4">Calibration Offsets</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[9px] text-on-surface-dim uppercase" htmlFor="h-offset">Horizontal (H)</label>
                <div className="relative">
                  <input
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-on-surface focus:outline-none focus:border-primary/50"
                    id="h-offset"
                    type="number"
                    step="0.1"
                    value={hOffset}
                    onChange={(e) => setHOffset(parseFloat(e.target.value) || 0)}
                  />
                  <span className="absolute right-3 top-2 text-[10px] text-on-surface-dim">°</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] text-on-surface-dim uppercase" htmlFor="v-offset">Vertical (V)</label>
                <div className="relative">
                  <input
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-on-surface focus:outline-none focus:border-primary/50"
                    id="v-offset"
                    type="number"
                    step="0.1"
                    value={vOffset}
                    onChange={(e) => setVOffset(parseFloat(e.target.value) || 0)}
                  />
                  <span className="absolute right-3 top-2 text-[10px] text-on-surface-dim">°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button className="w-full bg-white text-black py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
          <Download className="w-4 h-4" />
          EXPORT DATA LOG
        </button>
      </div>
    </section>
  );
};
