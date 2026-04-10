import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ── FADE IN WRAPPER ───────────────────────────────────── */
export function FadeIn({
  children,
  delay   = 0,
  direction = "up",  // "up" | "left" | "right" | "none"
  className = "",
}) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y:  direction === "up"    ?  40 : 0,
      x:  direction === "left"  ? -40 : direction === "right" ? 40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── SECTION TITLE ─────────────────────────────────────── */
export function SectionTitle({ label, title, subtitle }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <span className="font-mono text-xs text-secondary tracking-[0.2em] uppercase mb-3 block">
        {label}
      </span>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-text-secondary max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

/* ── STAGGER CONTAINER ─────────────────────────────────── */
export function StaggerContainer({ children, className = "" }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show:   { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
