import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
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
        const phone = "234XXXXXXXXXX"; // replace

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
        <div className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden">

            {/* 🌌 BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
            </div>

            {/* HERO WITH TYPING */}
            <section className="text-center py-24 px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-light tracking-widest"
                >
                    <Typewriter
                        words={[
                            "PreeaFoodies Order System",
                            "Fresh Nigerian Cuisine",
                            "Delivered With Elegance"
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </motion.h1>

                <p className="text-white/50 mt-4 text-sm">
                    Premium meals delivered fast and fresh
                </p>

            </section>

            <section className="text-center px-6 py-16 max-w-4xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-light tracking-widest"
                >
                    Why PreeaFoodies?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/60 mt-4 text-sm leading-relaxed"
                >
                    PreeaFoodies is more than just food delivery — it is comfort, relaxation, and enjoyment in every bite.
                    We bring you freshly prepared Nigerian meals so you can focus on living your life while we handle your hunger.
                    From students to busy professionals, we make eating simple, fast, and enjoyable.
                </motion.p>

            </section>

            <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">

                {/* SECTION 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-center gap-10"
                >
                    <img
                        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                        className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
                    />

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-light">Relax & Enjoy</h3>
                        <p className="text-white/60 text-sm mt-3">
                            Forget the stress of cooking. PreeaFoodies lets you relax while we prepare
                            and deliver fresh, hot meals straight to your doorstep.
                        </p>
                    </div>
                </motion.div>

                {/* SECTION 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row-reverse items-center gap-10"
                >
                    <img
                        src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg"
                        className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
                    />

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-light">Fast Delivery</h3>
                        <p className="text-white/60 text-sm mt-3">
                            Our delivery system is built for speed and efficiency — ensuring your food
                            gets to you fresh, hot, and right on time.
                        </p>
                    </div>
                </motion.div>

                {/* SECTION 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-center gap-10"
                >
                    <img
                        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                        className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
                    />

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-light">Premium Taste</h3>
                        <p className="text-white/60 text-sm mt-3">
                            Every meal is crafted with authentic Nigerian ingredients, rich spices,
                            and a touch of home — giving you unforgettable taste every time.
                        </p>
                    </div>
                </motion.div>

            </section>

            {/* MAIN GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-24">

                {/* 🧾 ORDER FORM */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.05)]"
                >

                    <h2 className="text-xl mb-4">Place Your Order</h2>

                    <input
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        className="w-full mb-3 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-green-400 outline-none"
                    />

                    <input
                        name="address"
                        placeholder="Delivery Address"
                        onChange={handleChange}
                        className="w-full mb-3 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-green-400 outline-none"
                    />

                    <input
                        name="food"
                        placeholder="Food e.g Jollof Rice + Chicken"
                        onChange={handleChange}
                        className="w-full mb-3 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-green-400 outline-none"
                    />

                    <textarea
                        name="note"
                        placeholder="Extra notes (optional)"
                        onChange={handleChange}
                        className="w-full h-24 p-3 rounded-lg bg-black/40 border border-white/10 focus:border-green-400 outline-none"
                    />

                    {/* BUTTONS */}
                    <div className="flex gap-3 mt-5">

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={sendWhatsApp}
                            className="flex-1 bg-green-500 hover:bg-green-600 py-2 rounded-full transition shadow-lg"
                        >
                            WhatsApp Order
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={sendEmail}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-full transition shadow-lg"
                        >
                            Email
                        </motion.button>

                    </div>

                </motion.div>

                {/* 🗺️ GOOGLE MAPS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                >

                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.867!2d6.9883!3d5.3913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259c7c1a8b9e7%3A0x3b7c0f1a9d2c4f10!2sFederal%20University%20of%20Technology%20Owerri!5e0!3m2!1sen!2sng!4v1"
                        className="w-full h-[420px]"
                        loading="lazy"
                    />

                    <div className="p-4 bg-white/5">
                        <h3 className="text-lg">Our Location</h3>
                        <p className="text-white/50 text-sm">
                            PreeaFoodies Kitchen — Port Harcourt, Nigeria
                        </p>
                    </div>

                </motion.div>

            </div>

            <FloatingSocials />
            <FloatingFacebook />
            <WhatsAppFloat />
        </div>
    );
}