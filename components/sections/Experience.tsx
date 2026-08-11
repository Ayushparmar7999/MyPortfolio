"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES, EDUCATION } from "@/lib/constants";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section
      id="experience"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="section-label mb-6">
              <span className="dot" />
              My Journey
            </div>
            <h2
              style={{
                fontSize: "var(--text-h1)",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Experience & Education
            </h2>
          </div>

          {/* Tab Selector */}
          <div
            className="flex p-1 rounded-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <button
              onClick={() => setActiveTab("work")}
              className="interactive px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background:
                  activeTab === "work"
                    ? "var(--gradient-accent)"
                    : "transparent",
                color:
                  activeTab === "work"
                    ? "#fff"
                    : "var(--text-muted)",
                boxShadow:
                  activeTab === "work"
                    ? "var(--shadow-glow-violet)"
                    : "none",
                border: "none",
              }}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className="interactive px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background:
                  activeTab === "education"
                    ? "var(--gradient-accent)"
                    : "transparent",
                color:
                  activeTab === "education"
                    ? "#fff"
                    : "var(--text-muted)",
                boxShadow:
                  activeTab === "education"
                    ? "var(--shadow-glow-violet)"
                    : "none",
                border: "none",
              }}
            >
              Education & Certs
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0 min-h-[400px]">
          {/* Vertical line — mobile: left, desktop: center */}
          <div
            className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ backgroundColor: "var(--border)" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "work"
                ? EXPERIENCES.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: `2px solid var(--accent-blue)`,
                          }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: "var(--accent-blue)",
                              boxShadow: "0 0 10px var(--accent-blue)",
                            }}
                          />
                        </div>

                        {/* Card */}
                        <div
                          className={`w-full md:w-[calc(50%-2rem)] ${
                            isEven ? "md:ml-0 md:mr-auto md:pl-8" : "md:mr-0 md:ml-auto md:pr-8"
                          }`}
                        >
                          <div
                            className="card p-7 group"
                            style={{ cursor: "default" }}
                          >
                            <span
                              className="text-xs font-mono mb-2 block"
                              style={{ color: "var(--accent-blue)" }}
                            >
                              {exp.year}
                            </span>
                            <h3
                              className="text-xl font-bold mb-1 transition-colors"
                              style={{
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-heading)",
                              }}
                            >
                              {exp.role}
                            </h3>
                            <h4
                              className="text-base mb-4"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {exp.company}
                            </h4>
                            <p
                              className="text-sm mb-5 leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t) => (
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
                        </div>

                        {/* Empty spacer for the other side */}
                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                      </motion.div>
                    );
                  })
                : EDUCATION.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: `2px solid var(--accent-violet)`,
                          }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: "var(--accent-violet)",
                              boxShadow: "0 0 10px var(--accent-violet)",
                            }}
                          />
                        </div>

                        {/* Card */}
                        <div
                          className={`w-full md:w-[calc(50%-2rem)] ${
                            isEven ? "md:ml-0 md:mr-auto md:pl-8" : "md:mr-0 md:ml-auto md:pr-8"
                          }`}
                        >
                          <div className="card p-7 group">
                            <div className="flex justify-between items-start mb-2">
                              <span
                                className="text-xs font-mono"
                                style={{ color: "var(--accent-violet)" }}
                              >
                                {item.year}
                              </span>
                              <span
                                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                                style={{
                                  backgroundColor:
                                    "var(--accent-violet-muted)",
                                  color: "var(--accent-violet)",
                                  border: "1px solid var(--border)",
                                }}
                              >
                                {item.type}
                              </span>
                            </div>
                            <h3
                              className="text-xl font-bold mb-1 transition-colors"
                              style={{
                                color: "var(--text-primary)",
                                fontFamily: "var(--font-heading)",
                              }}
                            >
                              {item.title}
                            </h3>
                            <h4
                              className="text-base mb-4"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {item.institution}
                            </h4>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                      </motion.div>
                    );
                  })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
