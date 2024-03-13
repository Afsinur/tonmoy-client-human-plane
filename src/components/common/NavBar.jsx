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
      <div className="relative z-[5] bg-gradient-to-b from-black to-transparent">
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
                  <div className="transition-all duration-300 group-hover:opacity-100 block min-w-[300px] bg-white text-slate-600 absolute top-[35px] right-0 opacity-0 scale-y-0 group-hover:scale-y-100 origin-top">
                    <div className="grid grid-cols-2">
                      <div className="bg-[url(/get-to-know-us-right-img.jpg)] bg-cover bg-center"></div>

                      <div>
                        <div className="p-4">
                          <ul className="grid gap-4 text-sm">
                            {itm.subTitles.map((subItm, subI) => (
                              <li key={subI}>
                                <Link to={subItm.href}>{subItm.title}</Link>
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
