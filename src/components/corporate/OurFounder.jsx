import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";

function OurFounder() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/our-founder-bg.jpg");
    setTitle("Tuğçe");
  }, []);

  return (
    <>
      <div>
        <div className="grid">
          <div className="flex gap-8">
            <div className="our-founder-img relative w-[300px] rounded-full -translate-y-1/2">
              <img
                src="/our-founder.jpg"
                alt="image"
                className="relative w-full h-full rounded-full object-cover"
              />
            </div>
            <h2 className="text-slate-300 text-7xl text-nowrap">Tuğçe ŞAHİN</h2>
          </div>

          <div className="grid gap-4 -translate-y-1/4">
            <p className="text-slate-400 text-xl">
              Pedagog ve psikoloji üzerine Yüksekokulunu tamamlamasının ardından
              Hamburg Üniversitesinde Hukuk Fakültesine girmiştir.
              Üniversitedeyken Erasmus programı kapsamında bir sene İstanbul
              Üniversitesinde Hukuk Fakültesinde bulunmuştur. Aynı zamanda bu
              süreçte Türkiye‘de Adalet Bakanlığı Dış İlişkiler ve Avrupa
              Birliği Genel Müdürlüğünde, Almanya’da Ağır Ceza Mahkemesinde,
              Ingiltere’de özel hukuk ağırlıklı avukatlık ofisinde staj
              yapmıştır.
            </p>

            <p className="text-slate-400 text-xl">
              2019 yılında Almanya‘da Junges Muslimisches Netzwerk topluluğunu
              kurmuştur. Bu toplulukta hat dersi gibi farklı faaliyetler
              düzenlenerek Avrupa‘da yaşayan Müslümanların kimliklerini
              korumaları amaçlanmıştır. Yaklaşık bir sene faaliyet göstermesinin
              ardından pandemi nedeniyle çalışmalar sonlanmıştır. Bunun ardından
              6 Şubat 2023 tarihinde yaşanan ve Türkiye’yi derinden sarsan
              Kahramanmaraş depremi sonucunda Tuipaş çalışmalarına başlamıştır.
              Özellikle beklenen büyük İstanbul depreminin gerçekleşmesi halinde
              benzer bir acının yaşanmaması adına Cankuşu projesini ortaya
              koymuştur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFounder;
