import { motion } from "framer-motion";
import { ArrowRight, Play, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Cinematic wedding photography by Hanuman Digitals"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/40 bg-background/30 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-shimmer" />
          <span className="text-xs tracking-[0.35em] text-gold uppercase">Established Since 1976</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          Hanuman Digitals
          <br />
          <span className="text-gradient-gold italic font-light">Frames That Speak</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Premium wedding photography, cinematography & studio craft across India & the USA —
          honouring nearly five decades of storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#portfolio"
            className="btn-gold btn-gold-hover px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm"
          >
            View Portfolio <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="btn-outline-gold btn-outline-gold-hover px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm"
          >
            <Play className="w-4 h-4 fill-current" /> Book Your Shoot
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-16 max-w-2xl"
        >
          {[
            { v: "49+", l: "Years of Craft" },
            { v: "5000+", l: "Weddings Captured" },
            { v: "5", l: "Studio Locations" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-3xl md:text-4xl text-gradient-gold">{s.v}</div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
