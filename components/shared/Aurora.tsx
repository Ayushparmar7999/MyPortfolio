"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Aurora() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 150, mass: 1.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Violet blob — follows mouse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "-15%",
          left: "-10%",
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          x: smoothX,
          y: smoothY,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Blue blob — ambient drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          bottom: "-10%",
          right: "-10%",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1.05, 0.92, 1.05],
          x: [0, 35, 0],
          y: [0, -25, 0],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Cyan blob — ambient drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "25%",
          right: "5%",
          width: "40%",
          height: "40%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [0.95, 1.1, 0.95],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
    </div>
  );
}
