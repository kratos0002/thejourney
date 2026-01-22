"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

const PARTICLE_COLORS = [
  "rgba(240, 237, 230, ",  // moonlight
  "rgba(212, 165, 116, ",  // amber-glow
  "rgba(74, 124, 124, ",   // teal-depth
  "rgba(201, 184, 150, ",  // soft-gold
];

const PARTICLE_COUNT = 35;

export default function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const scrollVelocityRef = useRef(0);
  const lastScrollRef = useRef(0);
  const timeRef = useRef(0);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height * 3, // spread across scroll height
        size: 1 + Math.random() * 2.5,
        opacity: 0.08 + Math.random() * 0.25,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2 - 0.1, // slight upward bias
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        pulseSpeed: 0.5 + Math.random() * 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Track scroll velocity
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocityRef.current = Math.abs(currentScroll - lastScrollRef.current);
      lastScrollRef.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      if (!ctx || !canvas) return;
      timeRef.current += 0.016; // ~60fps

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const scrollInfluence = Math.min(scrollVelocityRef.current * 0.02, 2);

      // Decay scroll velocity
      scrollVelocityRef.current *= 0.95;

      particlesRef.current.forEach(particle => {
        // Update position with scroll-responsive drift
        particle.x += particle.vx + scrollInfluence * particle.vx * 3;
        particle.y += particle.vy - scrollInfluence * 0.5;

        // Wrap around screen (accounting for scroll position)
        const viewY = particle.y - scrollY * 0.3; // parallax

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (viewY < -50) particle.y += canvas.height + 100;
        if (viewY > canvas.height + 50) particle.y -= canvas.height + 100;

        // Pulsing opacity
        const pulse = Math.sin(timeRef.current * particle.pulseSpeed + particle.pulsePhase);
        const currentOpacity = particle.opacity * (0.6 + 0.4 * pulse);

        // Draw particle with glow
        const screenY = particle.y - scrollY * 0.3;

        // Only draw if visible
        if (screenY > -20 && screenY < canvas.height + 20) {
          // Outer glow
          ctx.beginPath();
          ctx.arc(particle.x, screenY, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${(currentOpacity * 0.2).toFixed(3)})`;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(particle.x, screenY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${currentOpacity.toFixed(3)})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}
