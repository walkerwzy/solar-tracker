import * as SunCalc from '@noim/suncalc3';

export interface SunPosition {
  altitude: number;
  azimuth: number;
}

export interface SunTimes {
  sunrise: string | null;
  sunset: string | null;
}

export interface MotorAngles {
  motorH: number;
  motorV: number;
}

export interface SolarData extends SunPosition, MotorAngles {
  time: string;
}

export function getSunPosition(date: Date, lat: number, lon: number): SunPosition {
  const pos = SunCalc.getPosition(date, lat, lon);
  return {
    altitude: pos.altitudeDegrees,
    azimuth: ((pos.azimuthDegrees + 180) % 360 + 360) % 360
  };
}

export function getSunTimes(date: Date, lat: number, lon: number): SunTimes {
  const times = SunCalc.getSunTimes(date, lat, lon);
  const formatTime = (d: Date | undefined | null): string | null => {
    if (!d || !d.getTime) return null;
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };
  return {
    sunrise: formatTime(times.sunriseStart?.value),
    sunset: formatTime(times.sunsetEnd?.value)
  };
}

/**
 * Calculate motor angles using bisector method (same as tracker_logic.py)
 */
export function calculateMotorAngles(
  sunAlt: number,
  sunAzi: number,
  targetAlt: number = 0.0,
  targetAzi: number = 25.0
): MotorAngles {
  const diff = targetAzi - sunAzi;
  let motorH: number;

  if (Math.abs(diff) > 180) {
    if (targetAzi > sunAzi) {
      motorH = (sunAzi + (targetAzi - 360)) / 2;
    } else {
      motorH = (sunAzi + (targetAzi + 360)) / 2;
    }
  } else {
    motorH = (sunAzi + targetAzi) / 2;
  }
  motorH = ((motorH % 360) + 360) % 360;

  const motorV = (sunAlt + targetAlt) / 2;

  return {
    motorH: Math.round(motorH * 100) / 100,
    motorV: Math.round(motorV * 100) / 100
  };
}

/**
 * Get all solar data for a given time and location
 * @param time Hours from midnight (0-24)
 * @param date Date string (YYYY-MM-DD)
 * @param lat Latitude
 * @param lon Longitude
 * @param targetAzi Target azimuth for reflection
 * @param targetAlt Target altitude for reflection
 */
export function getSolarData(
  time: number,
  date: string,
  lat: number,
  lon: number,
  targetAzi: number = 25.0,
  targetAlt: number = 0.0
): SolarData {
  const [year, month, day] = date.split('-').map(Number);
  const queryDate = new Date(year, month - 1, day, Math.floor(time), (time % 1) * 60);

  const { altitude, azimuth } = getSunPosition(queryDate, lat, lon);
  const { motorH, motorV } = calculateMotorAngles(altitude, azimuth, targetAlt, targetAzi);

  return {
    time: queryDate.toISOString(),
    altitude: Math.round(altitude * 100) / 100,
    azimuth: Math.round(azimuth * 100) / 100,
    motorH,
    motorV
  };
}