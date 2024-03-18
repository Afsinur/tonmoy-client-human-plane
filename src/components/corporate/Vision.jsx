import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";
import { motion } from "framer-motion";

function Vision() {
  const { setImageSrc, setTitle, setBread } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/vision-bg.jpg");
    setTitle("Vizyon & Hedeflerimiz");
    setBread("Kurumsal > Vizyon & Hedeflerimiz");
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
              <h2 className="text-slate-300 text-4xl">Vizyon & Hedeflerimiz</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial state of the element
              whileInView={{ opacity: 1, y: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <p className="text-slate-400 text-xl">
                Vizyonumuz Türkiyemizin gücüne güç katmak, Türkiyemizi Cankuşu
                gibi teknolojiler ile bir adım ileriye taşıyabilmektir. Bunun
                için bu alandaki cevherlerin bilgi ve yeteneklerinin bir araya
                getirilerek kurucumuz tarafından değerlendirilmesiyle ülkemiz
                lehine kullanmayı gayret göstermekteyiz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial state of the element
              whileInView={{ opacity: 1, y: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <p className="text-slate-400 text-xl">
                Tuipaş kurumu olarak gelecek potansiyeli yüksek ürünlerin ülke
                içinde üretim kapasitesinin geliştirilmesini hedefliyoruz.
                Bağımlılığın azaltılması anlamında istikrarlı bir şekilde
                ilerlemeye çaba gösteriyor ve rekabetin yoğunlaşmasıyla Türkiye
                ekonomisine katkı sağlamaya çalışıyoruz.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} // Initial state of the element
            whileInView={{ opacity: 1, scale: 1 }} // Animation state
            transition={{ type: "spring", duration: 0.5, delay: 0.2 }} // Transition duration
            viewport={{ once: true }}
          >
            <div className="grid place-content-center w-full h-full justify-items-center">
              <img
                src="/vision-and-goal-right.jpg"
                alt="image"
                className="relative w-3/4 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Vision;
