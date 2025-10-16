"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

function FeaturedWork() {
  const images = [
    "https://www.aliwebs.dev/thumbnails/archeo.webp",
    "https://www.aliwebs.dev/thumbnails/veloura.webp",
    "https://www.aliwebs.dev/thumbnails/spa.webp",
    "https://www.aliwebs.dev/thumbnails/veloura.webp",
    "https://www.aliwebs.dev/thumbnails/lumino.webp",
    "https://www.aliwebs.dev/thumbnails/fitwithalex.webp",
    "https://www.aliwebs.dev/thumbnails/trusocial.webp",
    "https://www.aliwebs.dev/thumbnails/syncspace.webp",
    "https://www.aliwebs.dev/thumbnails/neuro.webp",
    "https://www.aliwebs.dev/thumbnails/eclipse.webp",
    "https://www.aliwebs.dev/thumbnails/novaco.webp",
    "https://www.aliwebs.dev/thumbnails/archeo.webp",
    "https://www.aliwebs.dev/thumbnails/voltedge.webp",
    "https://www.aliwebs.dev/thumbnails/notora.webp",
    "https://www.aliwebs.dev/thumbnails/verdantia.webp",
    "https://www.aliwebs.dev/thumbnails/novareach.webp",
    "https://www.aliwebs.dev/thumbnails/elenavoss.webp",
    "https://www.aliwebs.dev/thumbnails/fittracker.webp",
    "https://www.aliwebs.dev/thumbnails/nexusdigital.webp",
    "https://www.aliwebs.dev/thumbnails/elite-fit.webp",
    "https://www.aliwebs.dev/thumbnails/brewhaven.webp",
    "https://www.aliwebs.dev/thumbnails/resto.webp",
    "https://www.aliwebs.dev/thumbnails/flowboard.webp",
    "https://www.aliwebs.dev/thumbnails/verdantia.webp",
    "https://www.aliwebs.dev/thumbnails/lumino.webp",
    "https://www.aliwebs.dev/thumbnails/notora.webp",
    "https://www.aliwebs.dev/thumbnails/neuro.webp",
    "https://www.aliwebs.dev/thumbnails/syncspace.webp",
    "https://www.aliwebs.dev/thumbnails/voltedge.webp",
    "https://www.aliwebs.dev/thumbnails/syncspace.webp",
    "https://www.aliwebs.dev/thumbnails/veloura.webp",
    "https://www.aliwebs.dev/thumbnails/novareach.webp",
    
    "https://www.aliwebs.dev/thumbnails/novareach.webp",
  ];

  return (
    <section className="container py-14">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">Featured Work</h3>
        <a
          href="https://aliwebs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground/70 hover:text-foreground"
        >
          Visit site
        </a>
      </div>

      {/* 3D Marquee only */}
      <div className="mx-auto mt-6 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <a href="https://aliwebs.dev" target="_blank" rel="noopener noreferrer">
          <ThreeDMarquee images={images} />
        </a>
      </div>
    </section>
  );
}

export default FeaturedWork;
