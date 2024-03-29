import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";
import { motion } from "framer-motion";

function AboutUs() {
  const { setImageSrc, setTitle, setBread } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/about-us-bg.jpg");
    setTitle("Hakkımızda");
    setBread("Kurumsal > Hakkımızda");
  }, []);
  return (
    <>
      <div className="grid lg:gap-4 lg:grid-cols-2 lg:p-0 p-2 grid-cols-1 gap-10 justify-items-center">
        <div className="lg:order-1 order-2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Initial state of the element
            whileInView={{ opacity: 1, y: 0 }} // Animation state
            transition={{ type: "spring", duration: 0.5 }} // Transition duration
            viewport={{ once: true }}
          >
            <h2 className="text-slate-300 text-4xl">Hakkımızda</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }} // Initial state of the element
            whileInView={{ opacity: 1, y: 0 }} // Animation state
            transition={{ type: "spring", duration: 0.5 }} // Transition duration
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-xl">
              Tuipaş, mühendisler eşliğinde teknoloji ağırlıklı çalışmalar
              sürdürmektedir. İcatları ile Türkiye ekonomisine katkı sağlamakla
              beraber uluslararası pazarda yer almayı hedeflemektedir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }} // Initial state of the element
            whileInView={{ opacity: 1, y: 0 }} // Animation state
            transition={{ type: "spring", duration: 0.5 }} // Transition duration
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-xl">
              Türkiye´nin bağımsızlaşması adına yerli ve milli projeler üzerinde
              çalışan Tuipaş, Türkiye´nin ilk Uçan İnsan Projesini hayata
              geçirmektedir. Geniş çaplı Ar-Ge çalışmaları sonucunda Türk
              milletine bu önemli projeyi sunmaktan onur duyuyoruz.
              Çalışmalarımızın odak noktasındaki Türkiye´nin ilk uçan insan
              icadı Cankuşu, Türk Savunma Sanayimizin hizmetine sunmayı
              hedefliyoruz. Özellikle engebeli arazilere sahip ve deprem
              kuşağında bulunan ülkemizde acil yardım ve kurtarma çalışmaları
              için kullanımı öngörülen Cankuşu, aynı zamanda sağlık sektöründe
              de kullanabilmektedir.
            </p>
          </motion.div>
        </div>

        <div className="lg:order-2 order-1 h-full grid place-content-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} // Initial state of the element
            whileInView={{ opacity: 1, scale: 1 }} // Animation state
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }} // Transition duration
            viewport={{ once: true }}
          >
            <div className="grid place-content-center w-full h-full justify-items-center">
              <img
                src="/about-us-right.jpg"
                alt="image"
                className="w-3/4 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
