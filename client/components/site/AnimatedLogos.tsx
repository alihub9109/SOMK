"use client";

import canvaLogo from "@/assets/logos/canva.svg";
import metaLogo from "@/assets/logos/meta.svg";
import shopifyLogo from "@/assets/logos/shopify.svg";
import figmaLogo from "@/assets/logos/figma.svg";
import googleLogo from "@/assets/logos/google.svg";
import framerLogo from "@/assets/logos/framer.svg";

const LOGOS = [
  { id: 1, src: canvaLogo, alt: "Canva" },
  { id: 2, src: metaLogo, alt: "Meta" },
  { id: 3, src: shopifyLogo, alt: "Shopify" },
  { id: 4, src: figmaLogo, alt: "Figma" },
  { id: 5, src: googleLogo, alt: "Google" },
  { id: 6, src: framerLogo, alt: "Framer" },
];

export function LogoCloudSimple({
  title = "Trusted by leading teams from around the world",
  description = "Trusted by leading teams from around the world",
  count = 6,
}: {
  title?: string;
  description?: string;
  count?: number;
}) {
  const logos = LOGOS.slice(0, count);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center text-balance md:mb-16">
          <h2 className="mb-8 text-center text-lg font-semibold tracking-tight">{title}</h2>
          {/* <p className="text-muted-foreground mt-4 text-lg">{description}</p> */}
        </div>

        {/* ✅ Logo grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
