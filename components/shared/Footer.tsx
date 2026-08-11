"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        paddingTop: "3rem",
        paddingBottom: "2rem",
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--container-max)",
          padding: "0 var(--container-padding)",
        }}
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Identity */}
          <div>
            <h4
              className="text-lg font-bold mb-1"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Ayush Parmar
            </h4>
            <p
              className="text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Full Stack Software Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="interactive text-sm font-medium transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <FooterSocialLink href={SOCIAL_LINKS.github} icon={FaGithub} label="GitHub" />
            <FooterSocialLink href={SOCIAL_LINKS.linkedin} icon={FaLinkedin} label="LinkedIn" />
            <FooterSocialLink href={`mailto:${SOCIAL_LINKS.email}`} icon={Mail} label="Email" />
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-6"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            © {new Date().getFullYear()} Ayush Parmar. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--text-faint)" }}
          >
            Designed & built with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterSocialLink({
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
      className="interactive w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
      style={{
        color: "var(--text-muted)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.borderColor = "var(--border-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <Icon size={14} />
    </a>
  );
}
