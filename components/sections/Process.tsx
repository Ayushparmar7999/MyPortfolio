"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section
      className="relative overflow-hidden"
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
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label mb-6 mx-auto w-fit">
            <span className="dot" />
            How I Work
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
            Development Process
          </h2>
          <p
            style={{
              fontSize: "var(--text-small)",
              color: "var(--text-muted)",
            }}
          >
            A structured approach to turning ideas into production-grade
            applications.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line — desktop horizontal, mobile vertical */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <div
            className="md:hidden absolute top-0 bottom-0 left-6 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-3">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0"
              >
                {/* Step number circle */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-hover)",
                      color: "var(--accent-blue)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className="md:mt-5 md:text-center">
                  <h3
                    className="text-base font-bold mb-1.5"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed max-w-xs md:max-w-[180px] md:mx-auto"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
