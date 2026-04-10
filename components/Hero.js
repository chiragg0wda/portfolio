import { motion } from "framer-motion";
import { siteConfig } from "../data/config";

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const SOCIAL_ICONS = {
  github:   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  twitter:  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  devto:    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3 3.787 3 4.755v14.49C3 20.214 3.791 21 4.764 21h14.473C20.209 21 21 20.214 21 19.245V4.755C21 3.787 20.209 3 19.236 3zm-9.195 9.648c0 1.073-.923 1.944-2.057 1.944H6.667V9.408h1.317c1.134 0 2.057.871 2.057 1.944v1.296zm4.029 1.928H12.38V9.408h1.69v1.29h-1.69v1.022h1.69v1.29h-1.69v1.022h1.69v1.544zm3.028 0h-2.061l-1.35-5.168h1.3l.906 3.418.906-3.418h1.3l-1.35 5.168z"/></svg>,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="orb absolute top-1/4 -left-32 w-96 h-96 bg-primary opacity-20 animate-pulse-slow" />
      <div className="orb absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary opacity-15 animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-5" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-mono text-secondary">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-4 tracking-tight"
        >
          <span className="block text-text-primary">{siteConfig.name.split(" ")[0]}</span>
          <span className="block gradient-text">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="font-display text-lg md:text-2xl text-text-secondary font-medium mb-6 tracking-wide"
        >
          {siteConfig.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects" className="btn-primary text-white font-semibold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
            View My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#contact" className="btn-outline text-text-primary font-semibold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex gap-4 justify-center">
          {siteConfig.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-glow hover:border-primary/50 transition-all duration-300 border border-white/10 hover:neon-glow"
            >
              {SOCIAL_ICONS[s.icon]}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-secondary text-xs font-mono tracking-widest">SCROLL</span>
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
}
