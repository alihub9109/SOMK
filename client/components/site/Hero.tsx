import { Button } from "@/components/ui/button";
import Reveal from "@/components/site/Reveal";

function Hero() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,120,66,0.65),rgba(255,120,66,0.35)_35%,rgba(255,120,66,0.08)_70%,transparent_80%)]" />
      <div className="container flex min-h-[80svh] flex-col items-center justify-center gap-10 py-20 text-center">
        <Reveal className="mx-auto flex items-center gap-3 rounded-full border bg-white/50 px-4 py-2 text-xs backdrop-blur">
          <span className="text-primary">New</span>
          <span className="text-foreground/70">
            Motion-first brand and product studio
          </span>
        </Reveal>
        <Reveal
          as="h1"
          className="font-display text-5xl font-semibold tracking-[-0.03em] md:text-7xl"
        >
          SØMK Creative Co.
        </Reveal>
        <Reveal className="relative">
          <div className="absolute -inset-8 -z-10 animate-glow rounded-full" />
          {/* <div className="grid place-items-center rounded-full bg-gradient-to-b from-foreground/90 to-foreground p-10 text-background shadow-soft">
            <LogoMark className="h-24 w-24 animate-spinSlow" />
          </div> */}
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="rounded-full px-6 py-2">View Work</Button>
          <Button variant="outline" className="rounded-full px-6 py-2" asChild>
            <a href="#contact">Start a Project</a>
          </Button>
        </div>
        <p className="max-w-2xl text-balance text-sm text-foreground/70">
          Elevating brands with luxurious identity, cinematic digital experiences, and meticulously engineered products—crafted with motion at the core to deliver unparalleled performance.
        </p>
      </div>
    </section>
  );
}

export default Hero;