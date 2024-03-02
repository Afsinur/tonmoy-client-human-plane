import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

function NavbarWithHero() {
  return (
    <div className="bg-[linear-gradient(rgba(18,56,33,0.72),rgba(18,56,33,0.72)),url(./hero-bg.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="border-b py-5">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#">
            <img src="./logo-white.png" alt="image" className="w-52" />
          </a>

          <ul className="flex items-center gap-16 text-white text-lg font-semibold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>

          <div className="pl-12 border-l flex items-center gap-8 text-white text-lg">
            <FaPhoneAlt />
            <IoSearch />
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-40">
        <div className="h-[80vh] text-center grid place-content-center relative">
          <div className="grid gap-10 z-20 relative">
            <p className="capitalize font-semibold text-white">
              Save time and fly with comfort
            </p>
            <h2 className="text-7xl font-bold text-white">
              Luxury Jet <br /> Flights
            </h2>

            <div className="flex items-center gap-4">
              <button className="uppercase px-16 py-4 rounded-full font-semibold bg-[#a79132] text-white hover:bg-white hover:text-[#a79132] transition-colors">
                book now
              </button>
              <button className="uppercase px-16 py-4 rounded-full font-semibold text-[#123821] bg-white hover:bg-[#a79132] hover:text-white">
                read more
              </button>
            </div>
          </div>

          <motion.div
            initial={{ translateY: 0 }}
            animate={{ translateY: [100, 0, 100] }}
            transition={{
              duration: 4, // Duration of each segment of the animation
              repeat: Infinity, // Repeat infinitely
              ease: "easeIn", // Easing function (smooth in-out)
              delay: 0.5, // Delay before animation starts
            }}
          >
            <img
              src="./float-hero-img.png"
              alt="image"
              className="z-10 absolute bottom-0 left-1/2 w-full scale-[2] -translate-x-1/2 translate-y-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWithHero;
