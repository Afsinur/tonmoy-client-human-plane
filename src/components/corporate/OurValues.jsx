import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";
import { motion } from "framer-motion";

function OurValues() {
  const { setImageSrc, setTitle, setBread } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/values-bg.jpg");
    setTitle("Değerlerimiz");
    setBread("Kurumsal > Değerlerimiz");
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Değerlerimiz</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Kurum içerisinde alınan her kararın ve sergilenen her davranışın,
          Tuipaşın temel değerleri ile uyumlu olabilmesi için çaba göstererek
          Tuipaş çalışma disiplinini korumayı hedeflemektedir.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Şeffaflık</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Faaliyetlerimizde şeffaf olmayı ilke edindik ve bu anlayış ile hareket
          ediyoruz.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">İnovasyon</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Tuipaş olarak özgün fikirlere değer veriyoruz. Fikirleri
          değerlendiriyor, onları en iyi duruma getirmek icin süzgeçten
          geçiriyor ve bu sayede faydalarını ölçüyoruz. Bu şekilde
          sürdürülebilirlik ve rekabette hep bir adım önde olmamızın temelini
          atıyoruz.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Stratejik Anlayış</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Olası sorunları önceden görerek tedbir almak ve bu sorunlara karşı
          sağlam durmak, strateji anlayışımızın öz değerlerini oluşturmaktadır.
        </p>
      </motion.div>
    </>
  );
}

export default OurValues;
