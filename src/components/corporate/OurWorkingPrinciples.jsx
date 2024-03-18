import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";
import { motion } from "framer-motion";

function OurWorkingPrinciples() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/working-principles-bg.jpg");
    setTitle("Çalışma Prensiplerimiz");
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Çalışma Prensiplerimiz</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Hedeflerimiz doğrultusunda Tuipaş olarak çalışmalarımızdan doğan
          sorumluluğu, tüm çabamızla üstlenmeye ve ilerlemeye gayret
          gösteriyoruz.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Disiplin</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Çaba ve azim ne kadar çok olursa olsun, disiplinin olmadığı bir yerde,
          bir adım ilerlemek oldukça zordur. Ülkemizi daha iyi yarınlara
          taşıyabilmek için çalışma alanlarımızı genişletiyor ve süreçleri
          yakından takip ediyoruz. Başarının disiplinden doğduğuna inananarak bu
          doğrultuda ilerlemeye gayret gösteriyoruz. Bu nedenle çalışma
          prensiplerimizden biri de; faaliyetlerimizi yasal mevzuat
          doğrultusunda hazırlanan sözleşmeler çerçevesinde yürütmektir.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Kişisel Gelişim ve Özgüven</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Kişisel yeteneklerimizin en üst sınırına kadar kendimizi gelirştirmeyi
          hakkımız ve görevimiz olarak biliriz. Bu anlamda kendimize güvenmesek
          şayet içimizdeki hazineyi sergileyemeyiz ve olduğumuz yerde kalırız.
          Joseph Camphellin de dediği gibi aradığımız hazine, belki de girmekten
          korktuğumuz mağarada saklıdır. Biz Tuipaş ailesi olarak içimizdeki
          hazineyi ortaya çıkarmayı ve devletimizin hizmetine sunmayı
          hedeflemekteyiz.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <h2 className="text-slate-300 text-4xl">Sorumluluk Sahibi</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial state of the element
        whileInView={{ opacity: 1, y: 0 }} // Animation state
        transition={{ type: "spring", duration: 0.5 }} // Transition duration
        viewport={{ once: true }}
      >
        <p className="text-slate-400 text-xl">
          Tarihimize sahip çıkmak ve geleceğimizin temelini kurmak, her birimize
          düşen bir görev ve aynı zamanda haktır. Bu görevi üstlenmek ve
          hakkımızdan istifade etmek, bugünün topraklarını inşa eden aziz
          milletimize karşı duydugumuz ilelebet borcumuzdur. Bizi bir kılan bu
          zihniyettir.{" "}
        </p>
      </motion.div>
    </>
  );
}

export default OurWorkingPrinciples;
