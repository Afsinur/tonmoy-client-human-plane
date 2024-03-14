import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";

function OurFounder() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/about-us-bg.jpg");
    setTitle("Tuğçe ŞAHİN");
  }, []);

  return (
    <>
      <div>
        <div className="our-founder-img relative float-right w-[300px] h-[300px] rounded-full">
          <img
            src="/our-founder.jpg"
            alt="image"
            className="relative w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="grid gap-8">
          <div className="grid gap-20">
            <h2 className="text-white text-7xl">Tuğçe ŞAHİN</h2>

            <p className="text-white text-xl">
              Pedagog ve psikoloji üzerine Yüksekokulunu tamamlamasının ardından
              Hamburg Üniversitesinde Hukuk Fakültesine girmiştir.
              Üniversitedeyken Erasmus programı kapsamında bir sene İstanbul
              Üniversitesinde Hukuk Fakültesinde bulunmuştur. Aynı zamanda bu
              süreçte Türkiye‘de Adalet Bakanlığı Dış İlişkiler ve Avrupa
              Birliği Genel Müdürlüğünde, Almanya’da Ağır Ceza Mahkemesinde,
              Ingiltere’de özel hukuk ağırlıklı avukatlık ofisinde staj
              yapmıştır.
            </p>
          </div>

          <p className="text-white text-xl">
            2019 yılında Almanya‘da Junges Muslimisches Netzwerk topluluğunu
            kurmuştur. Bu toplulukta hat dersi gibi farklı faaliyetler
            düzenlenerek Avrupa‘da yaşayan Müslümanların kimliklerini korumaları
            amaçlanmıştır. Yaklaşık bir sene faaliyet göstermesinin ardından
            pandemi nedeniyle çalışmalar sonlanmıştır. Bunun ardından 6 Şubat
            2023 tarihinde yaşanan ve Türkiye’yi derinden sarsan Kahramanmaraş
            depremi sonucunda Tuipaş çalışmalarına başlamıştır. Özellikle
            beklenen büyük İstanbul depreminin gerçekleşmesi halinde benzer bir
            acının yaşanmaması adına Cankuşu projesini ortaya koymuştur.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurFounder;
