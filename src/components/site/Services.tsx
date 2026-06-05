import { Reveal, SectionLabel } from "./Reveal";
import {
  Heart, Film, Camera, Diamond, Users, User, Calendar, BookOpen, Printer,
} from "lucide-react";

const services = [
  { icon: Heart, t: "Wedding Photography", d: "Timeless storytelling of every ritual, glance and embrace." },
  { icon: Film, t: "Cinematic Wedding Films", d: "Hollywood-grade films edited with score and soul." },
  { icon: Camera, t: "Pre-Wedding Shoots", d: "Romantic narratives in dreamlike locations." },
  { icon: Diamond, t: "Engagement Photography", d: "Capturing the spark of the very first promise." },
  { icon: Users, t: "Couple Shoots", d: "Editorial portraits made to be framed forever." },
  { icon: User, t: "Portrait Photography", d: "Studio and outdoor portraits with refined lighting." },
  { icon: Calendar, t: "Event Coverage", d: "Birthdays, ceremonies and family celebrations." },
  { icon: BookOpen, t: "Album Designing", d: "Hand-crafted heirloom albums in luxury finishes." },
  { icon: Printer, t: "Digital Printing", d: "Archival-quality prints from our in-house lab." },
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
