import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
    FaWhatsapp,
    FaEnvelope,
    FaClock,
    FaMapMarkerAlt,
    FaStar,
    FaShippingFast,
    FaUtensils
} from "react-icons/fa";

import FloatingSocials from "./floatingsocials";
import FloatingFacebook from "./facebookfloat";
import WhatsAppFloat from "./whatsappfloat";

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        address: "",
        food: "",
        note: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendWhatsApp = () => {

        const phone = "234XXXXXXXXXX";

        const message = `
🍽 NEW ORDER - PreeaFoodies

👤 Name: ${form.name}
🏠 Address: ${form.address}
🍛 Food: ${form.food}
📝 Note: ${form.note}
`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };

    const sendEmail = () => {

        const email = "youremail@gmail.com";

        const subject = "New Order - PreeaFoodies";

        const body = `
Name: ${form.name}
Address: ${form.address}
Food: ${form.food}
Note: ${form.note}
`;

        const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailto, "_blank");
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-black text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px] rounded-full animate-pulse"></div>

                <div className="absolute bottom-[-250px] right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full animate-pulse"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,204,0,0.03),transparent_60%)]"></div>

            </div>

            {/* HERO */}
            <section className="relative px-6 pt-28 pb-24 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >

                    <p className="uppercase tracking-[0.5em] text-yellow-400 text-xs mb-5">
                        Contact PreeaFoodies
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">

                        Fresh Nigerian Meals
                        <br />

                        <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                            Delivered Fast.
                        </span>

                    </h1>

                    <div className="mt-8 text-xl md:text-2xl text-yellow-300 font-light">

                        <Typewriter
                            words={[
                                "Premium Food Experience",
                                "Fast & Reliable Delivery",
                                "Comfort In Every Bite",
                                "Hot Meals Delivered Daily"
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />

                    </div>

                    <p className="text-white/60 mt-8 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">

                        At PreeaFoodies, we combine premium taste,
                        fast delivery, and exceptional customer experience
                        to create a modern food lifestyle built around convenience.

                        <br /><br />

                        Whether you're at home, school, work, or relaxing with friends,
                        we make sure delicious meals are always within reach.

                    </p>

                </motion.div>

            </section>

            {/* STATS */}
            <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

                {[
                    {
                        icon: <FaUtensils />,
                        title: "Premium Meals"
                    },
                    {
                        icon: <FaShippingFast />,
                        title: "Fast Delivery"
                    },
                    {
                        icon: <FaStar />,
                        title: "Top Rated"
                    },
                    {
                        icon: <FaClock />,
                        title: "Daily Service"
                    }
                ].map((item, index) => (

                    <motion.div
                        key={index}
                        whileHover={{
                            y: -5,
                            scale: 1.03
                        }}
                        className="bg-yellow-400/5 border border-yellow-400/10 rounded-3xl p-8 backdrop-blur-md text-center hover:border-yellow-400/30 transition-all duration-300"
                    >

                        <div className="text-3xl text-yellow-400 flex justify-center">
                            {item.icon}
                        </div>

                        <h3 className="mt-4 text-lg">
                            {item.title}
                        </h3>

                    </motion.div>

                ))}

            </section>

            {/* STORY SECTIONS */}
            <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">

                {/* SECTION 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >

                    <div className="overflow-hidden rounded-[30px] border border-yellow-400/10">

                        <img
                            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                            className="w-full h-[350px] object-cover hover:scale-110 transition duration-700"
                        />

                    </div>

                    <div>

                        <p className="uppercase tracking-[0.3em] text-yellow-400 text-xs mb-4">
                            Comfort & Relaxation
                        </p>

                        <h2 className="text-4xl md:text-5xl font-light leading-tight">
                            Enjoy Food
                            <br />
                            Without Stress.
                        </h2>

                        <p className="text-white/60 mt-6 leading-relaxed">

                            Forget the stress of cooking, shopping,
                            and waiting in long queues.

                            <br /><br />

                            PreeaFoodies gives you a smooth food experience
                            where hot, delicious meals arrive exactly when you need them.

                        </p>

                    </div>

                </motion.div>

                {/* SECTION 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >

                    <div>

                        <p className="uppercase tracking-[0.3em] text-yellow-400 text-xs mb-4">
                            Fast Delivery
                        </p>

                        <h2 className="text-4xl md:text-5xl font-light leading-tight">
                            Speed Meets
                            <br />
                            Freshness.
                        </h2>

                        <p className="text-white/60 mt-6 leading-relaxed">

                            Our delivery system is designed for efficiency,
                            ensuring your food gets to you hot, fresh,
                            and right on time.

                            <br /><br />

                            We serve students, workers, families,
                            and everyone who values convenience and quality.

                        </p>

                    </div>

                    <div className="overflow-hidden rounded-[30px] border border-yellow-400/10">

                        <img
                            src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg"
                            className="w-full h-[350px] object-cover hover:scale-110 transition duration-700"
                        />

                    </div>

                </motion.div>

            </section>

            {/* MAIN CONTACT GRID */}
            <section className="max-w-6xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-10">

                {/* FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-yellow-400/5 border border-yellow-400/10 rounded-[35px] p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(255,204,0,0.05)]"
                >

                    <p className="uppercase tracking-[0.3em] text-yellow-400 text-xs mb-4">
                        Place Your Order
                    </p>

                    <h2 className="text-4xl font-light mb-8">
                        Order In Seconds.
                    </h2>

                    <div className="space-y-4">

                        <input
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-yellow-400/10 focus:border-yellow-400/40 rounded-2xl p-4 outline-none transition-all"
                        />

                        <input
                            name="address"
                            placeholder="Delivery Address"
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-yellow-400/10 focus:border-yellow-400/40 rounded-2xl p-4 outline-none transition-all"
                        />

                        <input
                            name="food"
                            placeholder="Food Order"
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-yellow-400/10 focus:border-yellow-400/40 rounded-2xl p-4 outline-none transition-all"
                        />

                        <textarea
                            name="note"
                            placeholder="Extra Notes"
                            onChange={handleChange}
                            className="w-full h-32 bg-black/50 border border-yellow-400/10 focus:border-yellow-400/40 rounded-2xl p-4 outline-none transition-all"
                        />

                    </div>

                    {/* BUTTONS */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">

                        <motion.button
                            whileHover={{
                                scale: 1.03
                            }}
                            whileTap={{
                                scale: 0.98
                            }}
                            onClick={sendWhatsApp}
                            className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl shadow-yellow-500/20"
                        >

                            <FaWhatsapp />

                            WhatsApp Order

                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.03
                            }}
                            whileTap={{
                                scale: 0.98
                            }}
                            onClick={sendEmail}
                            className="flex items-center justify-center gap-3 border border-yellow-400/20 hover:border-yellow-400/40 bg-white/5 py-4 rounded-2xl transition-all duration-300"
                        >

                            <FaEnvelope />

                            Send Email

                        </motion.button>

                    </div>

                </motion.div>

                {/* CONTACT INFO + MAP */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >

                    {/* MAP */}
                    <div className="overflow-hidden rounded-[35px] border border-yellow-400/10">

                        <iframe
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.867!2d6.9883!3d5.3913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259c7c1a8b9e7%3A0x3b7c0f1a9d2c4f10!2sFederal%20University%20of%20Technology%20Owerri!5e0!3m2!1sen!2sng!4v1"
                            className="w-full h-[350px]"
                            loading="lazy"
                        />

                    </div>

                    {/* INFO */}
                    <div className="bg-yellow-400/5 border border-yellow-400/10 rounded-[35px] p-8 backdrop-blur-xl">

                        <p className="uppercase tracking-[0.3em] text-yellow-400 text-xs mb-4">
                            Contact Information
                        </p>

                        <h2 className="text-3xl font-light mb-8">
                            Reach Out Anytime.
                        </h2>

                        <div className="space-y-6">

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h4 className="text-lg">
                                        Our Location
                                    </h4>

                                    <p className="text-white/50 text-sm mt-1">
                                        Port Harcourt, Nigeria
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                                    <FaClock />
                                </div>

                                <div>
                                    <h4 className="text-lg">
                                        Opening Hours
                                    </h4>

                                    <p className="text-white/50 text-sm mt-1">
                                        Monday - Sunday
                                        <br />
                                        8:00AM - 10:00PM
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </section>

            {/* FLOATING SOCIALS */}
            <FloatingSocials />
            <FloatingFacebook />
            <WhatsAppFloat />

        </div>
    );
}