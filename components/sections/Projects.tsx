"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import CaseStudy from "../shared/CaseStudy";
import type { Project } from "@/lib/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative z-10"
        style={{
          paddingTop: "var(--section-padding)",
          paddingBottom: "var(--section-padding)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "var(--container-max)",
            padding: "0 var(--container-padding)",
          }}
        >
          {/* Section Header */}
          <div className="mb-20 flex flex-col items-start">
            <div className="section-label mb-6">
              <span className="dot" />
              Work Gallery
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
              Selected Projects
            </h2>
            <div
              className="w-20 h-[2px] rounded-full"
              style={{ background: "var(--gradient-accent-horizontal)" }}
            />
          </div>

          {/* Project Cards */}
          <div className="space-y-28">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onCaseStudy={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudy
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

/* ── Project Card ──────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onCaseStudy,
}: {
  project: Project;
  index: number;
  onCaseStudy: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: scaleProgress, opacity: opacityProgress, y: yProgress }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 lg:gap-14 items-center`}
    >
      {/* Image Container */}
      <div
        className="w-full lg:w-3/5 group relative rounded-xl overflow-hidden interactive"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"
          style={{ backgroundColor: "var(--accent-blue-muted)" }}
        />
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <span
          className="text-xs font-mono mb-3 tracking-wider uppercase"
          style={{ color: "var(--accent-violet)" }}
        >
          {project.subtitle}
        </span>

        <h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        <div
          className={`p-5 rounded-xl mb-6 relative z-20 ${
            isEven ? "lg:-ml-8 ml-0" : "lg:-mr-8 mr-0"
          }`}
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <p
            className="leading-relaxed"
            style={{
              color: "var(--text-secondary)",
              fontSize: "var(--text-small)",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t: string) => (
            <li
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md"
              style={{
                color: "var(--accent-blue)",
                backgroundColor: "var(--accent-blue-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-5">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <FaGithub size={16} /> Code
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--accent-violet)" }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          <button
            onClick={onCaseStudy}
            className="interactive flex items-center gap-1.5 text-sm font-semibold transition-colors group/cs"
            style={{
              color: "var(--accent-cyan)",
              background: "none",
              border: "none",
            }}
          >
            Case Study
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover/cs:translate-x-0.5 group-hover/cs:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
