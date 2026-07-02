import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal, SectionLabel } from "./Reveal";
import {
  MapPin, Phone, Mail, MessageCircle, ArrowRight, Instagram, Youtube, Loader2,
} from "lucide-react";

const SERVICES = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding Shoot",
  "Portrait Photography",
  "Album Design",
  "Maternity Shoot",
  "Baby Shoot",
  "Birthday Event",
  "Corporate Event",
];

const SERVICE_CITIES = [
  { city: "Hyderabad", note: "Studio · Chikkadapally" },
  { city: "Adilabad", note: "Studio · Cinema Road" },
  { city: "Nirmal", note: "Studio · Narayan Reddy Market" },
  { city: "Nizamabad", note: "Studio · Beside Bus Stand" },
  { city: "Princeton, TX · USA", note: "Sowmya's Photography" },
];

const TO_EMAIL = "sanjayuttoor07@gmail.com";

const EMAILJS_SERVICE_ID = "service_7ybqgwd";
const EMAILJS_TEMPLATE_ID = "template_6q372l7";
const EMAILJS_PUBLIC_KEY = "e1sYE-k0RiIv1g_oM";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS send failed", err);
      setStatus("error");
    }
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
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input name="from_name" required maxLength={100} placeholder="Your Name" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
                <input name="phone" required type="tel" maxLength={20} placeholder="Phone Number" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
              </div>
              <input name="reply_to" required type="email" maxLength={255} placeholder="Email" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
              <div className="grid sm:grid-cols-2 gap-6">
                <input name="event_date" type="date" placeholder="Event Date" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors text-muted-foreground" />
                <input name="event_location" maxLength={120} placeholder="Event Location" className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors" />
              </div>
              <select name="service" defaultValue="" required className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors text-muted-foreground">
                <option value="" disabled>Service Required</option>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
              <textarea name="message" required maxLength={1000} placeholder="Tell us about your event..." rows={5} className="bg-card border border-border focus:border-gold rounded-sm px-5 py-4 w-full outline-none transition-colors resize-none" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gold btn-gold-hover px-8 py-4 rounded-full inline-flex items-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>Sending<Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Enquiry <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              {status === "success" && (
                <p role="status" className="text-sm text-gold">
                  Thank you! Your enquiry has been sent successfully. Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  We couldn't send your enquiry right now. Please try again or reach us on WhatsApp at{" "}
                  <a href="https://wa.me/918885526529" target="_blank" rel="noopener" className="underline hover:text-gold">
                    +91 88855 26529
                  </a>.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-8">
              <div className="p-8 border border-border rounded-sm bg-card/50">
                <h3 className="font-serif text-2xl mb-6">Reach Out To Us</h3>
                <div className="space-y-5 text-sm">
                  <a href="tel:+918885526529" className="flex gap-4 hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>+91 88855 26529</span>
                  </a>
                  <a href="https://wa.me/918885526529" target="_blank" rel="noopener" className="flex gap-4 hover:text-gold transition-colors">
                    <MessageCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a href={`mailto:${TO_EMAIL}`} className="flex gap-4 hover:text-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{TO_EMAIL}</span>
                  </a>
                </div>

                <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                  <a href="https://www.instagram.com/hanuman_digitals/" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold transition-all flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@hanumandigitals1" target="_blank" rel="noopener" aria-label="YouTube" className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold transition-all flex items-center justify-center">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">5 Service Locations</div>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICE_CITIES.map((l) => (
                    <div
                      key={l.city}
                      className="p-5 border border-border rounded-sm bg-card/40 hover:border-gold/50 hover:bg-card transition-all duration-500"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                        <div>
                          <div className="font-serif text-lg">{l.city}</div>
                          <div className="text-[11px] text-muted-foreground mt-1">{l.note}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
