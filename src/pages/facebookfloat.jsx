import { motion } from "framer-motion";

export default function FloatingFacebook() {
  return (
    <motion.a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="fixed bottom-20 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
    >
      {/* Facebook Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="w-5 h-5 fill-white"
      >
        <path d="M279.14 288l14.22-92.66h-88.91V127.34c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    </motion.a>
  );
}