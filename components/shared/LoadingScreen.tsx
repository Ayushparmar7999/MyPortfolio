"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="relative flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight mb-8"
          style={{ color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}
        >
          AYUSH PARMAR
        </motion.h1>

        <div
          className="w-56 h-[2px] rounded-full overflow-hidden"
          style={{ background: "var(--border)" }}
        >
          <motion.div
            className="h-full rounded-full animated-gradient"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear", duration: 0.15 }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xs font-mono tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          {Math.min(progress, 100)}%
        </motion.span>
      </div>
    </motion.div>
  );
}
