"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Phone, Download, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS, CV_PATH } from "@/lib/constants";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    // Simulate send — replace with actual email integration
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mb-6">
            <span className="dot" />
            Get In Touch
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
            Have an idea?{" "}
            <span className="gradient-text">Let&apos;s build it.</span>
          </h2>

          <p
            className="mb-10 max-w-md"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
            }}
          >
            I&apos;m open to interesting products, engineering opportunities,
            freelance projects and collaborations. Let&apos;s create something
            exceptional together.
          </p>

          {/* Contact Info */}
          <div className="space-y-5 mb-10">
            <ContactInfoRow
              icon={Mail}
              label="Email"
              value={SOCIAL_LINKS.email}
              href={`mailto:${SOCIAL_LINKS.email}`}
              color="var(--accent-blue)"
            />
            <ContactInfoRow
              icon={Phone}
              label="Phone"
              value={`+91 ${SOCIAL_LINKS.phone.slice(3)}`}
              href={`tel:${SOCIAL_LINKS.phone}`}
              color="var(--accent-cyan)"
            />
            <ContactInfoRow
              icon={MapPin}
              label="Location"
              value="Indore, Madhya Pradesh, India"
              color="var(--accent-violet)"
            />
          </div>

          {/* Social + CV */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <SocialButton
                href={SOCIAL_LINKS.github}
                icon={FaGithub}
                label="GitHub"
              />
              <SocialButton
                href={SOCIAL_LINKS.linkedin}
                icon={FaLinkedin}
                label="LinkedIn"
              />
            </div>

            <a href={CV_PATH} download className="btn-secondary interactive text-xs sm:text-sm px-4 py-2.5 flex-1 sm:flex-none justify-center">
              <Download size={14} />
              Download
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-7 rounded-xl flex flex-col gap-5"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Your Email
              </label>
              <input
                type="email"
                id="contact-email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="input-field resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === "sending"}
              className="btn-primary interactive w-full justify-center mt-1"
              style={{
                opacity: formState === "sending" ? 0.7 : 1,
              }}
            >
              {formState === "sending" ? (
                "Sending..."
              ) : formState === "success" ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : formState === "error" ? (
                <>
                  <AlertCircle size={16} />
                  Failed — Try Again
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {formState === "success" && (
              <p
                className="text-xs text-center"
                style={{ color: "#22C55E" }}
              >
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Contact Info Row ──────────────────────────── */
function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  color: string;
}) {
  const content = (
    <div className="flex items-center gap-4 group transition-colors">
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
        style={{
          backgroundColor: `${color}12`,
          color: color,
          border: "1px solid var(--border)",
        }}
      >
        <Icon size={18} />
      </div>
      <div>
        <p
          className="text-xs font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          {label}
        </p>
        <p
          className="text-sm font-medium"
          style={{ color: "var(--text-primary)" }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="interactive block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

/* ── Social Button ────────────────────────────── */
function SocialButton({
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
      className="interactive w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
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
    </a>
  );
}
