"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
};

export default function PageFade({ children, className = "", delay = 0 }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Start animation on next frame to ensure it runs after mount
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const style = mounted ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div className={`${className} ${mounted ? "fade-in" : ""}`} style={style}>
      {children}
    </div>
  );
}
