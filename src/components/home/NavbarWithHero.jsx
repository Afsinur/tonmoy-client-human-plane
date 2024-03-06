import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

function NavbarWithHero() {
  const [active, setActive] = useState(false);

  const heroH2 = useRef();
  return (
    <div
      className={`h-[98vh] relative bg-gradient-to-b from-black via-transparent to-transparent overflow-hidden bg-[url(/slider-2-1.png)] bg-cover bg-center`}
    >
      <div className="border-b py-5 relative z-[2] bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#">
            <img src="/logo-white.png" alt="image" className="w-52" />
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

      <div className="container mx-auto flex items-center h-4/6">
        <h2
          ref={heroH2}
          className="duration-300 transition-transform text-white font-semibold leading-none z-[3] relative drop-shadow-xl"
        >
          <span className="text-5xl">
            Türkiye{`´`}nin İlk Uçan İnsan Projesi A.Ş
          </span>{" "}
          <br /> <span className="text-[10rem] font-bold italic">Cankuşu</span>
        </h2>
      </div>

      <Hero heroH2={heroH2} active={active} setActive={setActive} />
    </div>
  );
}

function Hero({ heroH2, active, setActive }) {
  const video = useRef();
  const slider2 = useRef();

  function handleSlideLeft() {
    video.current.classList.remove("-translate-x-full");
    heroH2.current.classList.remove("-translate-x-[400%]");

    slider2.current.classList.add("translate-x-full");
    setActive(false);
  }
  function handleSlideRight() {
    video.current.classList.add("-translate-x-full");
    heroH2.current.classList.add("-translate-x-[400%]");

    slider2.current.classList.remove("translate-x-full");
    setActive(true);
  }

  return (
    <>
      <video
        ref={video}
        autoPlay
        muted
        loop
        className="duration-300 transition-transform absolute top-0 left-0 min-w-full min-h-full z-[1] object-cover"
      >
        <source src="/jetcraft-3d-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={slider2}
        className="duration-300 transition-transform absolute top-0 left-0 w-full h-full translate-x-full"
      >
        <img
          src="/slider-2.png"
          alt="image"
          className="h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
        />

        <div className="container mx-auto h-full">
          <h2 className="relative z-[2] top-1/3 -translate-y-1/2 text-8xl font-semibold drop-shadow-xl text-white">
            <span className="text-6xl">TUIPAS</span> <br /> Cankuşu
          </h2>
        </div>
      </div>

      <div className="bg-gradient-to-t from-[#142143] h-1/3 w-full absolute bottom-0 left-0 z-[3]"></div>

      <div className="absolute bottom-0 left-0 border rounded-full p-5 translate-x-2/3 -translate-y-2/3 z-10 border-slate-50/20">
        <div className="border rounded-full p-5 border-slate-50/50">
          <div className="border rounded-full p-5 border-slate-50/80">
            <div className="p-5 bg-white rounded-full cursor-pointer">
              <FaPlay className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[1rem] left-0 translate-x-[330%] z-10 flex gap-2 items-center">
        <div
          onClick={() => handleSlideLeft()}
          className={`cursor-pointer w-6 h-6 ${
            !active ? `bg-blue-300` : `bg-slate-300`
          } shadow-md rounded-full grid place-content-center`}
        >
          {!active && (
            <div className="w-3 h-3 bg-white shadow-md rounded-full grid place-content-center"></div>
          )}
        </div>

        <div
          className={`cursor-pointer w-6 h-6 ${
            active ? `bg-blue-300` : `bg-slate-300`
          } shadow-md rounded-full grid place-content-center`}
          onClick={() => handleSlideRight()}
        >
          {active && (
            <div className="w-3 h-3 bg-white shadow-md rounded-full grid place-content-center"></div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavbarWithHero;
