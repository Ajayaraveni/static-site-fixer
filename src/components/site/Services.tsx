import { Reveal, SectionLabel } from "./Reveal";
import {
  Heart, Film, Camera, User, BookOpen, Baby, Cake, Briefcase, Sparkles,
} from "lucide-react";

const services = [
  { icon: Heart, t: "Wedding Photography", d: "Timeless storytelling of every ritual, glance and embrace." },
  { icon: Film, t: "Wedding Cinematography", d: "Hollywood-grade films edited with score and soul." },
  { icon: Camera, t: "Pre-Wedding Shoots", d: "Romantic narratives in dreamlike locations." },
  { icon: User, t: "Portrait Photography", d: "Studio and outdoor portraits with refined lighting." },
  { icon: BookOpen, t: "Album Design", d: "Hand-crafted heirloom albums in luxury finishes." },
  { icon: Sparkles, t: "Maternity Shoots", d: "Soft, intimate portraits celebrating motherhood." },
  { icon: Baby, t: "Baby Shoots", d: "Gentle, themed sessions capturing first wonders." },
  { icon: Cake, t: "Birthday Events", d: "Joyful candid coverage of every milestone." },
  { icon: Briefcase, t: "Corporate Events", d: "Polished documentation of conferences and brand moments." },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-40 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal><SectionLabel>What We Do</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              A complete <span className="italic text-gradient-gold">visual house</span> for your story
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground">
              From the first look to the printed album — every chapter, captured with intent.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className="group bg-background p-10 h-full hover:bg-card transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <s.icon className="w-9 h-9 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3 group-hover:text-gold transition-colors">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
