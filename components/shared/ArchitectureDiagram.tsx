"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { ArchitectureLayer } from "@/lib/constants";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
}

export default function ArchitectureDiagram({
  layers,
}: ArchitectureDiagramProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-0 py-4">
      {layers.map((layer, i) => (
        <div key={layer.label} className="flex flex-col items-center w-full">
          {/* Layer Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-full max-w-md px-6 py-4 rounded-xl transition-all duration-300 interactive"
            style={{
              backgroundColor: "var(--bg-card)",
              border:
                hoveredIndex === i
                  ? `1px solid ${layer.color}60`
                  : "1px solid var(--border)",
              boxShadow:
                hoveredIndex === i
                  ? `0 0 25px ${layer.color}20`
                  : "none",
            }}
          >
            {/* Accent bar */}
            <div
              className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
              style={{
                backgroundColor: layer.color,
                opacity: hoveredIndex === i ? 1 : 0.4,
                transition: "opacity 0.3s",
              }}
            />

            <div className="flex items-center justify-between">
              <div>
                <h4
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {layer.label}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {layer.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded"
                      style={{
                        color: layer.color,
                        backgroundColor: `${layer.color}15`,
                        border: `1px solid ${layer.color}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative circle */}
              <div
                className="w-3 h-3 rounded-full shrink-0 transition-all duration-300"
                style={{
                  backgroundColor: layer.color,
                  opacity: hoveredIndex === i ? 1 : 0.3,
                  boxShadow:
                    hoveredIndex === i
                      ? `0 0 12px ${layer.color}`
                      : "none",
                }}
              />
            </div>
          </motion.div>

          {/* Connector Arrow */}
          {i < layers.length - 1 && (
            <div className="flex flex-col items-center py-1.5">
              <div
                className="w-px h-5"
                style={{ backgroundColor: "var(--border-hover)" }}
              />
              <ArrowDown
                size={12}
                style={{ color: "var(--text-muted)" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
