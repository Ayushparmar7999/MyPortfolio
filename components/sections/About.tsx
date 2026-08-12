"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { STATS, CV_PATH, EDUCATION } from "@/lib/constants";
import { Download, ExternalLink } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background subtle glows */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.06), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.05), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label mb-6">
            <span className="dot" />
            Biography
          </div>

          <h2
            className="mb-6"
            style={{
              fontSize: "var(--text-h1)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "var(--text-primary)",
            }}
          >
            I turn ideas into{" "}
            <span className="gradient-text">scalable products</span>.
          </h2>

          <p
            className="mb-10 max-w-lg"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}
          >
            I specialize in developing scalable, secure, and visually engaging
            web and mobile applications. With a strong foundation in both
            frontend aesthetics and backend architecture, I bring ideas to life
            through clean code, premium design, and cutting-edge technologies.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col"
              >
                <span
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: "var(--text-primary)" }}>
              Education & Certifications
            </h3>
            <div className="flex flex-col gap-5">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--accent-violet)" }} />
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{edu.title}</h4>
                    <div className="text-xs font-medium mb-1.5" style={{ color: "var(--accent-cyan)" }}>
                      {edu.institution} <span className="opacity-60 mx-1">•</span> {edu.year}
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="btn-primary interactive text-sm">
              <ExternalLink size={16} />
              View Resume
            </a>
            <a href={CV_PATH} download className="btn-secondary interactive text-sm">
              <Download size={16} />
              Download
            </a>
          </div>
        </motion.div>

        {/* Right: Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={
            inView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.92 }
          }
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 z-10 mix-blend-overlay opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, var(--bg-primary), var(--bg-card))",
              }}
            />

            {/* Decorative glow */}
            <div
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-48 h-48 rounded-full opacity-25"
                style={{
                  background: "linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))",
                  filter: "blur(60px)",
                }}
              />
            </div>

            {/* Code card content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 sm:p-8 text-center">
              <h3
                className="text-5xl font-bold mb-6 opacity-[0.06]"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.04em",
                }}
              >
                Ayush.
              </h3>

              <div
                className="font-mono text-xs sm:text-sm text-left rounded-xl p-4 sm:p-5"
                style={{
                  backgroundColor: "rgba(0,0,0,0.4)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>{"{"}</span>
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--accent-violet)" }}>&quot;role&quot;</span>
                : <span style={{ color: "#22C55E" }}>&quot;Full Stack Engineer&quot;</span>,
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--accent-violet)" }}>&quot;location&quot;</span>
                : <span style={{ color: "#22C55E" }}>&quot;Indore, India&quot;</span>,
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--accent-violet)" }}>&quot;stack&quot;</span>
                : [
                <span style={{ color: "#22C55E" }}>&quot;React Native&quot;</span>,{" "}
                <span style={{ color: "#22C55E" }}>&quot;Next.js&quot;</span>,{" "}
                <span style={{ color: "#22C55E" }}>&quot;AI&quot;</span>],
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "var(--accent-violet)" }}>&quot;passion&quot;</span>
                : <span style={{ color: "#22C55E" }}>&quot;Building products&quot;</span>
                <br />
                <span style={{ color: "var(--text-muted)" }}>{"}"}</span>
              </div>
            </div>
          </div>

          {/* Floating accent element */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -right-4 w-16 h-16 rounded-xl flex items-center justify-center z-30"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <span className="gradient-text font-bold text-lg">&lt;/&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
