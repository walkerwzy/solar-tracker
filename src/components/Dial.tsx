import React from 'react';
import { cn } from '@/lib/utils';

interface DialProps {
  label: string;
  value: string;
  percentage: number; // 0 to 1
  type: 'azimuth' | 'altitude';
  className?: string;
}

export const Dial: React.FC<DialProps> = ({ label, value, percentage, type, className }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - percentage * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-2 bg-white/5 p-4 rounded-2xl border border-white/5", className)}>
      <span className="text-[10px] text-on-surface-dim uppercase tracking-widest">{label}</span>
      <div className="relative w-20 h-20">
        <svg className={cn("w-full h-full", type === 'azimuth' ? "-rotate-90" : "")} viewBox="0 0 80 80">
          {type === 'azimuth' ? (
            <>
              <circle
                className="fill-none stroke-white/10 stroke-[4]"
                cx="40"
                cy="40"
                r={radius}
              />
              <circle
                className="fill-none stroke-primary stroke-[4] stroke-linecap-round transition-[stroke-dashoffset] duration-300"
                cx="40"
                cy="40"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
              <line
                className="stroke-primary stroke-[2] origin-[40px_40px] transition-transform duration-300"
                x1="40"
                y1="40"
                x2="40"
                y2="10"
                style={{ transform: `rotate(${percentage * 360}deg)` }}
              />
              <circle cx="40" cy="40" r="2" className="fill-primary" />
            </>
          ) : (
            <>
              <line className="stroke-white/10 stroke-[2]" x1="10" x2="70" y1="70" y2="70" />
              <line className="stroke-white/10 stroke-[1] stroke-dasharray-[2_2]" x1="10" x2="10" y1="70" y2="10" />
              <path
                className="fill-none stroke-white/10 stroke-[4]"
                d="M 70,70 A 60,60 0 0 0 10,10"
              />
              <path
                className="fill-none stroke-primary stroke-[4] stroke-linecap-round transition-[stroke-dashoffset] duration-300"
                d="M 70,70 A 60,60 0 0 0 10,10"
                strokeDasharray="94.2"
                strokeDashoffset={94.2 - (percentage * 94.2)}
              />
              <line
                className="stroke-primary stroke-[2] origin-[10px_70px] transition-transform duration-300"
                x1="10"
                y1="70"
                x2="70"
                y2="70"
                style={{ transform: `rotate(${-percentage * 90}deg)` }}
              />
              <circle cx="10" cy="70" r="2" className="fill-primary" />
            </>
          )}
        </svg>
        <div className={cn(
          "absolute inset-0 flex items-center justify-center",
          type === 'azimuth' ? "pt-10" : "items-end justify-end pb-2 pr-4"
        )}>
          <span className="font-mono text-[10px] text-on-surface-dim">{type === 'azimuth' ? '360°' : '0°'}</span>
        </div>
      </div>
      <span className="font-mono text-primary font-bold">{value}</span>
    </div>
  );
};
