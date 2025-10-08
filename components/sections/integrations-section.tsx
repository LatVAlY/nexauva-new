"use client";

import { useRef } from "react";
import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useAnimationFrame,
  motion,
  wrap,
} from "framer-motion";

const ParallaxText = ({
  children,
  baseVelocity = 100,
}: {
  children: string;
  baseVelocity: number;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(10, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  // Mouse control: move faster left/right based on cursor position
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseFactor = useMotionValue(0); // -1 (left) .. 0 .. 1 (right)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const vf = velocityFactor.get();
    const mf = mouseFactor.get(); // -1..1
    const effective = vf + mf * 2; // mouse has stronger influence

    if (effective < 0) {
      directionFactor.current = -1;
    } else if (effective > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * Math.abs(moveBy) * Math.abs(effective);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-8"
    >
      <motion.div
        className="flex whitespace-nowrap text-2xl md:text-8xl font-bold text-primary/20 font-heading"
        style={{ x }}
      >
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
        <span className="block mr-8">{children}</span>
      </motion.div>
    </div>
  );
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 relative">
      <div className="absolute inset-0 border border-border/50 pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full badge-bg mb-4 mx-auto max-w-fit">
            <svg
              className="w-4 h-4 mr-2 icon-fill"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            </svg>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              INTEGRATIONS
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-center mb-4">
            <span className="text-foreground">Seamless </span>
            <span className="font-serif italic text-muted-foreground">
              Integrations
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Azure, OpenAI, LangGraph, vector databases, Kubernetes, Terraform, CI/CD, and more
          </p>
        </div>

        {/* Integrations Carousels */}
        <div className="space-y-8">
          <motion.div
            className="container mx-auto px-4 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            // variants={staggerContainer}
          >
            {/* Parallax Scrolling Text */}
            {/* Technical stack showcase */}
            <ParallaxText baseVelocity={-8}>
              AZURE • OPENAI • LANGGRAPH • VECTOR DATABASES •
            </ParallaxText>
            <ParallaxText baseVelocity={8}>
              KUBERNETES • TERRAFORM • CI/CD • DEPLOYEMENTS • PROGRAMMING • AUTOMATIONS •
            </ParallaxText>
            <ParallaxText baseVelocity={-6}>
              AZURE • OPENAI • LANGGRAPH • VECTOR DATABASES • KUBERNETES • TERRAFORM • CI/CD • AND MORE •
            </ParallaxText>
          </motion.div>

          {/* Light decorative div */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
        </div>

        {/* Quote */}
        <div className="text-center mt-16 opacity-70">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Our AI automation plugs into your stack to create a unified,
            intelligent workflow"
          </p>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
        }

        .gradient-title {
          background-image: linear-gradient(
            161deg,
            rgb(var(--foreground)) 51.66%,
            rgb(var(--background)) 166%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 44px;
        }

        .badge-bg {
          background-color: rgb(var(--background));
          border: 1px solid rgba(216, 231, 242, 0.07);
        }

        .icon-bg {
          background-color: hsl(var(--muted));
          box-shadow: inset 0 1px 1px rgba(207, 231, 255, 0.2);
        }

        .icon-fill {
          color: rgb(var(--foreground));
        }

        .font-serif-italic {
          font-family: "Instrument Serif", serif;
          font-style: italic;
        }

        .font-sans-medium {
          font-family: "Inter", sans-serif;
          font-weight: 500;
          font-style: normal;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--distance)));
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(calc(-1 * var(--distance)));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
