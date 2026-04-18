import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import FeaturedFoods from "./featuredfoods";
import WhatsAppFloat from "./whatsappfloat";
import FloatingFacebook from "./facebookfloat";
import FloatingSocials from "./floatingsocials";

export default function Home() {
  return (
    

    <div className="bg-black text-white min-h-screen font-sans">


    <section className="relative h-screen flex items-center justify-center text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Authentic Nigerian Taste
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Jollof. Swallow. Real Food Experience.
        </p>

          {/* BUTTON WITH SOFT GLOW PULSE */}
          <a
            href="/contact"
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(212,175,55,0.0)",
                  "0 0 25px rgba(212,175,55,0.4)",
                  "0 0 0px rgba(212,175,55,0.0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#d4af37] transition"
            >
              Explore Menu
            </motion.button>
          </a>
      </motion.div>
      
    </section>



      {/* Featured Foods */}
        <FeaturedFoods />
      
      <FloatingSocials />
      <FloatingFacebook />
      <WhatsAppFloat />
    </div>
  );
}


