import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const uls = [
    {
      title: "Kurumsal",
      href: "#",
      subTitles: [
        { title: "Hakkımızda", href: "#" },
        { title: "Kurucumuz kimdir?", href: "#" },
        { title: "Vizyon, Misyon, Değerler ve Amaçlar", href: "#" },
        { title: "Politikalar", href: "#" },
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
      href: "#",
    },
    {
      title: "Medya",
      href: "#",
      subTitles: [{ title: "Basın Yayın", href: "#" }],
    },
  ];
  return (
    <div>
      <div className="relative z-[5] bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src="/logo-white.png" alt="image" className="w-52" />
          </Link>

          <ul className="flex items-center gap-8 text-white text-base font-semibold">
            {uls.map((itm, i) => (
              <li className="relative group" key={i}>
                <a href={itm.href} className="py-4">
                  {itm.title}
                </a>

                {itm.subTitles && (
                  <div className="transition-all duration-300 group-hover:opacity-100 block min-w-[300px] bg-white text-slate-600 absolute top-[35px] right-0 opacity-0 scale-y-0 group-hover:scale-y-100 origin-top">
                    <div className="grid grid-cols-2">
                      <div className="bg-[url(/get-to-know-us-right-img.jpg)] bg-cover bg-center"></div>

                      <div>
                        <div className="p-4">
                          <ul className="grid gap-4 text-sm">
                            {itm.subTitles.map((subItm, subI) => (
                              <li key={subI}>
                                <a href={subItm.href}>{subItm.title}</a>
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
