import React from 'react';
import { Play, Pause, FastForward, Rewind } from 'lucide-react';

interface TimeControlsProps {
  time: number;
  setTime: (t: number) => void;
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  sunriseTime?: number;
  sunsetTime?: number;
  playbackSpeed: number;
  setPlaybackSpeed: (s: number) => void;
  isReversed: boolean;
  setIsReversed: (r: boolean) => void;
}

export const TimeControls: React.FC<TimeControlsProps> = ({ 
  time, 
  setTime, 
  isPlaying, 
  setIsPlaying,
  sunriseTime = 6,
  sunsetTime = 20,
  playbackSpeed,
  setPlaybackSpeed,
  isReversed,
  setIsReversed
}) => {
  
  const cycleSpeed = (current: number) => {
    if (current === 1) return 2;
    if (current === 2) return 4;
    return 1;
  };

  const handleRewind = () => {
    if (isReversed) {
      setPlaybackSpeed(cycleSpeed);
    } else {
      setIsReversed(true);
      setPlaybackSpeed(1);
      setIsPlaying(true);
    }
  };
  
  const handleForward = () => {
    if (isReversed) {
      setIsReversed(false);
      setPlaybackSpeed(1);
    } else {
      setPlaybackSpeed(cycleSpeed);
    }
  };

  const formatTime = (t: number) => {
    const hours = Math.floor(t);
    const mins = Math.floor((t % 1) * 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const formatDawn = (t: number) => {
    return formatTime(t);
  };

  const formatDusk = (t: number) => {
    return formatTime(t);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="glass-panel p-4 lg:p-8 shadow-2xl border-none bg-white/5">
        <div className="flex justify-between items-center mb-4 lg:mb-6">
          <span className="text-[10px] font-mono text-on-surface-dim">
            {formatDawn(sunriseTime)} (DAWN)
          </span>
          <div className="text-center">
            <span className="text-xs font-display font-bold text-primary uppercase tracking-widest">Solar Time Simulation</span>
          </div>
          <span className="text-[10px] font-mono text-on-surface-dim">
            {formatDusk(sunsetTime)} (DUSK)
          </span>
        </div>
        
        <input
          className="w-full h-1 lg:h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
          id="time-slider"
          type="range"
          min={sunriseTime}
          max={sunsetTime}
          step="0.01"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />

        <div className="flex justify-between items-center mt-4 lg:mt-6">
          <button 
            className={`text-on-surface-dim hover:text-primary transition-colors ${isReversed ? 'text-primary' : ''}`}
            onClick={handleRewind}
            title={isReversed ? "Decrease reverse speed" : "Reverse playback"}
          >
            <Rewind className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center w-24 relative">
            <button
              className="text-primary bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            {playbackSpeed > 1 && (
              <span className="absolute right-0 text-xs font-mono text-primary">
                {playbackSpeed}x
              </span>
            )}
          </div>
          
          <button 
            className="text-on-surface-dim hover:text-primary transition-colors"
            onClick={handleForward}
            title="Increase speed"
          >
            <FastForward className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
