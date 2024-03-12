import React from "react";
import NavBar from "../common/NavBar";

function OurGoals() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar />

        <div className="container mx-auto h-[100vh] py-20 flex flex-col gap-6">
          <h2 className="text-white text-4xl">Hedeflerimiz</h2>

          <p className="text-white text-xl">
            Tuipaş kurumu olarak gelecek potansiyeli yüksek ürünlerin ülke
            içinde üretim kapasitesinin geliştirilmesini hedefliyoruz.
            Bağımlılığın azaltılması anlamında istikrarlı bir şekilde ilerlemeye
            çaba gösteriyor ve rekabetin yoğunlaşmasıyla Türkiye ekonomisine
            katkı sağlamaya çalışıyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurGoals;