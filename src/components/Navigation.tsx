import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── Top Navigation Bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold gradient-text">
              Ranggawan
            </a>

            {/* Desktop Nav Links + Theme Toggle */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile: Theme Toggle + Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              {/* Morphing hamburger/close button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {/* Menu icon — fades & rotates out */}
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    transform: isMobileMenuOpen
                      ? "rotate(90deg) scale(0.5)"
                      : "rotate(0deg) scale(1)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <Menu className="h-5 w-5" />
                </span>

                {/* X icon — fades & rotates in */}
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? "rotate(0deg) scale(1)"
                      : "rotate(-90deg) scale(0.5)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <X className="h-5 w-5 text-primary" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Backdrop overlay ── */}
      <div
        className="fixed inset-0 z-[60] md:hidden"
        style={{
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Slide-from-right drawer panel ── */}
      <aside
        aria-label="Mobile navigation"
        className="fixed top-0 right-0 h-full w-72 z-[70] md:hidden flex flex-col"
        style={{
          background:
            "hsl(var(--background) / 0.97)",
          backdropFilter: "blur(24px)",
          borderLeft: "1px solid hsl(var(--primary) / 0.2)",
          boxShadow:
            "-16px 0 60px -12px hsl(var(--primary) / 0.15)",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition:
            "transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-5 shrink-0"
          style={{ borderBottom: "1px solid hsl(var(--primary) / 0.15)" }}
        >
          <span className="text-xl font-bold gradient-text">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-primary" />
          </button>
        </div>

        {/* Nav items with staggered entrance */}
        <nav className="px-5 py-6 flex flex-col gap-1 grow">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/25 transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateX(0px)"
                  : "translateX(28px)",
                transition: [
                  `opacity 0.38s ease ${index * 55 + 120}ms`,
                  `transform 0.38s cubic-bezier(0.32,0.72,0,1) ${index * 55 + 120}ms`,
                  "color 0.25s",
                  "background-color 0.25s",
                  "border-color 0.25s",
                ].join(", "),
              }}
            >
              {/* Dot */}
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
                style={{
                  background: "hsl(var(--primary) / 0.45)",
                }}
              />
              {item.label}
              {/* Chevron */}
              <span className="ml-auto text-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300 text-primary">
                ›
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom gradient accent */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--primary) / 0.07), transparent)",
          }}
        />
      </aside>
    </>
  );
};
