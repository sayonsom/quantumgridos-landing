"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function QuantumArrowThree({ height = 260 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const axes = new THREE.AxesHelper(2);
    scene.add(axes);

    function makeTextSprite(text, color, scale = 0.4) {
      const canvas = document.createElement("canvas");
      const size = 256;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = color;
      ctx.font = "bold 56px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, size / 2, size / 2);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
      });

      const sprite = new THREE.Sprite(material);
      sprite.scale.set(scale, scale, scale);
      sprite.userData.texture = texture;
      return sprite;
    }

    const xLabel = makeTextSprite("X", "#f97316");
    xLabel.position.set(2.3, 0, 0);
    scene.add(xLabel);

    const yLabel = makeTextSprite("Y", "#22c55e");
    yLabel.position.set(0, 2.3, 0);
    scene.add(yLabel);

    const zLabel = makeTextSprite("Z", "#38bdf8");
    zLabel.position.set(0, 0, 2.3);
    scene.add(zLabel);

    // Sphere with soft glow
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      emissive: 0x60a5fa,
      emissiveIntensity: 0.4,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Multi-layered muted random glow behind sphere
    const glowLayers = [];
    for (let i = 0; i < 4; i++) {
      const glowGeo = new THREE.CircleGeometry(1.6 + i * 0.35, 64);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        transparent: true,
        opacity: 0.12 - i * 0.03,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      scene.add(glowMesh);
      glowLayers.push({
        mesh: glowMesh,
        mat: glowMat,
        offsetX: (Math.random() - 0.5) * 0.3,
        offsetY: (Math.random() - 0.5) * 0.3,
        speed: 0.3 + Math.random() * 0.4,
      });
    }

    // Arrow with consistent smooth rotation
    const arrowLength = 1.3;
    const arrowDir = new THREE.Vector3(0, 0, 1).normalize();
    const arrowOrigin = new THREE.Vector3(0, 0, 0);
    const arrowHeadLength = 0.35;
    const arrowHeadWidth = 0.22;

    const arrow = new THREE.ArrowHelper(
      arrowDir,
      arrowOrigin,
      arrowLength,
      0xffffff,
      arrowHeadLength,
      arrowHeadWidth
    );
    scene.add(arrow);

    // Wireframe Power Grid Box
    const boxGeo = new THREE.BoxGeometry(1.8, 0.5, 0.9);
    const wireframeGeo = new THREE.EdgesGeometry(boxGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xea580b,
      linewidth: 2,
    });
    const powerGridWire = new THREE.LineSegments(wireframeGeo, wireframeMat);
    powerGridWire.position.set(3.8, -0.3, 0);
    scene.add(powerGridWire);

    // Inner fill with glow
    const boxFillMat = new THREE.MeshBasicMaterial({
      color: 0xea580b,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const boxFill = new THREE.Mesh(boxGeo, boxFillMat);
    boxFill.position.copy(powerGridWire.position);
    scene.add(boxFill);

    // "Power Grid" label - adjusted position
    const powerGridLabel = makeTextSprite("Power Grid", "#ea580b", 0.6);
    powerGridLabel.position.set(3.8, -1.15, 0);
    scene.add(powerGridLabel);

    // Connector line
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6b7280,
      transparent: true,
      opacity: 0.4,
    });
    const linePoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(2.9, -0.2, 0),
    ];
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const connectorLine = new THREE.Line(lineGeo, lineMat);
    scene.add(connectorLine);

    // Glowing spark particle
    const sparkGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const sparkMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 1,
    });
    const spark = new THREE.Mesh(sparkGeo, sparkMat);
    scene.add(spark);
    spark.visible = false;

    // Spark glow halo
    const sparkHaloGeo = new THREE.CircleGeometry(0.25, 32);
    const sparkHaloMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparkHalo = new THREE.Mesh(sparkHaloGeo, sparkHaloMat);
    scene.add(sparkHalo);
    sparkHalo.visible = false;

    // Camera controls state
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const cameraDistance = Math.sqrt(
      camera.position.x ** 2 + camera.position.y ** 2 + camera.position.z ** 2
    );
    let theta = Math.atan2(camera.position.z, camera.position.x);
    let phi = Math.acos(camera.position.y / cameraDistance);

    // Animation state
    let arrowRotation = 0;
    const arrowSpeed = 1.8;

    let glowPhase = 0;
    let sparkActive = false;
    let sparkTime = 0;
    const sparkDuration = 1.2;
    const sparkStart = new THREE.Vector3(0, 0, 0);
    const sparkEnd = new THREE.Vector3(2.9, -0.25, 0);

    let lastTime = performance.now();
    let frameId;
    let isPaused = false;

    function startSpark() {
      sparkActive = true;
      sparkTime = 0;
      spark.visible = true;
      sparkHalo.visible = true;
      spark.position.copy(sparkStart);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function updateCameraPosition() {
      camera.position.x = cameraDistance * Math.sin(phi) * Math.cos(theta);
      camera.position.y = cameraDistance * Math.cos(phi);
      camera.position.z = cameraDistance * Math.sin(phi) * Math.sin(theta);
      camera.lookAt(0, 0, 0);
    }

    function onMouseDown(e) {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function onMouseMove(e) {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      theta -= deltaX * 0.01;
      phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi + deltaY * 0.01));

      updateCameraPosition();

      previousMousePosition = { x: e.clientX, y: e.clientY };
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onResize() {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }

    function onMouseEnter() {
      isPaused = true;
    }

    function onMouseLeave() {
      isPaused = false;
      isDragging = false;
      lastTime = performance.now();
    }

    window.addEventListener("resize", onResize);
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    function animate(now) {
      const dt = isPaused ? 0 : Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      // Smooth consistent arrow rotation
      const prevRot = arrowRotation;
      arrowRotation = (arrowRotation + arrowSpeed * dt) % (Math.PI * 2);

      arrow.setDirection(
        new THREE.Vector3(
          Math.sin(arrowRotation) * 0.5,
          Math.cos(arrowRotation * 1.3) * 0.5,
          Math.cos(arrowRotation)
        ).normalize()
      );

      // Trigger spark every rotation
      if (prevRot > arrowRotation && !isPaused) {
        startSpark();
      }

      // Glow color pulse - more muted with random offsets
      glowPhase += dt * 0.5;

      glowLayers.forEach((layer, i) => {
        const localPhase = glowPhase * layer.speed + i * 0.8;
        const t = (Math.sin(localPhase) + 1) / 2;
        const hue = (280 / 360) * (1 - t * 0.6) + (30 / 360) * (t * 0.4);

        layer.mat.color.setHSL(hue, 0.5 + t * 0.2, 0.45);

        const dir = camera.position
          .clone()
          .normalize()
          .multiplyScalar(-0.12 - i * 0.06);

        layer.mesh.position.set(
          dir.x + layer.offsetX * Math.sin(localPhase * 0.7),
          dir.y + layer.offsetY * Math.cos(localPhase * 0.5),
          dir.z
        );
        layer.mesh.lookAt(camera.position);
      });

      sphereMat.emissiveIntensity = 0.35 + 0.15 * Math.sin(glowPhase + 0.7);
      boxFillMat.opacity = 0.15 + 0.08 * Math.sin(glowPhase + 1.3);

      // Spark animation
      if (sparkActive) {
        sparkTime += dt;
        let u = sparkTime / sparkDuration;
        if (u >= 1) {
          u = 1;
          sparkActive = false;
          spark.visible = false;
          sparkHalo.visible = false;
        }
        const e = easeInOutCubic(u);
        spark.position.lerpVectors(sparkStart, sparkEnd, e);
        sparkHalo.position.copy(spark.position);
        sparkHalo.lookAt(camera.position);

        const fade = 1 - u;
        sparkMat.opacity = fade;
        sparkHaloMat.opacity = fade * 0.6;
        sparkHalo.scale.setScalar(1 + u * 0.5);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      if (frameId) cancelAnimationFrame(frameId);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      sphereGeo.dispose();
      boxGeo.dispose();
      wireframeGeo.dispose();
      lineGeo.dispose();
      sparkGeo.dispose();
      sparkHaloGeo.dispose();
      sphereMat.dispose();
      wireframeMat.dispose();
      boxFillMat.dispose();
      lineMat.dispose();
      sparkMat.dispose();
      sparkHaloMat.dispose();

      glowLayers.forEach((layer) => {
        layer.mesh.geometry.dispose();
        layer.mat.dispose();
      });

      [xLabel, yLabel, zLabel, powerGridLabel].forEach((sprite) => {
        if (!sprite) return;
        if (sprite.material.map) sprite.material.map.dispose();
        sprite.material.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height,
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        cursor: "grab",
      }}
    />
  );
}