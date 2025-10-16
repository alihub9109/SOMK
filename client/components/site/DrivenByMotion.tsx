import LogoMark from "@/components/site/LogoMark";

function DrivenByMotion() {
  return (
    <section className="container py-20">
      <div className="grid items-end gap-6 md:grid-cols-[1fr,auto,1fr]">
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          DRIVEN <span className="text-primary">•</span> BY
        </h2>
        <div className="mx-auto grid place-items-center rounded-full bg-foreground p-4 text-background shadow-soft">
          <LogoMark className="h-10 w-10" />
        </div>
        <h2 className="text-right font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          MOTION
        </h2>
      </div>
      <p className="mt-6 max-w-3xl text-balance text-base text-foreground/70">
        Precision strategy, expressive design, and world‑class engineering
        converge to move brands forward. Every interaction is composed with
        intention and measured for impact.
      </p>
    </section>
  );
}

export default DrivenByMotion;