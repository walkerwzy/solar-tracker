import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { calculateSunPosition, calculateMirrorOrientation } from '@/lib/solarCalculations';

interface SimulationCanvasProps {
  time: number;
}

export const SimulationCanvas: React.FC<SimulationCanvasProps> = ({ time }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    sunGroup: THREE.Group;
    mirrorMesh: THREE.Mesh;
    normalLine: THREE.Object3D;
    incomingBeam: THREE.Line;
    reflectedBeam: THREE.Line;
    incomingCore: THREE.Mesh;
    reflectedCore: THREE.Mesh;
    directionalLight: THREE.DirectionalLight;
  } | null>(null);

  const targetPos = new THREE.Vector3(8, 0, 0);
  const mirrorPos = new THREE.Vector3(-8, 0, 0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060614);

    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(0, 15, 25);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    const grid = new THREE.GridHelper(50, 50, 0x1d1d37, 0x111127);
    scene.add(grid);

    // North arrow
    const northGroup = new THREE.Group();
    const arrowStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2),
      new THREE.MeshBasicMaterial({ color: 0xff4444 })
    );
    arrowStem.position.y = 1;
    northGroup.add(arrowStem);
    const arrowHead = new THREE.Mesh(
      new THREE.ConeGeometry(0.25, 0.6, 3),
      new THREE.MeshBasicMaterial({ color: 0xff4444 })
    );
    arrowHead.position.y = 2.3;
    arrowHead.rotation.y = Math.PI;
    northGroup.add(arrowHead);
    const nCanvas = document.createElement('canvas');
    nCanvas.width = 64; nCanvas.height = 64;
    const nCtx = nCanvas.getContext('2d')!;
    nCtx.fillStyle = '#ff4444';
    nCtx.font = 'bold 48px sans-serif';
    nCtx.textAlign = 'center';
    nCtx.textBaseline = 'middle';
    nCtx.fillText('N', 32, 32);
    const nTexture = new THREE.CanvasTexture(nCanvas);
    const nSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: nTexture }));
    nSprite.position.set(0.8, 2.5, 0);
    northGroup.add(nSprite);
    northGroup.position.set(-15, 0, -15);
    scene.add(northGroup);

    // Target (House)
    const houseGroup = new THREE.Group();
    houseGroup.add(new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshPhongMaterial({ color: 0x1d1d37, emissive: 0x72dcff, emissiveIntensity: 0.05 })
    ));
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(1.6, 1.2, 4),
      new THREE.MeshPhongMaterial({ color: 0x23233f })
    );
    roof.position.y = 2.6;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);
    houseGroup.position.copy(targetPos);
    scene.add(houseGroup);

    // Normal line (bisector)
    const normalLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 3, 0)]),
      new THREE.LineDashedMaterial({ color: 0x00ff00, dashSize: 0.3, gapSize: 0.15 })
    );
    normalLine.computeLineDistances();
    scene.add(normalLine);

    // Mirror
    const mirrorGroup = new THREE.Group();
    const mirrorMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.1, 2.5),
      new THREE.MeshPhongMaterial({ color: 0x72dcff, shininess: 200, specular: 0xffffff, transparent: true, opacity: 0.9 })
    );
    mirrorGroup.add(mirrorMesh);
    const support = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 2),
      new THREE.MeshPhongMaterial({ color: 0x23233f })
    );
    support.position.y = -1;
    mirrorGroup.add(support);
    mirrorGroup.position.copy(mirrorPos);
    scene.add(mirrorGroup);

    // Sun
    const sunGroup = new THREE.Group();
    const sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xfff6f1 })
    );
    const sunCanvas = document.createElement('canvas');
    sunCanvas.width = 64; sunCanvas.height = 64;
    const sunCtx = sunCanvas.getContext('2d')!;
    const gradient = sunCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 240, 200, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 150, 0, 0)');
    sunCtx.fillStyle = gradient;
    sunCtx.fillRect(0, 0, 64, 64);
    sunSphere.add(new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(sunCanvas),
      color: 0xff9d00,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    })));
    sunSphere.scale.set(4, 4, 1);
    sunGroup.add(sunSphere);
    scene.add(sunGroup);

    // Beams
    const createBeam = (color: number) => new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 })
    );
    const incomingBeam = createBeam(0xffffff);
    const reflectedBeam = createBeam(0x72dcff);
    scene.add(incomingBeam, reflectedBeam);

    const coreBeamMat = new THREE.MeshBasicMaterial({ color: 0x72dcff, transparent: true, opacity: 0.2 });
    const incomingCore = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), coreBeamMat);
    const reflectedCore = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), coreBeamMat);
    scene.add(incomingCore, reflectedCore);

    // Lights
    scene.add(new THREE.AmbientLight(0x404040, 1.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    scene.add(directionalLight);

    sceneRef.current = {
      scene, camera, renderer, sunGroup, mirrorMesh, normalLine,
      incomingBeam, reflectedBeam, incomingCore, reflectedCore, directionalLight
    };

    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      const { camera, renderer } = sceneRef.current;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      if (sceneRef.current) {
        sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
      }
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { sunGroup, mirrorMesh, normalLine, incomingBeam, reflectedBeam, incomingCore, reflectedCore, directionalLight } = sceneRef.current;
    
    const { position: sunPos } = calculateSunPosition(time);
    sunGroup.position.copy(sunPos);
    directionalLight.position.copy(sunPos);

    const quaternion = calculateMirrorOrientation(sunPos, mirrorPos, targetPos);
    mirrorMesh.quaternion.copy(quaternion);

    // Rotate normal line around the mirror center
    normalLine.position.copy(mirrorPos);
    const inc = new THREE.Vector3().copy(mirrorPos).sub(sunPos).normalize();
    const ref = new THREE.Vector3().copy(targetPos).sub(mirrorPos).normalize();
    const bisector = new THREE.Vector3().addVectors(inc, ref).normalize();
    const angle = Math.atan2(bisector.x, bisector.z);
    normalLine.rotation.set(0, -angle, 0);

    incomingBeam.geometry.setFromPoints([sunPos, mirrorPos]);
    reflectedBeam.geometry.setFromPoints([mirrorPos, targetPos]);

    const updateBeamTube = (tube: THREE.Mesh, p1: THREE.Vector3, p2: THREE.Vector3) => {
      const dist = p1.distanceTo(p2);
      tube.scale.set(1, dist, 1);
      tube.position.copy(p1).lerp(p2, 0.5);
      tube.lookAt(p2);
      tube.rotateX(Math.PI / 2);
    };

    updateBeamTube(incomingCore, sunPos, mirrorPos);
    updateBeamTube(reflectedCore, mirrorPos, targetPos);
  }, [time]);

  return <div ref={containerRef} className="w-full h-full" />;
};