"use client";

import { useState } from "react";
import LoadingScreen from "@/components/shared/LoadingScreen";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Aurora from "@/components/shared/Aurora";
import Navbar from "@/components/shared/Navbar";
import CommandPalette from "@/components/shared/CommandPalette";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <main
          className="relative min-h-screen grid-background overflow-hidden"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <div className="noise-overlay" />
          <ScrollProgress />
          <Aurora />
          <CustomCursor />
          <Navbar />
          <CommandPalette />

          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Services />
          <Process />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
