import React, { useEffect } from "react";
import NavBar from "../common/NavBar";
import { srcChangeFn } from "./Corporate";

function OurGoals() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/goals-bg.jpg");
    setTitle("Hedeflerimiz");
  }, []);

  return (
    <>
      <h2 className="text-slate-300 text-4xl">Hedeflerimiz</h2>

      <p className="text-slate-400 text-xl">
        Tuipaş kurumu olarak gelecek potansiyeli yüksek ürünlerin ülke içinde
        üretim kapasitesinin geliştirilmesini hedefliyoruz. Bağımlılığın
        azaltılması anlamında istikrarlı bir şekilde ilerlemeye çaba gösteriyor
        ve rekabetin yoğunlaşmasıyla Türkiye ekonomisine katkı sağlamaya
        çalışıyoruz.
      </p>
    </>
  );
}

export default OurGoals;
