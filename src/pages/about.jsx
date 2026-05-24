import { motion } from "framer-motion";
import {
    FaUtensils,
    FaShippingFast,
    FaBoxOpen,
    FaFire,
    FaStar,
    FaClock,
    FaUsers,
    FaHeart
} from "react-icons/fa";

import OwnerSection from "./ownersection";
import FloatingSocials from "./floatingsocials";
import FloatingFacebook from "./facebookfloat";
import WhatsAppFloat from "./whatsappfloat";

export default function AboutPage() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden px-6 py-20">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[150px] rounded-full animate-pulse"></div>

                <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse"></div>

                <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-green-400/5 blur-[120px] rounded-full"></div>

            </div>

            {/* FLOATING ICONS */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden text-white/70">

                <motion.div
                    animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 left-10 text-3xl"
                >
                    <FaUtensils />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute top-40 right-16 text-3xl text-green-400"
                >
                    <FaShippingFast />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-32 left-20 text-3xl text-blue-400"
                >
                    <FaBoxOpen />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity }}
                    className="absolute bottom-40 right-10 text-3xl text-red-400"
                >
                    <FaFire />
                </motion.div>

            </div>

            {/* HERO SECTION */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-center max-w-5xl mx-auto"
            >

                <p className="uppercase tracking-[0.5em] text-green-400 text-xs md:text-sm mb-5">
                    Welcome To PreeaFoodies
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">

                    Delicious Food,
                    <br />

                    <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                        Delivered With Love.
                    </span>

                </h1>

                <p className="text-white/60 mt-8 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">

                    PreeaFoodies is more than just food delivery.
                    We create comfort, convenience, and unforgettable experiences
                    through freshly prepared Nigerian meals delivered directly to your doorstep.

                    <br /><br />

                    Whether you're studying late at night, working through a busy schedule,
                    hanging out with friends, or relaxing at home —
                    we make sure delicious food is always just a few clicks away.

                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    <button className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-medium shadow-lg shadow-green-500/20">
                        Order Now
                    </button>

                    <button className="px-8 py-4 rounded-full border border-white/10 hover:border-green-400/40 hover:bg-white/5 transition-all duration-300">
                        Explore Menu
                    </button>

                </div>

            </motion.section>

            {/* STATS */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-24"
            >

                {[
                    {
                        icon: <FaUsers />,
                        number: "5K+",
                        label: "Happy Customers"
                    },
                    {
                        icon: <FaBoxOpen />,
                        number: "10K+",
                        label: "Deliveries Made"
                    },
                    {
                        icon: <FaStar />,
                        number: "4.9",
                        label: "Customer Rating"
                    },
                    {
                        icon: <FaClock />,
                        number: "Fast",
                        label: "Reliable Delivery"
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-md hover:border-green-400/30 transition-all duration-300"
                    >

                        <div className="text-3xl text-green-400 flex justify-center">
                            {item.icon}
                        </div>

                        <h2 className="text-3xl font-semibold mt-4">
                            {item.number}
                        </h2>

                        <p className="text-white/50 text-sm mt-2">
                            {item.label}
                        </p>

                    </motion.div>
                ))}

            </motion.section>

            {/* OWNER SECTION */}
            <div className="mt-28">
                <OwnerSection />
            </div>

            {/* FEATURES */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mt-28"
            >

                <div className="text-center mb-14">

                    <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-4">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light">
                        The PreeaFoodies Experience
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        {
                            emoji: "🍽️",
                            title: "Comfort & Convenience",
                            text: "No cooking stress, no long queues, no wasted time. Just order your favorite meals and enjoy premium comfort instantly."
                        },
                        {
                            emoji: "🚀",
                            title: "Fast Delivery",
                            text: "We deliver quickly around FUTO, UNIPORT, and Port Harcourt with speed, freshness, and reliability every time."
                        },
                        {
                            emoji: "🔥",
                            title: "Premium Taste",
                            text: "Every meal is carefully prepared with rich flavor, fresh ingredients, and authentic Nigerian recipes people truly love."
                        }
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.03,
                                y: -8
                            }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-green-400/30 transition-all duration-300"
                        >

                            <div className="text-5xl">
                                {item.emoji}
                            </div>

                            <h3 className="text-2xl mt-6 font-medium">
                                {item.title}
                            </h3>

                            <p className="text-white/50 leading-relaxed mt-4 text-sm">
                                {item.text}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </motion.section>

            {/* STORY SECTION */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mt-32"
            >

                <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-4">
                    Our Mission
                </p>

                <h2 className="text-4xl md:text-6xl font-light leading-tight">

                    Built For Real Life.

                </h2>

                <p className="text-white/60 mt-8 text-sm md:text-lg leading-relaxed">

                    PreeaFoodies was created with one simple mission:
                    to make quality food accessible, fast, and stress-free.

                    <br /><br />

                    We understand how busy life can get —
                    students rushing assignments, workers managing schedules,
                    families needing quick meals, and friends wanting late-night food.

                    <br /><br />

                    That is why we focus on creating a smooth experience
                    where delicious meals meet fast delivery, premium quality,
                    and exceptional customer satisfaction.

                    <br /><br />

                    We are not just delivering food.
                    We are delivering happiness, comfort, and peace of mind.

                </p>

            </motion.section>

            {/* TESTIMONIALS */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mt-32"
            >

                <div className="text-center mb-14">

                    <p className="uppercase tracking-[0.4em] text-green-400 text-xs mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light">
                        What Customers Say
                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {[
                        {
                            name: "Chioma",
                            text: "The delivery was super fast and the food tasted amazing. Definitely my favorite food service right now."
                        },
                        {
                            name: "Daniel",
                            text: "PreeaFoodies saves me every busy day. Clean packaging, hot meals, and great customer service."
                        },
                        {
                            name: "Miracle",
                            text: "Honestly one of the best food experiences around campus. The taste is premium every single time."
                        }
                    ].map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
                        >

                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-white/60 leading-relaxed mt-5 text-sm">
                                "{item.text}"
                            </p>

                            <div className="mt-6 flex items-center gap-3">

                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <FaHeart className="text-green-400" />
                                </div>

                                <div>
                                    <h4 className="font-medium">
                                        {item.name}
                                    </h4>

                                    <p className="text-white/40 text-xs">
                                        Verified Customer
                                    </p>
                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </motion.section>

            {/* FINAL CTA */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto mt-32"
            >

                <div className="rounded-[40px] bg-gradient-to-br from-green-500/20 to-emerald-500/5 border border-green-400/20 p-12 text-center backdrop-blur-md">

                    <h2 className="text-4xl md:text-6xl font-light leading-tight">

                        Ready To Enjoy
                        <br />

                        Amazing Food?

                    </h2>

                    <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of happy customers enjoying fast,
                        reliable, and delicious meals from PreeaFoodies every day.
                    </p>

                    <button className="mt-10 px-10 py-4 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-semibold shadow-xl shadow-green-500/20">

                        Start Ordering

                    </button>

                </div>

            </motion.section>

            {/* FLOATING SOCIALS */}
            <FloatingSocials />
            <FloatingFacebook />
            <WhatsAppFloat />

        </div>
    );
}