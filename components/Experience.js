import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "../data/config";
import { SectionTitle, FadeIn } from "./ui/Animations";

function TimelineItem({ item, index, isEducation }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 group"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 rounded-full border-2 border-primary bg-background flex-shrink-0 mt-1.5 group-hover:border-secondary group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all duration-300"
        />
        <div className="timeline-line flex-1 mt-2 w-0.5" />
      </div>

      {/* Content card */}
      <div className="pb-12 flex-1">
        <div className="glass rounded-2xl p-6 border border-white/5 group-hover:border-primary/20 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.08)]">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-display font-bold text-text-primary text-lg group-hover:text-glow transition-colors">
                {isEducation ? item.degree : item.role}
              </h3>
              <p className="text-secondary font-medium text-sm mt-0.5">
                {isEducation ? item.school : item.company}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-mono text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-text-secondary">
                {item.period}
              </span>
              {item.location && (
                <p className="text-text-secondary text-xs mt-1.5 font-mono">{item.location}</p>
              )}
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {item.tags && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="orb absolute left-0 bottom-20 w-80 h-80 bg-accent opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// journey"
          title="Experience"
          subtitle="A timeline of the roles and projects that have shaped my craft."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <FadeIn>
              <h3 className="font-display font-semibold text-xs text-secondary tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-6 h-px bg-secondary" />
                Work Experience
              </h3>
            </FadeIn>
            {siteConfig.experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isEducation={false} />
            ))}
          </div>

          {/* Education */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="font-display font-semibold text-xs text-glow tracking-widest uppercase mb-8 flex items-center gap-3">
                <span className="w-6 h-px bg-glow" />
                Education
              </h3>
            </FadeIn>
            {siteConfig.education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isEducation={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
