"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, User, FolderOpen, Briefcase, Layers,
  Mail, Download, Sun, X, ExternalLink
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { COMMAND_PALETTE_ITEMS, CV_PATH } from "@/lib/constants";
import { useTheme } from "./ThemeProvider";

const iconMap: Record<string, any> = {
  User,
  FolderOpen,
  Briefcase,
  Layers,
  Mail,
  Download,
  ExternalLink,
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Sun,
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();

  const filtered = COMMAND_PALETTE_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  /* ── Keyboard shortcut to open ────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* ── Focus input when opened ──────────────── */
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  /* ── Lock scroll when open ─────────────────── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ── Execute command ───────────────────────── */
  const executeCommand = useCallback(
    (item: (typeof COMMAND_PALETTE_ITEMS)[number]) => {
      setIsOpen(false);

      switch (item.action) {
        case "navigate": {
          const el = document.querySelector(item.target);
          el?.scrollIntoView({ behavior: "smooth" });
          break;
        }
        case "download": {
          const link = document.createElement("a");
          link.href = CV_PATH;
          link.download = "";
          link.click();
          break;
        }
        case "link":
          window.open(item.target, "_blank", "noopener,noreferrer");
          break;
        case "theme":
          toggleTheme();
          break;
      }
    },
    [toggleTheme]
  );

  /* ── Keyboard navigation within palette ──── */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      executeCommand(filtered[selectedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh]"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg mx-4 rounded-xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-hover)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Search Input */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <Search size={16} style={{ color: "var(--text-muted)" }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
                style={{ color: "var(--text-primary)" }}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="interactive p-1"
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Results */}
            <div
              className="py-2 max-h-[320px] overflow-y-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {filtered.length === 0 ? (
                <p
                  className="px-5 py-6 text-sm text-center"
                  style={{ color: "var(--text-muted)" }}
                >
                  No results found.
                </p>
              ) : (
                filtered.map((item, i) => {
                  const Icon = iconMap[item.icon] || Search;
                  const isSelected = i === selectedIndex;
                  return (
                    <button
                      key={item.label}
                      onClick={() => executeCommand(item)}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className="interactive w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors text-left"
                      style={{
                        backgroundColor: isSelected
                          ? "var(--accent-blue-muted)"
                          : "transparent",
                        color: isSelected
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                        border: "none",
                      }}
                    >
                      <Icon size={15} style={{ opacity: 0.7 }} />
                      {item.label}
                    </button>
                  );
                })
              )}
            </div>

            {/* Hint */}
            <div
              className="flex items-center justify-between px-5 py-3 text-[11px]"
              style={{
                borderTop: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
