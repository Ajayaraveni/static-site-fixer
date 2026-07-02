import { Reveal, SectionLabel } from "./Reveal";
import about from "@/assets/about.jpg";

const stats = [
  { v: "49+", l: "Years of Legacy" },
  { v: "5000+", l: "Weddings Captured" },
  { v: "5", l: "Cities Served" },
  { v: "100%", l: "Trusted by Families" },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-transparent blur-2xl" />
            <img
              src={about}
              alt="Vintage camera and photo album"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative rounded-sm w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-background border border-gold/40 px-8 py-6 rounded-sm hidden md:block">
              <div className="font-serif text-5xl text-gradient-gold">1976</div>
              <div className="text-xs tracking-[0.25em] text-muted-foreground uppercase mt-1">
                Our Beginning
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Nearly five decades of <span className="italic text-gradient-gold">craft,</span>
              <br /> emotion & legacy.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1976, Hanuman Digitals began as a small portrait studio with a
                single ambition — to honour every face, every smile, every moment with the
                dignity of true craft.
              </p>
              <p>
                Today, with five studios across Hyderabad, Adilabad, Nirmal, Nizamabad and
                Princeton, Texas (USA), we remain a family-run house of imagery — blending
                old-world reverence with modern cinematic artistry.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={0.3 + i * 0.08}>
                <div className="border-l border-gold/40 pl-5">
                  <div className="font-serif text-4xl md:text-5xl text-gradient-gold">{s.v}</div>
                  <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase mt-2">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
