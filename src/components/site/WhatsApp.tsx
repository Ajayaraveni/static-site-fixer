import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918885526529?text=Hi%20Hanuman%20Digitals%2C%20I'd%20like%20to%20enquire%20about%20a%20shoot."
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 relative" />
    </motion.a>
  );
}
