"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their work radiates polish and purpose. We shipped on time, on budget—and the results performed beyond expectations.",
      name: "Amelia Hart",
      title: "CMO, Westward",
    },
    {
      quote:
        "An elite partner. Strategy was sharp, design stunning, and the engineering flawless.",
      name: "Marcus Lee",
      title: "Founder, Lattice Labs",
    },
    {
      quote:
        "They elevate every detail. Our brand finally looks and feels as premium as it truly is.",
      name: "Sofia Park",
      title: "VP Brand, Alpenglow",
    },
  ];

  return (
    <section className="relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md bg-background py-20 antialiased">
      <h3 className="mb-8 text-center text-lg font-semibold tracking-tight">
        Don’t take our word for it
      </h3>

      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </section>
  );
}
