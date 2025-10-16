"use client";

import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import LogoMark from "./LogoMark";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "backdrop-blur-md/50 bg-background/75 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-lg tracking-tight"
        >
          <span className="text-primary">
            <LogoMark className="w-6 h-6" />
          </span>
          <span className="hidden sm:inline-block">SØMK Creative</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/70"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Mobile Burger Button */}
          <button
            className="relative flex h-10 w-10 flex-col items-center justify-center md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 bg-foreground rounded-sm transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-6 bg-foreground rounded-sm my-[6px] transition-all"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-6 bg-foreground rounded-sm transition-all"
            />
          </button>

          <Button
            asChild
            className="hidden sm:inline-flex rounded-full px-5 py-2.5"
          >
            <a href="#contact">Start a Project</a>
          </Button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur"
        >
          <div className="container flex h-full flex-col py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 font-display text-lg"
              >
                <span className="text-primary">
                  <LogoMark className="w-6 h-6" />
                </span>
                SØMK Creative
              </Link>
              {/* Animated X is handled by the same button */}
              <button
                onClick={() => setOpen(false)}
                className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center"
                aria-label="Close menu"
              >
                <motion.span
                  animate={{ rotate: 45, y: 6 }}
                  className="block h-[2px] w-6 bg-foreground rounded-sm"
                />
                <motion.span
                  animate={{ opacity: 0 }}
                  className="block h-[2px] w-6 bg-foreground rounded-sm my-[6px]"
                />
                <motion.span
                  animate={{ rotate: -45, y: -6 }}
                  className="block h-[2px] w-6 bg-foreground rounded-sm"
                />
              </button>
            </div>

            <nav className="mt-10 grid gap-4 text-3xl font-display">
              {navItems.map((i) => (
                <NavLink
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="tracking-tight"
                >
                  {i.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-foreground px-6 py-3 text-background"
              >
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
