import { motion } from "framer-motion";
import OwnerSection from "./ownersection";

import { FaUtensils, FaShippingFast, FaBoxOpen, FaFire } from "react-icons/fa";
import FloatingSocials from "./floatingsocials";
import FloatingFacebook from "./facebookfloat";
import WhatsAppFloat from "./whatsappfloat";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden px-6 py-20">

            <OwnerSection />

            {/* 🌌 BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
            </div>

            {/* 🌊 FLOATING ICONS */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden text-white/70">

                <motion.div
                    animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 text-2xl"
                >
                    <FaUtensils />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-40 right-16 text-2xl text-green-400"
                >
                    <FaShippingFast />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-32 left-20 text-2xl text-blue-400"
                >
                    <FaBoxOpen />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-10 text-2xl text-red-400"
                >
                    <FaFire />
                </motion.div>

            </div>

            {/* HERO TITLE */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-light tracking-widest">
                    About PreeaFoodies
                </h1>

                <p className="text-white/60 mt-5 text-sm leading-relaxed">
                    PreeaFoodies is a modern food delivery experience built for comfort, relaxation, and enjoyment.
                    We bring fresh Nigerian meals directly to you — fast, hot, and stress-free.
                </p>
            </motion.div>

            {/* FEATURE CARDS */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
                >
                    <div className="text-3xl">🍽️</div>
                    <h3 className="mt-3 text-lg">Relax & Enjoy</h3>
                    <p className="text-white/50 text-sm mt-2">
                        No cooking stress. Just order and enjoy your favorite meals.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
                >
                    <div className="text-3xl">🚀</div>
                    <h3 className="mt-3 text-lg">Fast Delivery</h3>
                    <p className="text-white/50 text-sm mt-2">
                        We deliver hot meals quickly around FUTO, UNIPORT, and Port Harcourt.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md"
                >
                    <div className="text-3xl">🔥</div>
                    <h3 className="mt-3 text-lg">Premium Taste</h3>
                    <p className="text-white/50 text-sm mt-2">
                        Authentic Nigerian dishes made with love and rich flavor.
                    </p>
                </motion.div>

            </div>

            {/* SECOND STORY SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center mt-20"
            >
                <h2 className="text-2xl md:text-3xl font-light tracking-widest">
                    Why People Love PreemaFoodies
                </h2>

                <p className="text-white/60 mt-5 text-sm leading-relaxed">
                    We are not just a food service — we are a lifestyle.
                    Whether you're a student, worker, or just relaxing at home,
                    PreeaFoodies makes sure you eat well without stress or delay.
                </p>
            </motion.div>

            <FloatingSocials />
            <FloatingFacebook />
            <WhatsAppFloat />

        </div>
    );
}