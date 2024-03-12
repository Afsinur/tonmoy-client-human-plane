import React from "react";
import NavBar from "../common/NavBar";

function OurFounder() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar />

        <div className="container mx-auto h-[100vh] py-20 flex flex-col gap-6">
          <h2 className="text-white text-4xl">Tuğçe ŞAHİN</h2>

          <p className="text-white text-xl">
            Pedagog ve psikoloji üzerine Yüksekokulunu tamamlamasının ardından
            Hamburg Üniversitesinde Hukuk Fakültesine girmiştir.
            Üniversitedeyken Erasmus programı kapsamında bir sene İstanbul
            Üniversitesinde Hukuk Fakültesinde bulunmuştur. Aynı zamanda bu
            süreçte Türkiye‘de Adalet Bakanlığı Dış İlişkiler ve Avrupa Birliği
            Genel Müdürlüğünde, Almanya’da Ağır Ceza Mahkemesinde, Ingiltere’de
            özel hukuk ağırlıklı avukatlık ofisinde staj yapmıştır.
          </p>
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
    </div>
  );
}

export default OurFounder;
