import { Reveal, SectionLabel } from "./Reveal";
import { Play, Youtube } from "lucide-react";

/**
 * Featured Cinematic Films
 *
 * Each entry is a YouTube video ID (the `v` query param). To later auto-fetch
 * from a YouTube playlist, replace this static array with a fetch to the
 * YouTube Data API (playlistItems.list) and map results to the same shape.
 */
type Film = { id: string; title: string };

const films: Film[] = [
  { id: "dQw4w9WgXcQ", title: "Wedding Highlights — Hyderabad" },
  { id: "dQw4w9WgXcQ", title: "Cinematic Pre-Wedding — Telangana" },
  { id: "dQw4w9WgXcQ", title: "Traditional Wedding Film — Adilabad" },
  { id: "dQw4w9WgXcQ", title: "Engagement Story — Nizamabad" },
  { id: "dQw4w9WgXcQ", title: "Sangeet Reel — Nirmal" },
  { id: "dQw4w9WgXcQ", title: "Reception Film — Hyderabad" },
];

const CHANNEL_URL = "https://www.youtube.com/@hanumandigitals1";

export function Films() {
  return (
    <section id="films" className="py-28 md:py-40 px-6 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><SectionLabel>YouTube Channel</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Featured <span className="italic text-gradient-gold">Cinematic Films</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground">
              A curated selection of our recent wedding films and cinematic stories.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((f, i) => (
            <Reveal key={`${f.id}-${i}`} delay={i * 0.06}>
              <a
                href={`https://www.youtube.com/watch?v=${f.id}`}
                target="_blank"
                rel="noopener"
                className="group block rounded-sm overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 bg-background"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={`https://i.ytimg.com/vi/${f.id}/hqdefault.jpg`}
                    alt={f.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/70 backdrop-blur border border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg group-hover:text-gold transition-colors">
                    {f.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener"
              className="btn-outline-gold btn-outline-gold-hover px-8 py-4 rounded-full inline-flex items-center gap-2 text-sm"
            >
              <Youtube className="w-4 h-4" /> Visit Our YouTube Channel
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
