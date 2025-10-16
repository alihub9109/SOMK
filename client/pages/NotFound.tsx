import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/site/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container flex min-h-[60svh] flex-col items-center justify-center gap-6 py-24 text-center">
        <p className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
          Error 404
        </p>
        <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
          Page not found
        </h1>
        <p className="max-w-xl text-foreground/70">
          The page you’re looking for doesn’t exist or has moved. Let’s take you
          back to something beautiful.
        </p>
        <Link
          to="/"
          className="rounded-full bg-foreground px-6 py-2 text-background"
        >
          Return Home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
