import { Button } from "@/components/ui/button";

function Cta() {
  return (
    <section id="contact" className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
          Let’s build something exceptional
        </p>
        <h3 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
          SKIP THE FLUFF, GET THE RESULTS.
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-foreground/70">
          Straight talk, sharp execution, measurable outcomes. If you’re ready
          to move decisively, we’re your team.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <Button className="rounded-full px-6 py-2">Start a Project</Button>
          <Button variant="outline" className="rounded-full px-6 py-2" asChild>
            <a href="/services">Explore Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;