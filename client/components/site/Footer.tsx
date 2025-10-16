import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,120,66,0.25),rgba(0,0,0,0)_60%)]"
        />
        <div className="container relative grid gap-10 py-16 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-sm text-foreground/60">SØMK Creative</p>
            <p className="max-w-sm text-sm text-foreground/70">
              A digital design atelier crafting motion-forward identities and
              elegant product experiences for discerning brands.
            </p>
          </div>
          <nav className="grid gap-2 text-sm">
            <p className="mb-2 font-semibold">Studio</p>
            <Link
              to="/about"
              className="text-foreground/70 hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-foreground/70 hover:text-foreground"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-foreground/70 hover:text-foreground"
            >
              Services
            </Link>
          </nav>
          <nav className="grid gap-2 text-sm">
            <p className="mb-2 font-semibold">Connect</p>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground"
            >
              Start a Project
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground">
              Instagram
            </a>
          </nav>
          <div className="grid gap-3 text-sm">
            <p className="font-semibold">Newsletter</p>
            <p className="text-foreground/70">
              Monthly insights on brand, motion and product.
            </p>
            <form className="flex gap-2">
              <input
                className="flex-1 rounded-full border bg-white/70 px-4 py-2 outline-none placeholder:text-foreground/50"
                placeholder="you@brand.com"
              />
              <button className="rounded-full bg-foreground px-4 py-2 text-background">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} SØMK Creative Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
