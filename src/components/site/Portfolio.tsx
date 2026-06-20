import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

type Cat =
  | "All"
  | "Wedding Photography"
  | "Wedding Cinematography"
  | "Pre-Wedding"
  | "Portrait Photography"
  | "Album Design";

/**
 * Portfolio items.
 *
 * To later wire up real galleries: replace this array with imports from
 * category-specific folders (e.g. `src/assets/portfolio/wedding/*`) or fetch
 * a manifest at runtime. The shape `{ src, cat, h, alt }` should stay the
 * same so the rest of the component keeps working.
 */
const items = [
  { src: g1, cat: "Wedding Photography", h: "row-span-2", alt: "Bridal portrait at reception" },
  { src: g2, cat: "Pre-Wedding", h: "", alt: "Misty mountain pre-wedding" },
  { src: g3, cat: "Portrait Photography", h: "row-span-2", alt: "Bride portrait" },
  { src: g4, cat: "Wedding Cinematography", h: "", alt: "Wedding ring exchange" },
  { src: g5, cat: "Portrait Photography", h: "", alt: "Groom portrait in sherwani" },
  { src: g6, cat: "Pre-Wedding", h: "", alt: "Engagement ring close-up" },
  { src: g7, cat: "Album Design", h: "row-span-2", alt: "Luxury wedding album spread" },
  { src: g8, cat: "Wedding Photography", h: "", alt: "Haldi ceremony" },
] as const;

const cats: Cat[] = [
  "All",
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding",
  "Portrait Photography",
  "Album Design",
];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = items.filter((i) => active === "All" || i.cat === active);

  return (
    <section id="portfolio" className="py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal><SectionLabel>Portfolio</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Moments, <span className="italic text-gradient-gold">framed forever</span>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase rounded-full border transition-all ${
                  active === c
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                layout
                key={it.src}
                onClick={() => setLightbox(it.src)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-sm ${it.h} cursor-zoom-in`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-xs tracking-[0.25em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  {it.cat}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-[100] flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground p-3" onClick={() => setLightbox(null)}>
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Portfolio detail"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
