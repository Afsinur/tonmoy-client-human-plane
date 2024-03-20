import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import NavBar from "../common/NavBar";

function NavbarWithHero({ page }) {
  const [active, setActive] = useState(false);

  const heroH2 = useRef();
  return (
    <div
      className={`h-[98vh] relative overflow-hidden bg-[url('/slider-2-1.png')] bg-cover bg-center`}
    >
      <NavBar bread={""} />

      {!(page == "more-info") && (
        <div className="container mx-auto flex items-center h-4/6">
          <h2
            ref={heroH2}
            className="duration-300 transition-transform text-white font-semibold leading-none z-[3] relative hero-text-shadow"
          >
            <span className="lg:text-5xl">
              Türkiye{`´`}nin İlk Uçan İnsan Projesi A.Ş
            </span>{" "}
            <br />{" "}
            <span className="lg:text-9xl text-3xl font-bold italic">
              Cankuşu
            </span>
          </h2>
        </div>
      )}

      <Hero heroH2={heroH2} active={active} setActive={setActive} page={page} />
    </div>
  );
}

function Hero({ heroH2, active, setActive, page }) {
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
      {!(page == "more-info") && (
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
      )}

      <div
        ref={slider2}
        className={`z-[8] duration-300 transition-transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[1200px] lg:h-[700px] w-[400px] h-[230px] ${
          !(page == "more-info") ? `translate-x-full` : ``
        }`}
      >
        <img
          src="/slider-2.png"
          alt="image"
          className="w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
        />

        <div
          data-title="3 Türbinden oluşmaktadır"
          className="rounded-full absolute top-[67%] left-[50%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="Ayak Standı"
          className="rounded-full absolute top-[37%] left-[54%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="1,2 Metre Kanat açıklığı"
          className="rounded-full absolute top-[27%] left-[84%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="LED Fonksiyonlu"
          className="rounded-full absolute top-[66%] left-[40%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="Paraşüt içerir"
          className="rounded-full absolute top-[49%] left-[73%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="Parmak İzi Çalışma Sistemi"
          className="rounded-full absolute top-[39%] left-[80%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>
        <div
          data-title="Otomatik Stabilizasyon Teknolojisi"
          className="rounded-full absolute top-[22%] left-[64%] bg-white lg:p-2 p-1 grid place-content-center border lg:border-8 border-2 border-sky-400 pulse-animate"
        ></div>

        {!(page == "more-info") && (
          <Link
            to="/info/slider-2"
            className="flex items-center gap-4 capitalize absolute lg:bottom-0 -bottom-1/2 lg:right-0 right-3 lg:-translate-x-1/2 translate-x-1/4 -translate-y-full z-[7] bg-[#1e73bd] text-white lg:px-8 lg:py-4 px-6 py-2 rounded-xl shadow-lg lg:text-xl text-base mix-blend-difference"
          >
            Daha Fazla Bilgi <FaArrowRight />
          </Link>
        )}

        <div className="container mx-auto h-full">
          <h2 className="relative z-[2] lg:top-1/3 top-0 lg:-translate-y-1/2 lg:text-8xl text-3xl font-semibold hero-text-shadow text-white">
            <span className="lg:text-6xl text-lg">TUIPAS</span> <br /> Cankuşu
          </h2>
        </div>
      </div>

      <div
        className={`bg-gradient-to-t from-[#142143] h-1/3 w-full absolute bottom-0 left-0 ${
          active ? `z-[-1]` : `z-[1]`
        }`}
      ></div>

      {!(page == "more-info") && (
        <div className="absolute bottom-0 left-0 border rounded-full p-5 lg:translate-x-2/3 lg:-translate-y-2/3 z-10 border-slate-50/20">
          <div className="border rounded-full p-5 border-slate-50/50">
            <div className="border rounded-full p-5 border-slate-50/80">
              <div className="p-5 bg-white rounded-full cursor-pointer">
                <FaPlay className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      )}

      {!(page == "more-info") && (
        <div className="absolute lg:bottom-[1rem] bottom-2 lg:right-[unset] right-10 lg:translate-x-[330%] z-10 flex gap-2 items-center">
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
      )}
    </>
  );
}

export default NavbarWithHero;
