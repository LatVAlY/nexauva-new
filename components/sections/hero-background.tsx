"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const asteroidsRef = useRef<THREE.Mesh[]>([]);
  // Ensure first frame starts centered
  const firstFrameRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    // Add camera to scene and attach a soft headlight so asteroid is visible from POV
    scene.add(camera);
    const povLight = new THREE.PointLight(0xffffff, 2.2, 30, 2);
    camera.add(povLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Brighten overall output a bit
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0x000000, 0); // transparent
    container.appendChild(renderer.domElement);

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    scene.add(new THREE.AmbientLight(0x404040, 0.6));
    scene.add(new THREE.HemisphereLight(0xaec6ff, 0x222222, 0.35));

    // Foggy shader-ish plane (simple material for perf)
    const fogGeometry = new THREE.PlaneGeometry(30, 30);
    const fogMaterial = new THREE.MeshBasicMaterial({
      color: 0x0b1220,
      transparent: true,
      opacity: 0.18,
    });
    const fogPlane = new THREE.Mesh(fogGeometry, fogMaterial);
    fogPlane.position.z = -5;

    // Particles
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Simple round sprite
    const spriteSize = 64;
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteSize;
    spriteCanvas.height = spriteSize;
    const ctx = spriteCanvas.getContext("2d")!;
    ctx.clearRect(0, 0, spriteSize, spriteSize);
    ctx.beginPath();
    ctx.arc(spriteSize / 2, spriteSize / 2, spriteSize / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.fill();
    const spriteTex = new THREE.Texture(spriteCanvas);
    spriteTex.needsUpdate = true;

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      map: spriteTex,
      alphaTest: 0.01,
      depthWrite: false,
    });

    const points = new THREE.Points(particlesGeometry, particlesMaterial);

    const group = new THREE.Group();
    group.add(fogPlane);
    group.add(points);
    scene.add(group);

    // Asteroids group
    const asteroidsGroup = new THREE.Group();
    scene.add(asteroidsGroup);

    // ===== Asteroids helpers =====
    function createNexauvaTexture(): THREE.CanvasTexture {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, size, size);
      gradient.addColorStop(0, "#333333");
      gradient.addColorStop(1, "#222222");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      // Add text
      ctx.font = "bold 72px Inter, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Create glow effect
      ctx.shadowColor = "#4a6eb0";
      ctx.shadowBlur = 1;
      ctx.fillStyle = "#ffffff";

      // Write company name
      ctx.fillText("NEXAUVA", size / 2, size / 2);

      // Create texture from canvas
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    function addNavigationLights(asteroid: THREE.Mesh, size: number) {
      const lightColors = [0xff0000, 0xff0000, 0xff0000];
      const lightsCount = 2 + Math.floor(Math.random() * 3); // 2-4 lights per asteroid

      (asteroid.userData as any).navLights = [] as THREE.PointLight[];

      for (let i = 0; i < lightsCount; i++) {
        const color =
          lightColors[Math.floor(Math.random() * lightColors.length)];
        const light = new THREE.PointLight(color, 0, size * 5); // Start with intensity 0 (off)

        // Position light on the surface of the asteroid
        const angle1 = Math.random() * Math.PI * 2;
        const angle2 = Math.random() * Math.PI * 2;
        const x = Math.sin(angle1) * Math.cos(angle2) * size * 1.1;
        const y = Math.sin(angle1) * Math.sin(angle2) * size * 1.1;
        const z = Math.cos(angle1) * size * 1.1;
        light.position.set(x, y, z);

        // Small visible glowing bulb so lights show up even without lighting surfaces
        const bulbSize = Math.min(Math.max(size * 0.04, 0.01), 0.08);
        const bulb = new THREE.Mesh(
          new THREE.SphereGeometry(bulbSize, 8, 8),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.0,
          })
        );
        light.add(bulb);
        (light.userData as any) = {
          maxIntensity: 1 + Math.random() * 2, // Random max brightness
          blinkSpeed: 0.5 + Math.random() * 0.1, // Random blink speed
          blinkPhase: Math.random() * Math.PI * 2, // Random starting phase
          blinkPattern: Math.floor(Math.random() * 3), // Different blink patterns (0, 1, or 2)
          bulb,
        };

        asteroid.add(light);
        (asteroid.userData as any).navLights.push(light);
      }
    }

    function createAsteroid(size: number, baseColor: number): THREE.Mesh {
      const actualSize = size * 0.15;
      const geometry = new THREE.IcosahedronGeometry(actualSize, 0);
      const positionAttribute = geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const vertices = positionAttribute.array as Float32Array;

      for (let i = 0; i < vertices.length; i += 3) {
        const distortionFactor = 0.2;
        vertices[i] += (Math.random() - 0.5) * actualSize * distortionFactor;
        vertices[i + 1] +=
          (Math.random() - 0.5) * actualSize * distortionFactor;
        vertices[i + 2] +=
          (Math.random() - 0.5) * actualSize * distortionFactor;
      }

      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      const nexauvaTexture = createNexauvaTexture();

      const material = new THREE.MeshPhysicalMaterial({
        color: baseColor || 0x8a7f70, // a warm, rocky tone as fallback
        roughness: 0.8, // higher roughness for more diffuse rock look
        metalness: 0.1, // slight metallic edge for subtle sheen
        reflectivity: 0.6, // still allows some reflections
        flatShading: false, // use smooth shading for better light gradients
        map: nexauvaTexture, // your asteroid texture
        envMapIntensity: 1.5, // stronger reflections to brighten the surface
        normalScale: new THREE.Vector2(1.0, 1.0),
        clearcoat: 0.2, // adds a faint surface polish
        clearcoatRoughness: 0.9,
      });

      const asteroid = new THREE.Mesh(geometry, material);

      (asteroid.userData as any).rotation = {
        x: Math.random() * 0.006 - 0.003,
        y: Math.random() * 0.006 - 0.003,
        z: Math.random() * 0.006 - 0.003,
      };
      (asteroid.userData as any).orbit = {
        radius: 2 + Math.random() * 1, // small, near center
        speed: 0.0008 + Math.random() * 0.0006,
        angle: Math.random() * Math.PI * 2,
        zOffset: -1.5, // push slightly back from POV
      };

      addNavigationLights(asteroid, actualSize);

      return asteroid;
    }

    function setupAsteroids(): THREE.Mesh[] {
      const asteroids: THREE.Mesh[] = [];
      const colors = [0x666666, 0x555555, 0x444444];
      const asteroidCount = 1; // start with one, clearly visible in center

      for (let i = 0; i < asteroidCount; i++) {
        const size = 12; // smaller so it feels less massive (actualSize ~3)
        const color = colors[Math.floor(Math.random() * colors.length)];
        const asteroid = createAsteroid(size, color);

        // Ensure orbit keeps it near center and slightly back
        const orbit = (asteroid.userData as any).orbit;
        orbit.radius = 2;
        orbit.speed = 0.01;
        orbit.zOffset = -0.5;

        // Start at screen center but a bit back
        asteroid.position.set(0, 0, orbit.zOffset || 0);

        asteroidsGroup.add(asteroid);
        asteroids.push(asteroid);
      }

      return asteroids;
    }

    function animateAsteroids(asteroids: THREE.Mesh[]) {
      if (!asteroids || !asteroids.length) return;
      const time = Date.now() * 0.001;

      asteroids.forEach((asteroid) => {
        const rot = (asteroid.userData as any).rotation;
        asteroid.rotation.x += rot.x;
        asteroid.rotation.y += rot.y;
        asteroid.rotation.z += rot.z;

        const orbit = (asteroid.userData as any).orbit;
        orbit.angle += orbit.speed;
        orbit.angle = Math.PI / 2;
        asteroid.position.x = Math.cos(orbit.angle) * orbit.radius;
        asteroid.position.y = 0;
        asteroid.position.z = Math.sin(orbit.angle) * orbit.radius + orbit.zOffset;
        // const orbitRadius = orbit.radius;
        // asteroid.position.x = Math.cos(orbit.angle) * orbitRadius;
        // asteroid.position.z =
        //   Math.sin(orbit.angle) * orbitRadius + (orbit.zOffset || 0); // keep near center but slightly back

        const navLights: THREE.PointLight[] =
          (asteroid.userData as any).navLights || [];
        navLights.forEach((light) => {
          const ud = light.userData as any;
          const { maxIntensity, blinkSpeed, blinkPhase, blinkPattern, bulb } =
            ud;
          let intensity = 0;
          switch (blinkPattern) {
            case 0:
              intensity =
                Math.abs(Math.sin(time * blinkSpeed + blinkPhase)) *
                maxIntensity;
              break;
            case 1:
              intensity =
                Math.sin(time * blinkSpeed + blinkPhase) > 0 ? maxIntensity : 0;
              break;
            case 2: {
              const cycleTime =
                (time * blinkSpeed + blinkPhase) % (Math.PI * 2);
              intensity =
                cycleTime < 0.2 || (cycleTime > 0.5 && cycleTime < 0.7)
                  ? maxIntensity
                  : 0;
              break;
            }
          }
          light.intensity = intensity;

          // Also animate visible bulb opacity/scale so user sees the blinking dot
          if (bulb && (bulb as THREE.Mesh).material) {
            const norm: number = maxIntensity ? intensity / maxIntensity : 0;
            const m = (bulb as THREE.Mesh).material as THREE.MeshBasicMaterial;
            m.opacity = 0.25 + 0.75 * norm;
            const s: number = 0.7 + 0.6 * norm;
            (bulb as THREE.Mesh).scale.set(s, s, s);
          }
        });
      });
    }

    // Resize helper to fit container
    const fitToContainer = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(1, clientHeight);
      camera.updateProjectionMatrix();
    };

    fitToContainer();

    const onResize = () => fitToContainer();
    window.addEventListener("resize", onResize);

    // Initialize asteroids
    asteroidsRef.current = setupAsteroids();

    // Animate
    const animate = () => {
      // gentle movement
      const pos = particlesGeometry.attributes
        .position as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;
      const t = performance.now() * 0.0003;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        arr[i3 + 1] += Math.sin(t + i * 0.1) * 0.005;
        arr[i3 + 0] -= 0.002;
        if (arr[i3 + 0] < -15) arr[i3 + 0] = 15;
      }
      pos.needsUpdate = true;

      group.rotation.z += 0.0005;

      // Ensure first frame starts centered
      // if (firstFrameRef.current) {
      //   asteroidsRef.current.forEach((a) => {
      //     const o = (a.userData as any).orbit || {};
      //     a.position.set(0, 0, o.zOffset || 0);
      //   });
      //   firstFrameRef.current = false;
      // }

      // animate asteroids
      animateAsteroids(asteroidsRef.current);

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", onResize);
      // Cleanup three resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      spriteTex.dispose();
      fogGeometry.dispose();
      fogMaterial.dispose();

      // Cleanup asteroids
      asteroidsRef.current.forEach((asteroid) => {
        asteroid.children
          .filter((c): c is THREE.Light => c instanceof THREE.Light)
          .forEach((light) => {
            // dispose bulb geometry/material if present
            const ud = (light.userData as any) || {};
            const bulb = ud.bulb as THREE.Mesh | undefined;
            if (bulb) {
              if ((bulb.material as any)?.dispose)
                (bulb.material as any).dispose();
              bulb.geometry.dispose();
            }
            asteroid.remove(light);
          });
        const mat = asteroid.material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => {
            const asAny = m as any;
            if (asAny.map && typeof asAny.map.dispose === "function")
              asAny.map.dispose();
            m.dispose();
          });
        } else if (mat) {
          const asAny = mat as any;
          if (asAny.map && typeof asAny.map.dispose === "function")
            asAny.map.dispose();
          mat.dispose();
        }
        asteroid.geometry.dispose();
        asteroidsGroup.remove(asteroid);
      });
      asteroidsRef.current = [];

      // Remove POV light
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
