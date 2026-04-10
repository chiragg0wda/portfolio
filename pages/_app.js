import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // Mouse-follow glow effect
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Global cursor glow */}
      <div id="cursor-glow" aria-hidden="true" />
      {/* Animated grid background */}
      <div className="grid-bg" aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
