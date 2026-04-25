import * as THREE from 'three';

/**
 * Calculates the sun's position in the sky based on time of day.
 * @param time Time in hours (6.0 to 20.0)
 * @returns Object containing sun position vector and angles
 */
export function calculateSunPosition(time: number) {
  const sunOrbitRadius = 8.0;
  const progress = (time - 6) / 14; // 0 to 1
  const angle = (progress * Math.PI) - (Math.PI / 2);

  const x = -2.5 + Math.cos(angle) * sunOrbitRadius;
  const y = Math.sin(Math.PI * progress) * (sunOrbitRadius * 0.99); // 太阳高度 * 0.8
  const z = Math.sin(angle) * (sunOrbitRadius * 0.5);

  const azimuth = 180 + (angle * 180 / Math.PI);
  const altitude = Math.sin(Math.PI * progress) * 90;

  return {
    position: new THREE.Vector3(x, y, z),
    azimuth,
    altitude,
    progress
  };
}

export function getSunDirection(azimuth: number, altitude: number): THREE.Vector3 {
  const azRad = (azimuth * Math.PI) / 180;
  const altRad = (altitude * Math.PI) / 180;

  const x = Math.cos(altRad) * Math.sin(azRad);
  const y = Math.sin(altRad);
  const z = Math.cos(altRad) * Math.cos(azRad);

  return new THREE.Vector3(x, y, z).normalize();
}

/**
 * Calculates the mirror orientation to reflect sun light to a target.
 * @param sunPos Current sun position
 * @param mirrorPos Current mirror position
 * @param targetPos Target position to reflect light to
 * @returns Quaternion for the mirror orientation
 */
export function calculateMirrorOrientation(
  sunPos: THREE.Vector3,
  mirrorPos: THREE.Vector3,
  targetPos: THREE.Vector3
) {
  const toSun = new THREE.Vector3().subVectors(sunPos, mirrorPos).normalize();
  const toTarget = new THREE.Vector3().subVectors(targetPos, mirrorPos).normalize();
  const halfVector = new THREE.Vector3().addVectors(toSun, toTarget).normalize();

  const up = new THREE.Vector3(0, 1, 0);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(up, halfVector);

  return quaternion;
}

/**
 * Extracts pitch and yaw from a quaternion.
 */
export function getPitchYaw(quaternion: THREE.Quaternion) {
  const euler = new THREE.Euler().setFromQuaternion(quaternion, 'YXZ');
  return {
    pitch: euler.x * (180 / Math.PI),
    yaw: euler.y * (180 / Math.PI)
  };
}
