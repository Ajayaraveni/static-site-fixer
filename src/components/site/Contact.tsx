import { useState } from "react";
import { Reveal, SectionLabel } from "./Reveal";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Reveal><SectionLabel>Get In Touch</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Let's create <span className="italic text-gradient-gold">something beautiful</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input required placeholder="Your Name" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
                <input required type="tel" placeholder="Phone" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
              </div>
              <input type="email" placeholder="Email" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
              <select className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors text-muted-foreground">
                <option>Service Interested In</option>
                <option>Wedding Photography</option>
                <option>Pre-Wedding Shoot</option>
                <option>Cinematic Film</option>
                <option>Portrait / Event</option>
              </select>
              <textarea required placeholder="Tell us about your event..." rows={5} className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors resize-none" />
              <button type="submit" className="btn-gold btn-gold-hover px-8 py-4 rounded-full inline-flex items-center gap-2 text-sm">
                {sent ? "Thank you — we'll reach out shortly" : <>Send Enquiry <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-8">
              <div className="p-8 border border-border rounded-sm bg-card/50">
                <h3 className="font-serif text-2xl mb-6">Visit Our Studio</h3>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div className="text-muted-foreground">
                      Cinema Road, Maheshwari Theatre Road,<br />
                      Near Andhra Bank, Adilabad,<br />
                      Telangana 504001
                    </div>
                  </div>
                  <a href="tel:+919849594302" className="flex gap-4 hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>+91 98495 94302</span>
                  </a>
                  <a href="https://wa.me/919849594302" target="_blank" rel="noopener" className="flex gap-4 hover:text-gold transition-colors">
                    <MessageCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">hello@hanumanstudios.in</span>
                  </div>
                </div>
              </div>

              <div className="rounded-sm overflow-hidden border border-border h-72">
                <iframe
                  title="Hanuman Studios location"
                  src="https://www.google.com/maps?q=Adilabad,Telangana&output=embed"
                  className="w-full h-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
