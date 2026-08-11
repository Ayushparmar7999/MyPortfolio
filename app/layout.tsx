import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ThemeProvider from "@/components/shared/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Parmar | Full Stack Software Engineer",
  description:
    "Ayush Parmar is a Full Stack Software Engineer specializing in React, React Native, Node.js, Django, AI and scalable digital products.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "AI Developer",
    "Software Engineer",
    "Ayush Parmar",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Ayush Parmar" }],
  creator: "Ayush Parmar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ayush Parmar | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building high-performance Web, Mobile, Backend & AI-powered applications.",
    siteName: "Ayush Parmar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Parmar | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer building high-performance Web, Mobile, Backend & AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#050505" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme');
                  if (t === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#FAFAFA');
                  }
                } catch(e) {}
                
                // Suppress THREE.Clock deprecation warning from showing up in console
                var originalWarn = console.warn;
                console.warn = function() {
                  if (arguments[0] && typeof arguments[0] === 'string' && arguments[0].indexOf('THREE.Clock') !== -1) {
                    return;
                  }
                  originalWarn.apply(console, arguments);
                };
              })();
            `,
          }}
        />
        {/* Structured Data — Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayush Parmar",
              jobTitle: "Full Stack Software Engineer",
              url: "https://ayushparmar.dev",
              sameAs: [
                "https://github.com/Ayushparmar7999",
                "https://linkedin.com/in/ayush-parmar",
              ],
              knowsAbout: [
                "React",
                "React Native",
                "Node.js",
                "TypeScript",
                "Python",
                "Django",
                "AI",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
