"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    scene.add(camera);
    const povLight = new THREE.PointLight(0xffffff, 2.2, 30, 2);
    camera.add(povLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // ===== Lights =====
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0x404040, 0.6));
    scene.add(new THREE.HemisphereLight(0xaec6ff, 0x222222, 0.35));
    // Cool rim light from behind so the ship's silhouette pops against the dark
    const rimLight = new THREE.DirectionalLight(0x7ea6ff, 1.4);
    rimLight.position.set(-4, 2, -6);
    scene.add(rimLight);

    // ===== Shared round sprite texture (stars + trail) =====
    const spriteSize = 64;
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteSize;
    spriteCanvas.height = spriteSize;
    const spriteCtx = spriteCanvas.getContext("2d")!;
    const radial = spriteCtx.createRadialGradient(
      spriteSize / 2, spriteSize / 2, 0,
      spriteSize / 2, spriteSize / 2, spriteSize / 2
    );
    radial.addColorStop(0, "rgba(255,255,255,1)");
    radial.addColorStop(0.4, "rgba(255,255,255,0.6)");
    radial.addColorStop(1, "rgba(255,255,255,0)");
    spriteCtx.fillStyle = radial;
    spriteCtx.fillRect(0, 0, spriteSize, spriteSize);
    const spriteTex = new THREE.CanvasTexture(spriteCanvas);

    // ===== Fog plane =====
    const fogGeometry = new THREE.PlaneGeometry(30, 30);
    const fogMaterial = new THREE.MeshBasicMaterial({
      color: 0x0b1220,
      transparent: true,
      opacity: 0.18,
    });
    const fogPlane = new THREE.Mesh(fogGeometry, fogMaterial);
    fogPlane.position.z = -5;

    // ===== Starfield: two depth layers for parallax =====
    type StarLayer = {
      points: THREE.Points;
      geometry: THREE.BufferGeometry;
      material: THREE.PointsMaterial;
      speeds: Float32Array;
      count: number;
    };

    function createStarLayer(
      count: number,
      size: number,
      opacity: number,
      baseSpeed: number
    ): StarLayer {
      const positions = new Float32Array(count * 3);
      const speeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
        speeds[i] = baseSpeed * (0.6 + Math.random() * 0.8);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size,
        transparent: true,
        opacity,
        sizeAttenuation: true,
        map: spriteTex,
        alphaTest: 0.01,
        depthWrite: false,
      });
      return { points: new THREE.Points(geometry, material), geometry, material, speeds, count };
    }

    const farStars = createStarLayer(260, 0.09, 0.5, 0.0012);
    const nearStars = createStarLayer(150, 0.17, 0.8, 0.0035);

    const starGroup = new THREE.Group();
    starGroup.add(fogPlane, farStars.points, nearStars.points);
    scene.add(starGroup);

    // ===== Ship texture =====
    function createNexauvaTexture(): THREE.CanvasTexture {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, "#333333");
      gradient.addColorStop(1, "#222222");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      ctx.font = "bold 72px Inter, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "#4a6eb0";
      ctx.shadowBlur = 1;
      ctx.fillStyle = "#ffffff";
      ctx.fillText("NEXAUVA", size / 2, size / 2);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    // ===== Navigation strobes (aircraft-style: red + white) =====
    function addNavigationLights(ship: THREE.Mesh, size: number) {
      const lightColors = [0xff2a2a, 0xff2a2a, 0xffffff];
      const lightsCount = 3;
      (ship.userData as any).navLights = [] as THREE.PointLight[];

      for (let i = 0; i < lightsCount; i++) {
        const color = lightColors[i % lightColors.length];
        const light = new THREE.PointLight(color, 0, size * 5);
        const angle1 = Math.random() * Math.PI * 2;
        const angle2 = Math.random() * Math.PI * 2;
        light.position.set(
          Math.sin(angle1) * Math.cos(angle2) * size * 1.1,
          Math.sin(angle1) * Math.sin(angle2) * size * 1.1,
          Math.cos(angle1) * size * 1.1
        );
        const bulbSize = Math.min(Math.max(size * 0.04, 0.01), 0.08);
        const bulb = new THREE.Mesh(
          new THREE.SphereGeometry(bulbSize, 8, 8),
          new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 })
        );
        light.add(bulb);
        (light.userData as any) = {
          maxIntensity: 1.2 + Math.random() * 1.6,
          blinkSpeed: 0.6 + Math.random() * 0.5,
          blinkPhase: Math.random() * Math.PI * 2,
          blinkPattern: i % 3,
          bulb,
        };
        ship.add(light);
        (ship.userData as any).navLights.push(light);
      }
    }

    function createShip(size: number, baseColor: number): THREE.Mesh {
      const actualSize = size * 0.15;
      const geometry = new THREE.IcosahedronGeometry(actualSize, 0);
      const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;
      const vertices = positionAttribute.array as Float32Array;
      for (let i = 0; i < vertices.length; i += 3) {
        const distortionFactor = 0.2;
        vertices[i] += (Math.random() - 0.5) * actualSize * distortionFactor;
        vertices[i + 1] += (Math.random() - 0.5) * actualSize * distortionFactor;
        vertices[i + 2] += (Math.random() - 0.5) * actualSize * distortionFactor;
      }
      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhysicalMaterial({
        color: baseColor,
        roughness: 0.8,
        metalness: 0.1,
        reflectivity: 0.6,
        flatShading: false,
        map: createNexauvaTexture(),
        envMapIntensity: 1.5,
        normalScale: new THREE.Vector2(1.0, 1.0),
        clearcoat: 0.2,
        clearcoatRoughness: 0.9,
      });

      const ship = new THREE.Mesh(geometry, material);
      addNavigationLights(ship, actualSize);
      return ship;
    }

    // ===== Ship rigs: outer group follows path & heading; inner mesh banks =====
    type PathConfig = {
      A: number; // horizontal reach
      B: number; // depth reach
      yAmp: number;
      zBase: number;
      dir: number; // 1 or -1: travel direction around the figure-8
      speed: number;
    };

    type ShipRig = {
      group: THREE.Group;
      mesh: THREE.Mesh;
      path: PathConfig;
      u: number;
      prevHeading: number;
      bank: number;
      firstFrame: boolean;
    };

    function createShipRig(
      size: number,
      color: number,
      path: PathConfig,
      u0: number
    ): ShipRig {
      const group = new THREE.Group();
      const mesh = createShip(size, color);
      group.add(mesh);

      scene.add(group);
      return {
        group,
        mesh,
        path,
        u: u0,
        prevHeading: 0,
        bank: 0,
        firstFrame: true,
      };
    }

    // ===== Shooting star =====
    const streakCanvas = document.createElement("canvas");
    streakCanvas.width = 256;
    streakCanvas.height = 32;
    const streakCtx = streakCanvas.getContext("2d")!;
    const streakGrad = streakCtx.createLinearGradient(0, 0, 256, 0);
    streakGrad.addColorStop(0, "rgba(255,255,255,0)");
    streakGrad.addColorStop(0.8, "rgba(200,220,255,0.7)");
    streakGrad.addColorStop(1, "rgba(255,255,255,1)");
    streakCtx.fillStyle = streakGrad;
    streakCtx.fillRect(0, 8, 256, 16);
    const streakTex = new THREE.CanvasTexture(streakCanvas);
    const streakMaterial = new THREE.SpriteMaterial({
      map: streakTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const streak = new THREE.Sprite(streakMaterial);
    streak.scale.set(3.4, 0.16, 1);
    scene.add(streak);

    const shootingStar = {
      active: false,
      t0: 0,
      dur: 1.1,
      nextAt: 3 + Math.random() * 5,
      from: new THREE.Vector3(),
      to: new THREE.Vector3(),
    };

    function maybeShootingStar(now: number) {
      if (shootingStar.active) {
        const p = (now - shootingStar.t0) / shootingStar.dur;
        if (p >= 1) {
          shootingStar.active = false;
          streakMaterial.opacity = 0;
          shootingStar.nextAt = now + 4 + Math.random() * 7;
          return;
        }
        streak.position.lerpVectors(shootingStar.from, shootingStar.to, p);
        streakMaterial.opacity = Math.sin(p * Math.PI) * 0.9;
      } else if (now >= shootingStar.nextAt) {
        shootingStar.active = true;
        shootingStar.t0 = now;
        const fromX = (Math.random() - 0.2) * 12;
        const fromY = 3 + Math.random() * 2.5;
        shootingStar.from.set(fromX, fromY, -6);
        const dx = -(4 + Math.random() * 4);
        const dy = -(2 + Math.random() * 2);
        shootingStar.to.set(fromX + dx, fromY + dy, -6);
        streakMaterial.rotation = Math.atan2(dy, dx) + Math.PI;
      }
    }

    // ===== Flight paths: compact figure-8s, always in view =====
    function pathPoint(u: number, p: PathConfig, out: THREE.Vector3) {
      out.set(
        Math.sin(u) * p.A,
        Math.sin(u * 2 + 1.3) * p.yAmp,
        (Math.sin(u * 2) / 2) * p.B + p.zBase
      );
    }

    const ships: ShipRig[] = [
      // Main ship — close to the viewer
      createShipRig(
        9,
        0x555555,
        { A: 1.9, B: 1.1, yAmp: 0.3, zBase: -1.0, dir: 1, speed: 0.18 },
        0
      ),
      // Wingman — smaller, farther back, opposite direction & phase
      createShipRig(
        5.5,
        0x4a4a4a,
        { A: 3.4, B: 1.8, yAmp: 0.7, zBase: -4.5, dir: -1, speed: 0.13 },
        Math.PI
      ),
    ];

    const curPos = new THREE.Vector3();
    const nextPos = new THREE.Vector3();
    const vel = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();
    const dummy = new THREE.Object3D();

    // Place ships at their start positions immediately (no fly-in)
    for (const rig of ships) {
      pathPoint(rig.u, rig.path, curPos);
      rig.group.position.copy(curPos);
    }

    // ===== Mouse parallax =====
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduceMotion) window.addEventListener("mousemove", onMouseMove);

    // ===== Pause rendering when hero is off-screen =====
    let inView = true;
    const observer = new IntersectionObserver(
      (entries) => { inView = entries[0]?.isIntersecting ?? true; },
      { threshold: 0 }
    );
    observer.observe(container);

    // ===== Resize =====
    const fitToContainer = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / Math.max(1, clientHeight);
      camera.updateProjectionMatrix();
    };
    fitToContainer();
    const onResize = () => fitToContainer();
    window.addEventListener("resize", onResize);

    // ===== Animate =====
    const clock = new THREE.Clock();
    let animationId: number | null = null;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!inView) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      const now = clock.elapsedTime;

      // Stars: drift + gentle bob, per-layer parallax speed
      for (const layer of [farStars, nearStars]) {
        const arr = (layer.geometry.attributes.position as THREE.BufferAttribute)
          .array as Float32Array;
        for (let i = 0; i < layer.count; i++) {
          const i3 = i * 3;
          arr[i3 + 1] += Math.sin(now * 0.3 + i * 0.1) * 0.004;
          arr[i3 + 0] -= layer.speeds[i];
          if (arr[i3 + 0] < -15) arr[i3 + 0] = 15;
        }
        (layer.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      }
      starGroup.rotation.z += 0.0004;

      // Ships: advance along their paths (slow cruise; slower still with reduced motion)
      for (const rig of ships) {
        rig.u += delta * rig.path.dir * (reduceMotion ? 0.03 : rig.path.speed);
        pathPoint(rig.u, rig.path, curPos);
        pathPoint(rig.u + 0.02 * rig.path.dir, rig.path, nextPos);
        vel.subVectors(nextPos, curPos);
        rig.group.position.copy(curPos);

        // Heading: smoothly face travel direction
        lookTarget.copy(rig.group.position).add(vel);
        dummy.position.copy(rig.group.position);
        dummy.lookAt(lookTarget);
        if (rig.firstFrame) {
          // Snap orientation on the first frame so there's no visible swing-in
          rig.group.quaternion.copy(dummy.quaternion);
          rig.prevHeading = Math.atan2(vel.x, vel.z);
          rig.firstFrame = false;
        } else {
          rig.group.quaternion.slerp(dummy.quaternion, 0.08);
        }

        // Banking: roll into turns based on heading change
        const heading = Math.atan2(vel.x, vel.z);
        let dh = heading - rig.prevHeading;
        if (dh > Math.PI) dh -= Math.PI * 2;
        if (dh < -Math.PI) dh += Math.PI * 2;
        rig.prevHeading = heading;
        const targetBank = THREE.MathUtils.clamp(-dh * 55, -0.55, 0.55);
        rig.bank += (targetBank - rig.bank) * 0.06;
        rig.mesh.rotation.z = rig.bank;
        rig.mesh.rotation.y += delta * 0.12; // slow idle spin for the rocky look
      }

      // Shooting stars + parallax (skipped for reduced motion)
      if (!reduceMotion) {
        maybeShootingStar(now);
        camera.position.x += (mouse.x * 0.45 - camera.position.x) * 0.03;
        camera.position.y += (-mouse.y * 0.28 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
      }

      // Nav light strobes
      const navLights: THREE.PointLight[] = ships.flatMap(
        (rig) => ((rig.mesh.userData as any).navLights || []) as THREE.PointLight[]
      );
      navLights.forEach((light) => {
        const ud = light.userData as any;
        const { maxIntensity, blinkSpeed, blinkPhase, blinkPattern, bulb } = ud;
        let intensity = 0;
        switch (blinkPattern) {
          case 0:
            intensity = Math.abs(Math.sin(now * blinkSpeed + blinkPhase)) * maxIntensity;
            break;
          case 1:
            intensity = Math.sin(now * blinkSpeed + blinkPhase) > 0 ? maxIntensity : 0;
            break;
          case 2: {
            const cycleTime = (now * blinkSpeed + blinkPhase) % (Math.PI * 2);
            intensity =
              cycleTime < 0.2 || (cycleTime > 0.5 && cycleTime < 0.7) ? maxIntensity : 0;
            break;
          }
        }
        light.intensity = intensity;
        if (bulb) {
          const norm: number = maxIntensity ? intensity / maxIntensity : 0;
          const m = (bulb as THREE.Mesh).material as THREE.MeshBasicMaterial;
          m.opacity = 0.25 + 0.75 * norm;
          const s = 0.7 + 0.6 * norm;
          (bulb as THREE.Mesh).scale.set(s, s, s);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      if (!reduceMotion) window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();

      for (const layer of [farStars, nearStars]) {
        layer.geometry.dispose();
        layer.material.dispose();
      }
      spriteTex.dispose();
      fogGeometry.dispose();
      fogMaterial.dispose();
      streakTex.dispose();
      streakMaterial.dispose();

      for (const rig of ships) {
        const rigLights: THREE.PointLight[] = (rig.mesh.userData as any).navLights || [];
        rigLights.forEach((light) => {
          const bulb = (light.userData as any)?.bulb as THREE.Mesh | undefined;
          if (bulb) {
            (bulb.material as THREE.Material).dispose();
            bulb.geometry.dispose();
          }
          rig.mesh.remove(light);
        });
        const mat = rig.mesh.material as THREE.MeshPhysicalMaterial;
        mat.map?.dispose();
        mat.dispose();
        rig.mesh.geometry.dispose();
        scene.remove(rig.group);
      }

      camera.remove(povLight);
      renderer.dispose();
      if (renderer.domElement.parentNode)
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
  );
}
