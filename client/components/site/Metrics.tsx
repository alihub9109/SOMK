"use client";

import Reveal from "./Reveal";
import { useEffect, useRef, useState } from "react";

// Hook for counting up numbers
function useCountUp(target: number, duration = 1500, trigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function Metrics() {
  const metrics = [
    { k: "Years", v: 12, suffix: "+" },
    { k: "Launches", v: 230, suffix: "+" },
    { k: "Disciplines", v: 15, suffix: "+" },
    { k: "Clients", v: "Global" }, // Non-numeric value
  ];

  return (
    <section className="container py-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {metrics.map((x, i) => (
          <Reveal key={x.k} delay={i * 60} className="text-center">
            <MetricValue target={x.v} suffix={x.suffix} />
            <div className="mt-1 text-xs uppercase tracking-wider text-foreground/60">
              {x.k}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function MetricValue({
  target,
  suffix,
}: {
  target: number | string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // trigger counting
        } else {
          setVisible(false); // reset counting when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Only animate numeric values
  const isNumber = typeof target === "number";
  const count = isNumber ? useCountUp(target, 1500, visible) : target;

  return (
    <div ref={ref} className="font-display text-4xl font-semibold tracking-tight">
      {count}
      {isNumber && suffix}
    </div>
  );
}

export default Metrics;
