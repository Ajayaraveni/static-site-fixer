import { Reveal, SectionLabel } from "./Reveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    n: "Priya & Ramesh",
    l: "Adilabad",
    t: "Hanuman Studios turned our wedding into a film we relive every anniversary. Every frame is poetry.",
  },
  {
    n: "Sneha Reddy",
    l: "Nizamabad",
    t: "Three generations of my family have trusted them. The album they crafted is a true heirloom.",
  },
  {
    n: "Arjun & Meera",
    l: "Nirmal",
    t: "The cinematic pre-wedding film blew us away. World-class quality with the warmth of a local family.",
  },
];

export function Testimonials() {
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

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.1}>
              <div className="relative p-10 border border-border rounded-sm bg-background hover:border-gold/40 transition-all duration-500 h-full group">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
