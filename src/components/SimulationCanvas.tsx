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
    mirrorGroup: THREE.Group;
    mirrorMesh: THREE.Mesh;
    normalLine: THREE.Line;
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

    const northGroup = new THREE.Group();

    const arrowStemGeom = new THREE.CylinderGeometry(0.08, 0.08, 2);
    const arrowStemMat = new THREE.MeshBasicMaterial({ color: 0xff4444 });
    const arrowStem = new THREE.Mesh(arrowStemGeom, arrowStemMat);
    arrowStem.position.y = 1;
    northGroup.add(arrowStem);

    const arrowHeadGeom = new THREE.ConeGeometry(0.25, 0.6, 3);
    const arrowHead = new THREE.Mesh(arrowHeadGeom, arrowStemMat);
    arrowHead.position.y = 2.3;
    arrowHead.rotation.y = Math.PI;
    northGroup.add(arrowHead);

    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ff4444';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', 32, 32);
    const nTexture = new THREE.CanvasTexture(canvas);
    const nSpriteMat = new THREE.SpriteMaterial({ map: nTexture });
    const nSprite = new THREE.Sprite(nSpriteMat);
    nSprite.position.set(0.8, 2.5, 0);
    nSprite.scale.set(1, 1, 1);
    northGroup.add(nSprite);

    northGroup.position.set(-20, 0, 0);
    scene.add(northGroup);

    // Mirror
    const mirrorGroup = new THREE.Group();
    const mirrorGeom = new THREE.BoxGeometry(2.5, 0.1, 2.5);
    const mirrorMat = new THREE.MeshPhongMaterial({
      color: 0x72dcff,
      shininess: 200,
      specular: 0xffffff,
      transparent: true,
      opacity: 0.9
    });
    const mirrorMesh = new THREE.Mesh(mirrorGeom, mirrorMat);
    mirrorGroup.add(mirrorMesh);
    mirrorGroup.position.copy(mirrorPos);
    scene.add(mirrorGroup);

    const supportGeom = new THREE.CylinderGeometry(0.15, 0.15, 2);
    const supportMat = new THREE.MeshPhongMaterial({ color: 0x23233f });
    const support = new THREE.Mesh(supportGeom, supportMat);
    support.position.y = -1;
    mirrorGroup.add(support);

const normalLineGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0.1, 0),
      new THREE.Vector3(0, 3, 0)
    ]);
    const normalLineMat = new THREE.LineDashedMaterial({
      color: 0x00ff00,
      dashSize: 0.3,
      gapSize: 0.15,
      linewidth: 2
    });
    const normalLine = new THREE.Line(normalLineGeom, normalLineMat);
    normalLine.computeLineDistances();
    mirrorGroup.add(normalLine);

    const createBeam = (color: number) => {
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 });
      const geom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      return new THREE.Line(geom, mat);
    };
    const incomingBeam = createBeam(0xffffff);
    const reflectedBeam = createBeam(0x72dcff);
    scene.add(incomingBeam, reflectedBeam);

    const coreBeamMat = new THREE.MeshBasicMaterial({ color: 0x72dcff, transparent: true, opacity: 0.2 });
    const incomingCore = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), coreBeamMat);
    const reflectedCore = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1), coreBeamMat);
    scene.add(incomingCore, reflectedCore);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    scene.add(directionalLight);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      sunGroup,
      mirrorGroup,
      mirrorMesh,
      normalLine,
      incomingBeam,
      reflectedBeam,
      incomingCore,
      reflectedCore,
      directionalLight
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
        // Debug: check if renderer has a canvas
        if (sceneRef.current.renderer.domElement) {
          // console.log('Renderer canvas exists');
        }
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

    const inc = new THREE.Vector3().copy(mirrorPos).sub(sunPos).normalize();
    const ref = new THREE.Vector3().copy(targetPos).sub(mirrorPos).normalize();
    const bisector = new THREE.Vector3().addVectors(inc, ref).normalize();
    const bisectorAngle = Math.atan2(bisector.x, bisector.z) + Math.PI;
    normalLine.rotation.y = -bisectorAngle;

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
