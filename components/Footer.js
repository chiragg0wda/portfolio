import { siteConfig } from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
        <p className="font-display tracking-wider">
          <span className="gradient-text-primary font-bold">{siteConfig.name}</span>
        </p>
        <p className="font-mono text-xs">
          © {year} · Built with Next.js & ☕
        </p>
        <div className="flex gap-4">
          {siteConfig.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-glow transition-colors text-xs font-mono"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
