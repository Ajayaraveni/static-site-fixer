import { Camera, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-20 pb-10 bg-card/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center">
              <Camera className="w-5 h-5 text-gold" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg">Hanuman Digitals</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase">Since 1976</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Frames That Speak — capturing timeless memories across Telangana for nearly five decades.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["About", "Services", "Portfolio", "Films", "Locations", "Testimonials", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Wedding Photography", "Wedding Cinematography", "Pre-Wedding", "Portraits", "Album Design", "Baby & Maternity", "Corporate Events"].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Hyderabad · Adilabad</li>
            <li>Nirmal · Nizamabad</li>
            <li><a href="tel:+918885526529" className="hover:text-gold transition-colors">+91 88855 26529</a></li>
            <li><a href="mailto:sanjayuttoor07@gmail.com" className="hover:text-gold transition-colors">sanjayuttoor07@gmail.com</a></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/hanuman_digitals/" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@hanumandigitals1" target="_blank" rel="noopener" aria-label="YouTube" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Hanuman Digitals. All rights reserved.</div>
        <div className="tracking-[0.2em] uppercase text-gold/70">Frames That Speak · Since 1976</div>
      </div>
    </footer>
  );
}
