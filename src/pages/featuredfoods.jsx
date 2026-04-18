import { motion } from "framer-motion";

export default function FeaturedFoods() {
  return (
    <section className="bg-[#0b0b0d] text-white py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-light tracking-wider"
        >
          Nigerian Cuisine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 mt-3"
        >
          Authentic flavours crafted with tradition and elegance
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto space-y-24">

        {/* JOLLOF */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            src="https://www.preciouscore.com/wp-content/uploads/2021/12/Jollof-Rice-With-Chicken.jpg"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Jollof Rice
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Smoky Nigerian party rice cooked in rich tomato sauce, peppers, and aromatic spices.
            </p>
          </div>
        </motion.div>

        {/* COCONUT RICE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://cheflolaskitchen.com/wp-content/uploads/2015/10/Coconut-Rice-2-scaled.jpg.webp"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Coconut Rice
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Fragrant rice cooked in creamy coconut milk with subtle tropical richness.
            </p>
          </div>
        </motion.div>

        {/* FRIED RICE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRy7YJ9hlRInUY1cRIkvxPZqIwGVQa-VCRg&s"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Fried Rice
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Colourful rice mixed with vegetables, liver, and perfectly balanced seasoning.
            </p>
          </div>
        </motion.div>

        {/* SMALL CHOPS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShTOxNELM7SnBh_RcL8HSqSSMSU0zFbWe-pwr_2kryzw30iGOY"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Small Chops
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A premium mix of puff puff, samosa, spring rolls and party favourites.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWvJkkLAbLdALPxuM5fBranb6rpEE_nzqqw&s"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Egusi Soup
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
            A rich traditional melon seed soup cooked with assorted meats, palm oil, and leafy vegetables.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://i.ytimg.com/vi/6ASUNzB_6Kw/maxresdefault.jpg"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
            Vegetable Soup
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
            A healthy Nigerian soup made with fresh leafy vegetables, palm oil, and assorted meats, rich in flavour and nutrients.
            
            </p>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="https://www.tradr.ng/wp-content/uploads/2022/05/okro-soup.jpeg"
            className="w-full md:w-1/2 h-[280px] object-cover rounded-2xl"
          />

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-light tracking-wide mb-3">
              Okro Soup
            </h3>
            <p className="text-white/60 text-sm leading-relaxed"> 
            A smooth, slightly slimy traditional soup made with fresh okro, palm oil, and assorted meats, served with swallow dishes.
              </p>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-20">
  <p className="text-white/40 mb-4 text-sm">
    Explore more traditional dishes
  </p>

  <button className="px-8 py-3 bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition duration-300 rounded-full tracking-wide">
    View Full Menu
  </button>
</div>
    </section>
  );
}