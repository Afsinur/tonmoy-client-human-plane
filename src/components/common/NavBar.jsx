import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch, IoMdClose } from "react-icons/io";

function NavBar({ bread }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchBox = useRef();
  const searchBoxCard = useRef();

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

  function handleClick(e) {
    setTimeout(() => {
      let sbC = e.target.closest("[data-sub-nav-container]");

      sbC.classList.remove("block");
      sbC.classList.add("hidden");

      setTimeout(() => {
        sbC.classList.add("block");
        sbC.classList.remove("hidden");
      }, 100);
    }, 10);
  }
  function handleSearchOpen() {
    document.body.classList.add("overflow-hidden");

    setIsOpen(true);
    searchBox.current.classList.remove("pointer-events-none", "opacity-0");
    searchBoxCard.current.classList.remove("-translate-y-full");
  }
  return (
    <div>
      <div className="relative z-[35] bg-gradient-to-b from-black to-transparent h-[67px]">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <Link to="/">
            <img src="/logo-white.png" alt="image" className="w-52" />
          </Link>

          <div className="flex gap-2">
            <ul className="flex items-center gap-8 text-white text-base font-semibold">
              {uls.map((itm, i) => (
                <li className="relative group capitalize" key={i}>
                  {itm.reactLink ? (
                    <Link to={itm.href}>{itm.title}</Link>
                  ) : (
                    <Link to={itm.href} className="py-4">
                      {itm.title}
                    </Link>
                  )}

                  {itm.subTitles && (
                    <div
                      style={{ top: `57px` }}
                      data-sub-nav-container=""
                      className={` transition-all duration-300 block w-full bg-white text-slate-600 fixed left-0 h-0 group-hover:h-[52vh] overflow-hidden`}
                    >
                      <div className="grid grid-cols-3 h-full">
                        <div
                          style={{ backgroundImage: `url(${itm.hoverImg})` }}
                          className={`bg-cover bg-center h-full`}
                        ></div>

                        <div className="col-span-2">
                          <div>
                            <ul className="text-sm">
                              {itm.subTitles.map((subItm, subI) => (
                                <li key={subI}>
                                  <Link
                                    onClick={(e) => handleClick(e)}
                                    to={subItm.href}
                                    className="nav-bar-links px-10 py-4 block relative"
                                  >
                                    {subItm.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="border-l border-white pl-2">
              <button
                type="button"
                aria-label="Search"
                className="flex items-center justify-center"
                onClick={() => handleSearchOpen()}
              >
                <IoMdSearch className="text-white text-xl hover:text-[#FFD700] mt-1" />
              </button>

              <SearchBox
                searchBox={searchBox}
                searchBoxCard={searchBoxCard}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>
        </div>

        {bread != "" && (
          <div className="bg-[#FFD700] py-2">
            <div className="container mx-auto">
              <p className="font-semibold text-slate-800">{bread}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function SearchBox({ searchBox, searchBoxCard, isOpen, setIsOpen }) {
  return (
    <div
      ref={searchBox}
      className="fixed top-0 left-0 w-full h-[100vh] bg-[#00000081] pointer-events-none opacity-0"
    >
      <div
        onTransitionEnd={() => {
          if (!isOpen) {
            document.body.classList.remove("overflow-hidden");
            searchBox.current.classList.add("pointer-events-none", "opacity-0");
          }
        }}
        ref={searchBoxCard}
        className="w-full h-[76vh] bg-[#FFD700] rounded-br-3xl rounded-bl-3xl transition-transform -translate-y-full"
      >
        <p className="p-4 flex justify-end">
          <IoMdClose
            className="text-xl cursor-pointer hover:text-slate-400"
            onClick={() => {
              setIsOpen(false);
              searchBoxCard.current.classList.add("-translate-y-full");
            }}
          />
        </p>

        <div className="container mx-auto">
          <form className="w-full grid gap-6">
            <p className="text-slate-600">
              <span className="text-4xl">Bir arama yapın...</span> <br />
            </p>

            <input
              className="px-10 py-6 text-xl bg-transparent border-b border-slate-400 border-b-2 focus:border-slate-600 transition-colors outline-none"
              type="text"
              placeholder="Aramak istediğiniz Kelimeye Girin"
            />

            <div>
              <button
                type="submit"
                className="transition-colors hover:bg-black hover:text-white flex justify-center items-center gap-2 bg-[#2b2b2b] text-slate-200 px-12 py-4 rounded-full font-semibold"
              >
                <IoMdSearch className="text-xl" />
                Ara
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
