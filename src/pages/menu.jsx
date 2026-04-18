import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import FloatingSocials from "./floatingsocials";
import FloatingFacebook from "./facebookfloat";
import WhatsAppFloat from "./whatsappfloat";

export default function MenuPage() {

    const orderOnWhatsApp = (foodName) => {
        const phoneNumber = "234XXXXXXXXXX"; // replace with your number
        const message = `Hello, I want to order ${foodName}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const foods = [
        {
            name: "Jollof Rice",
            desc: "Smoky Nigerian party rice cooked in rich tomato sauce and spices.",
            img: "https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken.jpg",
        },
        {
            name: "Coconut Rice",
            desc: "Fragrant rice cooked in creamy coconut milk.",
            img: "https://cheflolaskitchen.com/wp-content/uploads/2015/10/Coconut-Rice-2-scaled.jpg.webp",
        },
        {
            name: "Fried Rice",
            desc: "Vegetable mixed rice with balanced seasoning.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&s",
        },
        {
            name: "Small Chops",
            desc: "A premium mix of puff puff, samosa and spring rolls.",
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShTOxNELM7SnBh_RcL8HSqSSMSU0zFbWe-pwr_2kryzw30iGOY",
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#0b0b0d] text-white overflow-hidden">

            {/* 🌌 GLOW BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse"></div>
            </div>

            {/* HERO */}
            <section className="flex flex-col items-center justify-center text-center py-28 px-6">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-light tracking-widest"
                >
                    <Typewriter
                        words={[
                            "Order your food now",
                            "Fresh Nigerian cuisine",
                            "Delivered with elegance"
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
                    Premium taste, delivered to your door
                </p>

                <button className="mt-8 px-10 py-3 rounded-full border border-white/10
                           bg-white/5 text-white/70
                           hover:bg-white/10 hover:text-white
                           transition shadow-[0_0_25px_rgba(34,197,94,0.12)]">
                    Order Now
                </button>
            </section>

            {/* FOOD SECTION */}
            <div className="max-w-5xl mx-auto px-6 pb-32 space-y-24">

                {foods.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >

                        {/* IMAGE */}
                        <motion.img
                            whileHover={{ scale: 1.03 }}
                            src={item.img}
                            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
                        />

                        {/* TEXT */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-light tracking-wide mb-3">
                                {item.name}
                            </h3>

                            <p className="text-white/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* MATURE ORDER BUTTON */}
                            <button
                                onClick={() => orderOnWhatsApp(item.name)}
                                className="mt-5 px-7 py-2 rounded-full border border-white/10
                           bg-white/5 text-white/70
                           hover:bg-green-500/10 hover:text-white
                           transition duration-300
                           backdrop-blur-md
                           shadow-[0_0_20px_rgba(34,197,94,0.08)]
                           hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]"
                            >
                                Order
                            </button>
                        </div>

                    </motion.div>
                ))}

            </div>

            <FloatingSocials />
            <FloatingFacebook />
            <WhatsAppFloat />


        </div>
    );
}