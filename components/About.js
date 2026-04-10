import { siteConfig } from "../data/config";
import { SectionTitle, FadeIn } from "./ui/Animations";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Faint orb */}
      <div className="orb absolute right-0 top-1/2 w-96 h-96 bg-secondary opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// about me"
          title="Who I Am"
          subtitle=""
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual */}
          <FadeIn direction="left">
            <div className="relative flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute w-72 h-72 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute w-60 h-60 rounded-full border border-secondary/10" style={{ animation: "spin 15s linear infinite reverse" }} />
              {/* Main circle */}
              <div className="relative w-52 h-52 rounded-full glass neon-glow flex items-center justify-center text-8xl animate-float overflow-hidden">
                {siteConfig.heroImage ? (
                  <img
                    src={siteConfig.heroImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  siteConfig.avatarEmoji
                )}
              </div>
              {/* Floating badges */}
              {[
                { text: "React", pos: "top-4 right-4", color: "text-secondary" },
                { text: "Node.js", pos: "bottom-4 right-0", color: "text-accent" },
                { text: "Python", pos: "bottom-4 left-0", color: "text-glow" },
                { text: "Next.js", pos: "top-4 left-4", color: "text-primary" },
              ].map((b) => (
                <div
                  key={b.text}
                  className={`absolute ${b.pos} glass px-3 py-1.5 rounded-full text-xs font-mono ${b.color} border border-white/10`}
                >
                  {b.text}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Text content */}
          <FadeIn direction="right" delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg whitespace-pre-line mb-8">
              {siteConfig.about}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
