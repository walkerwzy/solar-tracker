import React, { useState } from 'react';
import { Play, Pause, FastForward, Rewind, Calendar } from 'lucide-react';

interface TimeControlsProps {
  time: number;
  setTime: (t: number) => void;
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  sunriseTime?: number;
  sunsetTime?: number;
  selectedDate: string;
  setSelectedDate: (d: string) => void;
}

export const TimeControls: React.FC<TimeControlsProps> = ({ 
  time, 
  setTime, 
  isPlaying, 
  setIsPlaying,
  sunriseTime = 6,
  sunsetTime = 20,
  selectedDate,
  setSelectedDate
}) => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  
  const handleRewind = () => {
    setPlaybackSpeed((prev) => {
      if (prev === 1) return 4;
      if (prev === 4) return 2;
      return 1;
    });
  };
  
  const handleForward = () => {
    setPlaybackSpeed((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 4;
      return 1;
    });
  };

  const formatTime = (t: number) => {
    const hours = Math.floor(t);
    const mins = Math.floor((t % 1) * 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}月${d.getDate()}日`;
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-20">
      <div className="glass-panel p-8 shadow-2xl border-none bg-white/5">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="date"
              id="date-picker"
              className="absolute opacity-0 w-8 h-8 cursor-pointer"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <label 
              htmlFor="date-picker" 
              className="flex items-center gap-2 text-[10px] font-mono text-on-surface-dim cursor-pointer hover:text-primary transition-colors"
            >
              <Calendar className="w-3 h-3" />
              {formatDate(selectedDate)}
            </label>
          </div>
          <div className="text-center">
            <span className="text-xs font-display font-bold text-primary uppercase tracking-widest">Solar Time Simulation</span>
          </div>
          <span className="text-[10px] font-mono text-on-surface-dim">
            {formatTime(sunsetTime)} (DUSK)
          </span>
        </div>
        
        <input
          className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
          id="time-slider"
          type="range"
          min={sunriseTime}
          max={sunsetTime}
          step="0.01"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />

        <div className="flex justify-between items-center mt-6">
          <button 
            className="text-on-surface-dim hover:text-primary transition-colors"
            onClick={handleRewind}
          >
            <Rewind className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            {playbackSpeed > 1 && (
              <span className="text-xs font-mono text-primary bg-primary/20 px-2 py-1 rounded">
                {playbackSpeed}x
              </span>
            )}
            <button
              className="text-primary bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
          </div>
          
          <button 
            className="text-on-surface-dim hover:text-primary transition-colors"
            onClick={handleForward}
          >
            <FastForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
