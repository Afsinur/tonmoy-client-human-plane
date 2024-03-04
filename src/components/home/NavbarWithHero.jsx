import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

function NavbarWithHero() {
  return (
    <div className="h-[115vh] relative bg-gradient-to-b from-black  overflow-hidden">
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

      <div className="container mx-auto py-20">
        <h2 className="text-white font-semibold">
          <span className="text-2xl">
            Türkiye{`´`}nin İlk Uçan İnsan Projesi A.Ş
          </span>{" "}
          <br /> <span className="text-7xl font-bold italic">Cankuşu</span>
        </h2>
      </div>

      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 min-w-full min-h-full z-[-1] object-cover"
      >
        <source src="./jetcraft-3d-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bg-gradient-to-t from-[#142143] h-1/3 w-full absolute bottom-0 left-0"></div>

      <div className="absolute bottom-0 left-0 border rounded-full p-5 translate-x-2/3 -translate-y-2/3 z-10 border-slate-50/20">
        <div className="border rounded-full p-5 border-slate-50/50">
          <div className="border rounded-full p-5 border-slate-50/80">
            <div className="p-5 bg-white rounded-full cursor-pointer">
              <FaPlay className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 translate-x-[330%] z-10 flex gap-2 items-center">
        <div className="cursor-pointer w-6 h-6 bg-blue-300 shadow-md rounded-full grid place-content-center">
          <div className="w-3 h-3 bg-white shadow-md rounded-full grid place-content-center"></div>
        </div>
        <div className="cursor-pointer w-6 h-6 bg-slate-300 shadow-md rounded-full"></div>
      </div>
    </>
  );
}

export default NavbarWithHero;
