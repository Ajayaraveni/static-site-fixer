import { Reveal, SectionLabel } from "./Reveal";
import { Award, Camera, Sparkles, Heart, Zap } from "lucide-react";

const items = [
  { icon: Award, t: "Since 1976", d: "Nearly five decades of trusted photography craft." },
  { icon: Camera, t: "Professional Equipment", d: "Full-frame cinema cameras, prime lenses, drones." },
  { icon: Sparkles, t: "Premium Editing", d: "Color-graded by an award-winning post-production team." },
  { icon: Heart, t: "Trusted by Families", d: "5000+ weddings across 5 studios in India & the USA." },
  { icon: Zap, t: "Fast Delivery", d: "Highlight reels in 7 days, full albums in 30." },
];

export function WhyUs() {
  return (
    <section className="py-28 md:py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-background" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><SectionLabel>Why Choose Us</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              A standard of <span className="italic text-gradient-gold">excellence</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="text-center p-8 border border-border rounded-sm hover:border-gold/50 hover:bg-card transition-all duration-500 group h-full">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6 group-hover:border-gold group-hover:bg-gold/5 transition-all">
                  <it.icon className="w-7 h-7 text-gold" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-xl mb-3">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
