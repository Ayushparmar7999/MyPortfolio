"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Database, Cpu, Palette } from "lucide-react";
import { useRef, useState } from "react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, typeof Monitor> = {
  Monitor,
  Smartphone,
  Database,
  Cpu,
  Palette,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        backgroundColor: "var(--bg-secondary)",
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
            What I Do
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
            Services
          </h2>
          <p style={{ fontSize: "var(--text-small)", color: "var(--text-muted)" }}>
            Delivering high-quality software solutions tailored to your
            business needs, from stunning frontends to robust backends.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const Icon = iconMap[service.iconName] || Monitor;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-7 rounded-xl overflow-hidden interactive"
      style={{
        backgroundColor: "var(--bg-card)",
        border: isHovered
          ? `1px solid ${service.color}30`
          : "1px solid var(--border)",
        transition: "border-color 0.3s",
      }}
    >
      {/* Dynamic Glow on Hover */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${hoverPosition.x}px ${hoverPosition.y}px, ${service.color}12, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-start">
        <div
          className="p-3.5 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${service.color}12`,
            color: service.color,
          }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3
          className="text-lg font-bold mb-2"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
