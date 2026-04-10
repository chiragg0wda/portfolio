import { useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/config";
import { SectionTitle, StaggerContainer, staggerItem } from "./ui/Animations";

/* ── 3D TILT CARD ──────────────────────────────────────── */
function TiltCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card   = cardRef.current;
    if (!card)   return;
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const cx     = rect.width  / 2;
    const cy     = rect.height / 2;
    const rotX   = ((y - cy) / cy) * -12;
    const rotY   = ((x - cx) / cx) *  12;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card)  return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <motion.div
      variants={staggerItem}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card glass rounded-2xl border border-white/5 overflow-hidden group cursor-pointer"
      style={{ transition: "transform 0.12s ease, box-shadow 0.3s ease" }}
    >
      {/* Card top accent */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-7 tilt-card-inner">
        {/* Emoji + Featured badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: `${project.color}22`, border: `1px solid ${project.color}44` }}
          >
            {project.emoji}
          </div>
          {project.featured && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
              ★ Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-glow transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-xl text-sm font-medium transition-all duration-200 text-white"
            style={{ background: `${project.color}33`, border: `1px solid ${project.color}55` }}
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo ↗
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary border border-white/10 hover:border-white/20 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="orb absolute right-10 top-20 w-80 h-80 bg-secondary opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// portfolio"
          title="Projects"
          subtitle="A selection of things I've built — from developer tools to interactive experiences."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {siteConfig.projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </StaggerContainer>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href={siteConfig.socials.find((s) => s.icon === "github")?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm font-medium text-text-secondary px-6 py-3 rounded-full"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
