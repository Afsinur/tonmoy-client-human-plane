import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const uls = [
    {
      title: "Kurumsal",
      href: "#",
      subTitles: [
        { title: "Hakkımızda", href: "/corporate" },
        { title: "Kurucumuz kimdir?", href: "/corporate/our-founder" },
        {
          title: "Vizyon & Hedeflerimiz",
          href: "/corporate/vision",
        },
        { title: "Değerlerimiz", href: "/corporate/our-values" },
        {
          title: "Çalışma Prensiplerimiz",
          href: "/corporate/our-working-principles",
        },
      ],
      hoverImg: "/corporate-hover-left.jpg",
    },
    {
      title: "Faaliyet Alanları",
      href: "#",
    },
    {
      title: "Ar-Ge ve İnovasyon",
      href: "#",
    },
    {
      title: "Sürdürülebilirlik",
      href: "#",
    },
    {
      title: "Yatırımcı İlişkiler",
      href: "#",
    },
    {
      title: "Kariyer",
      href: "#",
      subTitles: [
        { title: "TUİPAŞTA Seni Neler Bekliyor?", href: "#" },
        { title: "İşe alım Kriterler", href: "#" },
        { title: "Hemen Başvur", href: "#" },
      ],
      hoverImg: "/career-hover-left.jpg",
    },
    {
      title: "İletişim",
      href: "/contact-us",
    },
    {
      title: "Medya",
      href: "#",
      subTitles: [{ title: "Basın Yayın", href: "/media/home" }],
      hoverImg: "/news-hover-left.jpg",
    },
    {
      title: "survey",
      href: "/survey",
      reactLink: true,
    },
  ];

  return (
    <div className="bg-[#142143] text-white py-20 md:px-0 px-2">
      <div className="container mx-auto grid gap-8">
        <div
          className={`grid lg:gap-4 md:gap-10 gap-12 lg:grid-cols-${
            uls.filter((ul) => ul.subTitles).length
          } md:grid-cols-3 grid-cols-1 lg:justify-items-start justify-items-center`}
        >
          {uls &&
            uls
              .filter((ul) => ul.subTitles)
              .map((ul, i) => (
                <div className={`flex flex-col gap-6`} key={i}>
                  {ul.subTitles && (
                    <>
                      <Link
                        to={ul.href}
                        className="text-sm text-slate-100 font-semibold uppercase"
                      >
                        {ul.title}
                      </Link>

                      <ul className="text-sm text-slate-400 font-light grid gap-2">
                        {ul.subTitles.map((subUl, subI) => (
                          <li key={subI}>
                            <Link
                              to={subUl.href}
                              className="hover:text-slate-500"
                            >
                              {subUl.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          <div className="flex md:flex-row flex-col md:gap-4 gap-10 items-center md:justify-start justify-center">
            <div>
              <img src="/footer/tskgv.png" alt="image" />
            </div>
            <div className="text-sm text-slate-500 md:text-left text-center">
              TUIPAS, bir kuruluştur.
              <br />
              TUIPAS, Türk Silahlı Kuvvetleri Vakfı'nın bir kuruluşudur.
            </div>
          </div>

          <div className="grid md:gap-4 gap-10 col-span-2">
            <h2 className="text-center text-slate-200 uppercase font-medium">
              ŞİRKETLERİMİZ
            </h2>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:gap-4 gap-10 items-center md:justify-items-start justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itm, i) => (
                <div
                  key={i}
                  className={`w-full h-[24px] bg-center bg-contain bg-no-repeat`}
                  style={{
                    backgroundImage: `url(/footer/subsidiaries/${itm}.svg)`,
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div className="grid md:gap-4 gap-10 lg:justify-items-start justify-items-center">
            <h2 className="md:text-center text-left text-slate-200 uppercase font-medium">
              BİZİ TAKİP EDİN
            </h2>

            <div>
              <ul className="flex items-center md:justify-center justify-start gap-8">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tuipas_?igsh=bmozdGZnZjJlazdr">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-1 border-slate-700" />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center justify-items-center">
          <div className="flex md:justify-start justify-center">
            <img src="/logo-white.png" alt="image" className="w-3/4" />
          </div>

          <p className="text-slate-500 capitalize font-light text-sm text-center">
            @copyright 2024 TUIPAS.
          </p>

          <div>
            <div className="flex gap-4 items-center">
              <div>
                <img src="/footer/hk_k.svg" alt="image" />
              </div>
              <div className="text-sm text-slate-500">
                Bu web sitesi tarafından korunmaktadır <br />
                <Link to="/">TUIPAS</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
