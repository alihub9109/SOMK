"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Reveal from "./Reveal";
import {
  IconClipboardCopy,
  IconFileCode,
  IconPalette,
  IconBrandBing,
  IconLayersOff,
  IconDeviceDesktop,
} from "@tabler/icons-react";

// Optional skeleton for the header area
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white/5 border border-white/10 backdrop-blur" />
);

export function PowerhouseBento() {
  const items = [
    {
      title: "Product Design",
      description:
        "From concept to polished reality—interfaces, systems, and visual languages that scale gracefully. We create design systems, UX flows, prototypes, and high-fidelity visuals that delight users.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconPalette className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Development",
      description:
        "Robust, accessible and fast. We build with modern stacks and obsessive attention to detail. Full-Stack solutions with performance and scalability in mind.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileCode className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Visual Identity",
      description:
        "Distinctive identities and motion systems that resonate across every touchpoint. Logo design, brand guidelines, color palettes, typography, and motion branding included.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-white/70" />,
    },
    {
      title: "Brand Strategy",
      description:
        "We help define positioning, messaging, and brand narratives that resonate across all channels and touchpoints.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconBrandBing className="h-4 w-4 text-white/70" />,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,120,66,0.35),rgba(0,0,0,0)_60%)]" />
      <div className="container">
        <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl mb-10">
          Our Design Practice
        </h3>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] gap-6">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={
                <Reveal delay={i * 75}>
                  {item.title}
                </Reveal>
              }
              description={
                <Reveal delay={i * 100}>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </Reveal>
              }
              header={item.header}
              icon={item.icon}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur ${item.className}`}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
