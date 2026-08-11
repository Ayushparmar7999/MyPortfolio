"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { X, ExternalLink } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import type { Project } from "@/lib/constants";

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudy({ project, onClose }: CaseStudyProps) {
  /* Lock body scroll + handle Escape key */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const sections = [
    { num: "01", title: "Overview", content: project.description },
    { num: "02", title: "Problem", content: project.problem },
    { num: "03", title: "Solution", content: project.solution },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto"
        style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl my-8 mx-4 rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="interactive absolute top-6 right-6 z-30 p-2.5 rounded-lg transition-colors"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
            aria-label="Close case study"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div
            className="relative px-8 md:px-12 pt-12 pb-10"
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            {/* Gradient glow */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: "var(--gradient-accent-horizontal)" }}
            />

            <span
              className="text-xs font-mono uppercase tracking-wider mb-3 block"
              style={{ color: "var(--accent-violet)" }}
            >
              {project.subtitle}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-heading)",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h2>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono"
                  style={{
                    backgroundColor: "var(--accent-blue-muted)",
                    color: "var(--accent-blue)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="px-8 md:px-12 py-10 space-y-10">
            {sections.map((section) => (
              <div key={section.num}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    {section.num}
                  </span>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {section.title}
                  </h3>
                </div>
                <p
                  className="leading-relaxed max-w-2xl"
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {section.content}
                </p>
              </div>
            ))}

            {/* Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "var(--accent-cyan)" }}
                  >
                    04
                  </span>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Architecture
                  </h3>
                </div>
                <ArchitectureDiagram layers={project.architecture} />
              </div>
            )}

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  05
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Key Features
                </h3>
              </div>
              <ul className="space-y-2 max-w-2xl">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--accent-blue)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary interactive text-sm"
                >
                  <FaGithub size={16} />
                  View Code
                </a>
              )}
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary interactive text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
