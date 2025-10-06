"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rendererRef.current = renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // transparent
    container.appendChild(renderer.domElement)

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)
    scene.add(new THREE.AmbientLight(0x404040, 0.4))

    // Foggy shader-ish plane (simple material for perf)
    const fogGeometry = new THREE.PlaneGeometry(30, 30)
    const fogMaterial = new THREE.MeshBasicMaterial({ color: 0x0b1220, transparent: true, opacity: 0.25 })
    const fogPlane = new THREE.Mesh(fogGeometry, fogMaterial)
    fogPlane.position.z = -5

    // Particles
    const particlesCount = 300
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    // Simple round sprite
    const spriteSize = 64
    const spriteCanvas = document.createElement("canvas")
    spriteCanvas.width = spriteSize
    spriteCanvas.height = spriteSize
    const ctx = spriteCanvas.getContext("2d")!
    ctx.clearRect(0, 0, spriteSize, spriteSize)
    ctx.beginPath()
    ctx.arc(spriteSize / 2, spriteSize / 2, spriteSize / 2 - 2, 0, Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.shadowColor = "white"
    ctx.shadowBlur = 10
    ctx.fill()
    const spriteTex = new THREE.Texture(spriteCanvas)
    spriteTex.needsUpdate = true

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      map: spriteTex,
      alphaTest: 0.01,
      depthWrite: false,
    })

    const points = new THREE.Points(particlesGeometry, particlesMaterial)

    const group = new THREE.Group()
    group.add(fogPlane)
    group.add(points)
    scene.add(group)

    // Resize helper to fit container
    const fitToContainer = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / Math.max(1, clientHeight)
      camera.updateProjectionMatrix()
    }

    fitToContainer()

    const onResize = () => fitToContainer()
    window.addEventListener("resize", onResize)

    // Animate
    const animate = () => {
      // gentle movement
      const pos = particlesGeometry.attributes.position as THREE.BufferAttribute
      const arr = pos.array as Float32Array
      const t = performance.now() * 0.0003
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        arr[i3 + 1] += Math.sin(t + i * 0.1) * 0.005
        arr[i3 + 0] -= 0.002
        if (arr[i3 + 0] < -15) arr[i3 + 0] = 15
      }
      pos.needsUpdate = true

      group.rotation.z += 0.0005
      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      window.removeEventListener("resize", onResize)
      // Cleanup three resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      spriteTex.dispose()
      fogGeometry.dispose()
      fogMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
