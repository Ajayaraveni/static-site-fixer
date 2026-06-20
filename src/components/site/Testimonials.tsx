import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SectionLabel } from "./Reveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { n: "Priya & Ramesh", l: "Hyderabad", t: "Hanuman Digitals turned our wedding into a film we relive every anniversary. Every frame is poetry." },
  { n: "Sneha Reddy", l: "Nizamabad", t: "Three generations of my family have trusted them. The album they crafted is a true heirloom." },
  { n: "Arjun & Meera", l: "Nirmal", t: "The cinematic pre-wedding film blew us away. World-class quality with the warmth of a local family." },
  { n: "Kavya & Rohit", l: "Adilabad", t: "From haldi to reception — every emotion captured. The team is professional, calm and incredibly talented." },
  { n: "Anjali Sharma", l: "Hyderabad", t: "Our baby's first-year shoot was magical. So much patience and creativity in every frame." },
  { n: "Vikram & Pooja", l: "Hyderabad", t: "Premium quality, premium service. Hanuman Digitals exceeded every expectation we had." },
  { n: "Lakshmi Devi", l: "Nirmal", t: "Their portrait work is unmatched. Studio lighting, posing, edits — everything felt curated." },
  { n: "Sai & Divya", l: "Nizamabad", t: "Booked them for the engagement — booked them again for the wedding. That should say it all." },
];

function useVisibleCount() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setN(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export function Testimonials() {
  const visible = useVisibleCount();
  const [index, setIndex] = useState(0);
  const max = reviews.length;

  const next = () => setIndex((i) => (i + 1) % max);
  const prev = () => setIndex((i) => (i - 1 + max) % max);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [max]);

  const shown = Array.from({ length: visible }, (_, k) => reviews[(index + k) % max]);

  return (
    <section id="testimonials" className="py-28 md:py-40 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><SectionLabel>Testimonials</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Words from <span className="italic text-gradient-gold">our families</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div
            className={`grid gap-8 ${
              visible === 3 ? "md:grid-cols-3" : visible === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {shown.map((r, i) => (
                <motion.div
                  key={`${index}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative p-10 border border-border rounded-sm bg-background hover:border-gold/40 transition-all duration-500 h-full group"
                >
                  <Quote className="w-10 h-10 text-gold/20 absolute top-6 right-6 group-hover:text-gold/40 transition-colors" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-xl leading-relaxed mb-8 text-foreground/90">
                    "{r.t}"
                  </p>
                  <div className="pt-6 border-t border-border">
                    <div className="font-serif text-lg text-gold">{r.n}</div>
                    <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">
                      {r.l}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(max).padStart(2, "0")}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-border hover:border-gold hover:text-gold transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
