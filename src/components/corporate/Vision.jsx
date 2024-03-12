import React from "react";
import NavBar from "../common/NavBar";

function Vision() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar />

        <div className="container mx-auto h-[100vh] py-20 flex flex-col gap-6">
          <h2 className="text-white text-4xl">Vizyon</h2>

          <p className="text-white text-xl">
            Vizyonumuz Türkiyemizin gücüne güç katmak, Türkiyemizi Cankuşu gibi
            teknolojiler ile bir adım ileriye taşıyabilmektir. Bunun için bu
            alandaki cevherlerin bilgi ve yeteneklerinin bir araya getirilerek
            kurucumuz tarafından değerlendirilmesiyle ülkemiz lehine kullanmayı
            gayret göstermekteyiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
