"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, 
  SiPrisma, SiFirebase, SiRedux,
  SiReact, SiNodedotjs, SiPython
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
];


export default function Technologies() {
  return (
    <section className="py-20 border-t border-white/5 bg-[#030712] overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h3 className="text-center text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Trusted Technologies
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-nowrap items-center gap-16 whitespace-nowrap px-8"
        >
          {/* Double the array for seamless looping */}
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <tech.icon className="w-8 h-8" style={{ color: tech.color }} />
              <span className="text-xl font-medium text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
