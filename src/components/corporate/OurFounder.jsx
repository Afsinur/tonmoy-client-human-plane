import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";
import { motion } from "framer-motion";

function OurFounder() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/our-founder-bg.jpg");
    setTitle("Tuğçe");
  }, []);

  return (
    <>
      <div>
        <div className="grid gap-4 grid-cols-2">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial state of the element
              whileInView={{ opacity: 1, y: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <h2 className="text-slate-300 text-7xl text-nowrap">
                Tuğçe ŞAHİN
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial state of the element
              whileInView={{ opacity: 1, y: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <p className="text-slate-400 text-xl">
                Pedagog ve psikoloji üzerine Yüksekokulunu tamamlamasının
                ardından Hamburg Üniversitesinde Hukuk Fakültesine girmiştir.
                Üniversitedeyken Erasmus programı kapsamında bir sene İstanbul
                Üniversitesinde Hukuk Fakültesinde bulunmuştur. Aynı zamanda bu
                süreçte Türkiye‘de Adalet Bakanlığı Dış İlişkiler ve Avrupa
                Birliği Genel Müdürlüğünde, Almanya’da Ağır Ceza Mahkemesinde,
                Ingiltere’de özel hukuk ağırlıklı avukatlık ofisinde staj
                yapmıştır.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial state of the element
              whileInView={{ opacity: 1, y: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <p className="text-slate-400 text-xl">
                2019 yılında Almanya‘da Junges Muslimisches Netzwerk topluluğunu
                kurmuştur. Bu toplulukta hat dersi gibi farklı faaliyetler
                düzenlenerek Avrupa‘da yaşayan Müslümanların kimliklerini
                korumaları amaçlanmıştır. Yaklaşık bir sene faaliyet
                göstermesinin ardından pandemi nedeniyle çalışmalar
                sonlanmıştır. Bunun ardından 6 Şubat 2023 tarihinde yaşanan ve
                Türkiye’yi derinden sarsan Kahramanmaraş depremi sonucunda
                Tuipaş çalışmalarına başlamıştır. Özellikle beklenen büyük
                İstanbul depreminin gerçekleşmesi halinde benzer bir acının
                yaşanmaması adına Cankuşu projesini ortaya koymuştur.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} // Initial state of the element
              whileInView={{ opacity: 1, scale: 1 }} // Animation state
              transition={{ type: "spring", duration: 0.5, delay: 0.2 }} // Transition duration
              viewport={{ once: true }}
            >
              <img
                src="/our-founder.jpg"
                alt="image"
                className="relative w-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurFounder;
