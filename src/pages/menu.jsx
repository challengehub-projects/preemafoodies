import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";

import FloatingSocials from "./floatingsocials";
import FloatingFacebook from "./facebookfloat";
import WhatsAppFloat from "./whatsappfloat";

export default function MenuPage() {

  const orderOnWhatsApp = (foodName) => {
    const phoneNumber = "234XXXXXXXXXX";
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
      desc: "Vegetable mixed rice with balanced seasoning and rich aroma.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&s",
    },
    {
      name: "Small Chops",
      desc: "A premium mix of puff puff, samosa and spring rolls.",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShTOxNELM7SnBh_RcL8HSqSSMSU0zFbWe-pwr_2kryzw30iGOY",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-200px] right-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full animate-pulse" />
      </div>

      {/* ================= HERO ================= */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">

        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
          <FaUtensils className="text-yellow-400" />
          <span className="text-sm text-gray-300">
            Premium Nigerian Menu
          </span>
        </div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black tracking-wide"
        >
          <Typewriter
            words={[
              "Fresh meals cooked daily",
              "Authentic Nigerian taste",
              "Delivered hot & fresh"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h1>

        <p className="text-gray-400 mt-4 text-sm max-w-md">
          Premium dining experience brought straight to your doorstep.
        </p>

        <a href="#menu">
          <button className="mt-8 px-10 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition flex items-center gap-2">
            <FaShoppingCart /> Explore Menu
          </button>
        </a>

      </section>

      {/* ================= FOOD SECTION ================= */}
      <div id="menu" className="max-w-6xl mx-auto px-6 pb-32 space-y-24">

        {foods.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-full md:w-1/2 rounded-3xl overflow-hidden border border-white/10 shadow-lg"
            >
              <img
                src={item.img}
                className="w-full h-[300px] object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">

              <h3 className="text-3xl font-bold text-yellow-400 mb-3">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* ORDER BUTTON */}
              <button
                onClick={() => orderOnWhatsApp(item.name)}
                className="mt-6 px-7 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-200
                hover:bg-yellow-500/10 hover:text-white transition backdrop-blur-md"
              >
                Order via WhatsApp
              </button>

            </div>
          </motion.div>
        ))}

      </div>

      {/* FLOATING */}
      <FloatingSocials />
      <FloatingFacebook />
      <WhatsAppFloat />

    </div>
  );
}