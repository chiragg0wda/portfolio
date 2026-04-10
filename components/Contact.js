import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/config";
import { SectionTitle, FadeIn } from "./ui/Animations";

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="orb absolute right-0 top-0 w-96 h-96 bg-primary opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="// let's talk"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed">
                I'm currently open to new opportunities — whether it's a full-time role,
                a freelance project, or just an interesting conversation about tech and design.
                Let's build something great together.
              </p>

              {CONTACT_INFO.map((ci) => (
                <div key={ci.label} className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/5 hover:border-primary/20 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-glow group-hover:bg-primary/25 transition-colors">
                    {ci.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs font-mono mb-0.5">{ci.label}</p>
                    {ci.href ? (
                      <a href={ci.href} className="text-text-primary font-medium hover:text-glow transition-colors">
                        {ci.value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-medium">{ci.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Socials */}
              <div className="pt-4">
                <p className="text-text-secondary text-xs font-mono mb-4 tracking-widest uppercase">Find me on</p>
                <div className="flex gap-3">
                  {siteConfig.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass rounded-xl border border-white/10 text-sm text-text-secondary hover:text-glow hover:border-primary/30 transition-all font-medium"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass rounded-2xl p-10 border border-accent/20 text-center h-full flex flex-col items-center justify-center neon-glow-cyan"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-2">Message Sent!</h3>
                <p className="text-text-secondary">Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wider">NAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wider">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="contact-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-2 tracking-wider">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="contact-input resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-white font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
