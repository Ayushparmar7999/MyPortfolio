"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { GITHUB_USERNAME } from "@/lib/constants";

export default function GithubActivity() {
  /* Stable seeded random to avoid hydration mismatch */
  const contributions = useMemo(() => {
    const data: number[][] = [];
    let seed = 42;
    const seededRandom = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    for (let i = 0; i < 52; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        const r = seededRandom();
        let level = 0;
        if (r > 0.5) level = 1;
        if (r > 0.7) level = 2;
        if (r > 0.85) level = 3;
        if (r > 0.95) level = 4;
        week.push(level);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 0:
        return "var(--bg-card)";
      case 1:
        return "#064E3B";
      case 2:
        return "#059669";
      case 3:
        return "#10B981";
      case 4:
        return "#34D399";
      default:
        return "var(--bg-card)";
    }
  };

  return (
    <section
      className="relative"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1100px",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="section-label mb-6">
              <FaGithub size={14} />
              GitHub Activity
            </div>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Code Contributions
            </h2>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary interactive text-sm"
          >
            <ExternalLink size={14} />
            View Profile
          </a>
        </div>

        {/* Contribution Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl overflow-x-auto interactive"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="min-w-[750px]">
            <div className="flex gap-[3px]">
              {contributions.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px]">
                  {week.map((dayLevel, dIndex) => (
                    <motion.div
                      key={dIndex}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.15,
                        delay: wIndex * 0.008 + dIndex * 0.005,
                      }}
                      className="w-[11px] h-[11px] rounded-sm transition-all"
                      style={{
                        backgroundColor: getColor(dayLevel),
                        border:
                          dayLevel === 0
                            ? "1px solid var(--border)"
                            : "none",
                      }}
                      title={`Contribution level: ${dayLevel}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div
              className="flex justify-between items-center mt-4 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="w-[11px] h-[11px] rounded-sm"
                    style={{
                      backgroundColor: getColor(level),
                      border:
                        level === 0
                          ? "1px solid var(--border)"
                          : "none",
                    }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
