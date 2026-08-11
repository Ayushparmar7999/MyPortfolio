"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Download, MessageSquare, Mail, ExternalLink } from "lucide-react";
import HeroScene from "../canvas/HeroScene";
import Magnetic from "../shared/Magnetic";
import { HERO_KEYWORDS, CV_PATH, SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % HERO_KEYWORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "6rem" }}
    >
      {/* 3D Canvas Background */}
      <HeroScene />

      {/* Foreground Content */}
      <div
        className="relative z-10 w-full flex flex-col items-start justify-center pointer-events-none"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
          margin: "0 auto",
          minHeight: "calc(100vh - 6rem)",
        }}
      >
        {/* Availability Indicator */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-auto interactive inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 transition-colors"
          style={{
            background: "var(--accent-blue-muted)",
            border: "1px solid var(--border)",
          }}
        >
          <span className="availability-dot" />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            Available for opportunities
          </span>
        </motion.a>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-2"
          style={{
            fontSize: "var(--text-display)",
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
        >
          I build{" "}
          <span className="relative inline-block" style={{ minWidth: "5ch" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={keywordIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="gradient-text inline-block"
              >
                {HERO_KEYWORDS[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          that perform.
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-xl mb-10"
          style={{
            fontSize: "var(--text-body)",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
        >
          Full Stack Software Engineer specializing in Web, Mobile, Backend &
          AI-powered applications. I write the code that makes it real,
          scalable, and incredibly quick.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-3 pointer-events-auto mb-12"
        >
          <Magnetic>
            <a href="#projects" className="btn-primary interactive">
              View My Work
              <ArrowRight size={16} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="btn-secondary interactive">
              <ExternalLink size={16} />
              View CV
            </a>
          </Magnetic>
          <Magnetic>
            <a href={CV_PATH} download className="btn-secondary interactive">
              <Download size={16} />
              Download
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn-ghost interactive">
              <MessageSquare size={16} />
              Let&apos;s Talk
            </a>
          </Magnetic>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          <SocialIcon
            href={SOCIAL_LINKS.github}
            icon={FaGithub}
            label="GitHub"
          />
          <SocialIcon
            href={SOCIAL_LINKS.linkedin}
            icon={FaLinkedin}
            label="LinkedIn"
          />
          <SocialIcon
            href={`mailto:${SOCIAL_LINKS.email}`}
            icon={Mail}
            label="Email"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--text-muted), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ── Social Icon Button ───────────────────────────── */
function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="interactive group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200"
      style={{
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--accent-blue-muted)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      <Icon size={16} />
      {/* Tooltip */}
      <span
        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        style={{
          backgroundColor: "var(--bg-card)",
          color: "var(--text-secondary)",
          border: "1px solid var(--border)",
        }}
      >
        {label}
      </span>
    </a>
  );
}
