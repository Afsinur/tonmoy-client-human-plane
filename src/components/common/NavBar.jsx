import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const uls = [
    {
      title: "Kurumsal",
      href: "#",
      subTitles: [
        { title: "Hakkımızda", href: "/corporate" },
        { title: "Kurucumuz kimdir?", href: "/corporate/our-founder" },
        {
          title: "Vizyon, Misyon, Değerler ve Amaçlar",
          href: "/corporate/vision",
        },
        { title: "Politikalar", href: "/corporate/our-values" },
        {
          title: "Çalışma Prensiplerimiz",
          href: "/corporate/our-working-principles",
        },
        {
          title: "Hedeflerimiz",
          href: "/corporate/our-goals",
        },
      ],
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
    },
    {
      title: "İletişim",
      href: "/contact-us",
    },
    {
      title: "Medya",
      href: "#",
      subTitles: [{ title: "Basın Yayın", href: "#" }],
    },
    {
      title: "survey",
      href: "/survey",
      reactLink: true,
    },
  ];

  return (
    <div>
      <div className="relative z-[11] bg-gradient-to-b from-black to-transparent h-[67px]">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/logo-white.png" alt="image" className="w-52" />
          </Link>

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
                    className={`transition-all duration-300 block w-full bg-white text-slate-600 fixed left-0 h-0 group-hover:h-[70vh] overflow-hidden`}
                  >
                    <div className="grid grid-cols-3 h-full">
                      <div className="bg-[url(/get-to-know-us-right-img.jpg)] bg-cover bg-center h-full"></div>

                      <div className="col-span-2">
                        <div>
                          <ul className="text-sm">
                            {itm.subTitles.map((subItm, subI) => (
                              <li key={subI}>
                                <Link
                                  to={subItm.href}
                                  className="px-10 py-4 block hover:bg-gray-100 transition-colors"
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
        </div>
      </div>
    </div>
  );
}

export default NavBar;
