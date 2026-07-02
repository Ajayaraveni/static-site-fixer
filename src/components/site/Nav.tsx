import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import logoAsset from "@/assets/hanuman-logo.png.asset.json";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Films", href: "#films" },
  { label: "Locations", href: "#locations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    href: "https://www.instagram.com/hanuman_digitals/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@hanumandigitals1",
    label: "YouTube",
    Icon: Youtube,
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="Hanuman Digitals — Home"
          className="flex items-center group shrink-0"
        >
          <img
            src={logoAsset.url}
            alt="Hanuman Digitals — Frames That Speak"
            className="h-12 md:h-14 w-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ mixBlendMode: "screen" }}
            draggable={false}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300"
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:text-gold py-2"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
