"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TECHNOLOGIES, TECH_CATEGORIES } from "@/lib/constants";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...TECH_CATEGORIES];
  const filtered =
    activeCategory === "All"
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.04), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-6 mx-auto w-fit">
            <span className="dot" />
            Tech Stack
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h1)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Technologies I Work With
          </h2>
          <p
            className="max-w-md mx-auto"
            style={{
              fontSize: "var(--text-small)",
              color: "var(--text-muted)",
            }}
          >
            An interactive look at the tools and frameworks powering my
            frontend, backend, mobile, and AI projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="interactive px-4 py-2 rounded-lg text-xs font-semibold transition-all"
              style={{
                backgroundColor:
                  activeCategory === cat
                    ? "var(--accent-blue-muted)"
                    : "transparent",
                color:
                  activeCategory === cat
                    ? "var(--accent-blue)"
                    : "var(--text-muted)",
                border:
                  activeCategory === cat
                    ? "1px solid var(--accent-blue)"
                    : "1px solid var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {filtered.map((tech, i) => {
            const isHovered = hoveredTech === tech.name;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="interactive relative group flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: isHovered
                    ? `1px solid ${tech.color}40`
                    : "1px solid var(--border)",
                  boxShadow: isHovered
                    ? `0 0 20px ${tech.color}15`
                    : "none",
                }}
              >
                {/* Hover glow */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${tech.color}10, transparent 70%)`,
                    }}
                  />
                )}

                <tech.icon
                  className="w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: tech.color }}
                />
                <span
                  className="text-sm font-medium text-center relative z-10"
                  style={{ color: "var(--text-primary)" }}
                >
                  {tech.name}
                </span>
                <span
                  className="text-[10px] font-medium mt-1 relative z-10"
                  style={{ color: "var(--text-muted)" }}
                >
                  {tech.category}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
