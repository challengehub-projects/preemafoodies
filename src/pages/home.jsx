import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaFire, FaLeaf, FaArrowRight, FaStar } from "react-icons/fa";

import FeaturedFoods from "./featuredfoods";
import WhatsAppFloat from "./whatsappfloat";
import FloatingFacebook from "./facebookfloat";
import FloatingSocials from "./floatingsocials";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg')",
          }}
        />

        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />

        {/* Ambient Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

        {/* HERO CONTENT */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6">
            <FaUtensils className="text-yellow-400" />
            <span className="text-sm font-semibold text-gray-200">
              Premium Nigerian Kitchen
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Authentic
            <span className="block text-yellow-400">Nigerian Cuisine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mt-6 text-lg md:text-xl leading-8">
            Experience rich African flavors with expertly prepared meals —
            Jollof, Soups, Swallow, and Grilled delicacies made with passion.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-yellow-500 text-black font-bold shadow-lg hover:bg-yellow-400 transition flex items-center gap-2"
              >
                Explore Menu <FaArrowRight />
              </motion.button>
            </a>

            <a href="#featured">
              <button className="px-8 py-4 rounded-2xl border border-white/20 text-white hover:bg-white/10 transition">
                View Specials
              </button>
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

            <span className="flex items-center gap-2">
              <FaFire className="text-orange-400" />
              Freshly Cooked
            </span>

            <span className="flex items-center gap-2">
              <FaLeaf className="text-green-400" />
              Natural Ingredients
            </span>

            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              Premium Quality
            </span>

          </div>

        </motion.div>
      </section>

      {/* ================= FEATURED FOODS ================= */}
      <section id="featured" className="py-20 bg-black border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Chef’s <span className="text-yellow-400">Specials</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Carefully curated meals loved by our customers
            </p>
          </div>

          <FeaturedFoods />

        </div>
      </section>

      {/* ================= BRAND CTA SECTION ================= */}
      <section className="py-24 bg-gradient-to-r from-black via-zinc-900 to-black border-t border-white/10">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Taste The Difference of
            <span className="block text-yellow-400">True African Cooking</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            We don’t just cook food — we craft experiences that remind you of home,
            culture, and tradition in every bite.
          </p>

          <a href="/contact">
            <button className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-2xl hover:bg-yellow-400 transition">
              Order Now
            </button>
          </a>

        </div>
      </section>

      {/* FLOATING COMPONENTS */}
      <FloatingSocials />
      <FloatingFacebook />
      <WhatsAppFloat />
    </div>
  );
}