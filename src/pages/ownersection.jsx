import { motion } from "framer-motion";

export default function OwnerSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-white">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-light tracking-widest text-center"
      >
        Meet The Founder
      </motion.h2>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-14">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg"
            alt="Founder"
            className="w-full h-[400px] object-cover rounded-2xl border border-white/10 shadow-lg"
          />

          {/* glow */}
          <div className="absolute inset-0 rounded-2xl bg-green-500/10 blur-2xl -z-10"></div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h3 className="text-2xl font-light mb-3">
            PreeaFoodies Founder
          </h3>

          <p className="text-white/60 text-sm leading-relaxed">
            PreeaFoodies was created with one vision — to make food delivery simple,
            fast, and enjoyable for everyone. Built from passion and love for Nigerian cuisine,
            the founder started this brand to solve one problem: hunger should never be stressful.
          </p>

          <p className="text-white/60 text-sm leading-relaxed mt-4">
            From small beginnings around campus delivery to serving a growing community,
            PreeaFoodies continues to grow with dedication, quality, and customer satisfaction at its core.
          </p>

          {/* HIGHLIGHT */}
          <div className="mt-6 p-4 border border-white/10 bg-white/5 rounded-xl">
            <p className="text-green-400 text-sm">
              “Good food brings happiness — and that is what we deliver.”
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}