import Head from "next/head";
import Navbar     from "../components/Navbar";
import Hero       from "../components/Hero";
import About      from "../components/About";
import Skills     from "../components/Skills";
import Projects   from "../components/Projects";
import Experience from "../components/Experience";
import Contact    from "../components/Contact";
import Footer     from "../components/Footer";
import { siteConfig } from "../data/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name} — {siteConfig.title}</title>
        <meta name="description" content={siteConfig.tagline} />
        <meta property="og:title"       content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.tagline} />
        <meta name="viewport"           content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
