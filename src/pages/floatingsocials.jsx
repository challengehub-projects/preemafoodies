import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <>
      {/* 📸 INSTAGRAM (LEFT) */}
      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg"
      >
        <FaInstagram className="text-white text-lg" />
      </motion.a>

      {/* 🎵 TIKTOK (RIGHT - BELOW) */}
      <motion.a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-40 right-6 z-50 bg-black p-3 rounded-full shadow-lg border border-white/10"
      >
        <FaTiktok className="text-white text-lg" />
      </motion.a>
    </>
  );
}