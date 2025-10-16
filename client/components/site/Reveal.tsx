import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: any;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = `opacity 600ms ease, transform 600ms ease`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "none";
            }, delay);
            io.unobserve(e.target);
            return () => clearTimeout(t);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
