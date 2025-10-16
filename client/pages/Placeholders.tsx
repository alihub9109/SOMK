import Layout from "@/components/site/Layout";

export function Placeholder({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Layout>
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
            Page
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            {children ??
              "This page is under construction."}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export function Work() {
  return <Placeholder title="Selected Work" />;
}
export function Services() {
  return <Placeholder title="Capabilities" />;
}
export function About() {
  return <Placeholder title="The Studio" />;
}
export function Contact() {
  return (
    <Placeholder title="Start a Project">
      Share your goals and constraints. You'll receive a tailored plan,
      timeline, and investment estimate.
    </Placeholder>
  );
}
