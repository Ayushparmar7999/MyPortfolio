"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  staggerChildren?: number;
  mode?: "words" | "letters" | "lines";
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AnimatedText({
  text,
  as: Tag = "p",
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  mode = "words",
  once = true,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const items = mode === "letters" ? text.split("") : text.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      custom={{ stagger: staggerChildren, delay }}
      className={`inline ${className}`}
      style={{ display: "inline" }}
    >
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          variants={childVariants}
          className="inline-block"
          style={{
            marginRight: mode === "words" ? "0.3em" : undefined,
            whiteSpace: mode === "letters" ? "pre" : undefined,
          }}
        >
          {Tag === "h1" || Tag === "h2" || Tag === "h3" || Tag === "h4" ? (
            <span className="inline-block">{item}</span>
          ) : (
            item
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}
