"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Browse", href: "/browse" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Trading", href: "/trading" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-menu-open");
    } else {
      document.body.classList.remove("nav-menu-open");
    }
    return () => document.body.classList.remove("nav-menu-open");
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className="flex h-16 min-h-[4rem] items-center justify-between border-b border-border bg-background px-4 sm:px-6 lg:px-12 min-w-0 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-4 lg:gap-8 min-w-0 flex-1">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap flex-shrink-0"
          >
            kohrus
          </Link>
          <div className="hidden md:flex items-center gap-6 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex whitespace-nowrap"
            asChild
          >
            <a href="https://tally.so/r/eq6zdE" target="_blank" rel="noopener noreferrer">Login</a>
          </Button>
          <Button size="sm" className="whitespace-nowrap" asChild>
            <a href="https://tally.so/r/eq6zdE" target="_blank" rel="noopener noreferrer">Sign Up</a>
          </Button>
          <button
            type="button"
            className="md:hidden flex size-11 items-center justify-center rounded-lg bg-muted text-foreground hover:bg-muted/80 active:scale-95 transition-transform touch-manipulation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[calc(4rem+env(safe-area-inset-top))] z-[999] bg-foreground/40 backdrop-blur-sm md:hidden"
            aria-hidden
            onClick={closeMenu}
          />
          <div
            className="fixed top-0 right-0 bottom-0 z-[1000] w-[min(320px,85vw)] bg-background shadow-xl border-l border-border pt-[calc(4rem+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)] px-5 overflow-y-auto md:hidden"
            style={{ animation: "navPanelIn 0.25s ease-out" }}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center min-h-12 min-w-[44px] px-3 rounded-lg text-base font-medium text-foreground hover:bg-muted active:scale-[0.99] transition-colors touch-manipulation"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                <Button variant="outline" className="w-full min-h-12" asChild>
                  <a href="https://tally.so/r/eq6zdE" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Login
                  </a>
                </Button>
                <Button className="w-full min-h-12" asChild>
                  <a href="https://tally.so/r/eq6zdE" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Sign Up
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
