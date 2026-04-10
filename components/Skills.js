import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "../data/config";
import { SectionTitle, FadeIn } from "./ui/Animations";

function SkillCategory({ category, items, index }) {
  return (
    <FadeIn delay={index * 0.15}>
      <div className="glass rounded-2xl p-7 border border-white/5 hover:border-primary/20 transition-colors duration-300 h-full">
        <h3 className="font-display font-semibold text-sm text-secondary tracking-widest uppercase mb-6">
          {category}
        </h3>
        <div className="flex flex-wrap gap-3">
          {items.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="tag-chip"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="orb absolute left-0 top-1/2 w-80 h-80 bg-primary opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// expertise"
          title="Skills & Stack"
          subtitle="Technologies I work with day-to-day, from frontend polish to backend architecture."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.skills.map((cat, i) => (
            <SkillCategory
              key={cat.category}
              category={cat.category}
              items={cat.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
