import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Menu", "About", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50
      bg-black/30 backdrop-blur-xl border-b border-yellow-400/10"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">

        {/* BRAND */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-yellow-400 rounded-full"></div>

          <h1 className="text-white tracking-[0.35em] font-light text-lg md:text-xl
          font-[Poppins]">
            PREEAFOODIES
          </h1>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-12 text-sm text-white/70 items-center font-[Inter]">

          {links.map((label) => (
            <NavLink key={label} label={label} />
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-xl border-t border-yellow-400/10"
          >
            <div className="flex flex-col items-center gap-8 py-10 text-white/80">

              {links.map((label, i) => (
                <motion.a
                  key={label}
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-light tracking-widest relative group"
                >
                  <span className="group-hover:text-yellow-400 transition">
                    {label}
                  </span>

                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

/* DESKTOP LINK */
function NavLink({ label }) {

  const path =
    label === "Home"
      ? "/"
      : `/${label.toLowerCase()}`;

  return (
    <a
      href={path}
      className="relative group px-2 py-1 font-light tracking-widest"
    >
      {/* TEXT */}
      <span className="transition duration-300 group-hover:text-yellow-400">
        {label}
      </span>

      {/* UNDERLINE */}
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>

      {/* DOT */}
      <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition duration-300"></span>
    </a>
  );
}