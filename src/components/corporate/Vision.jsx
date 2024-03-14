import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";

function Vision() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/about-us-bg.jpg");
    setTitle("Vizyon");
  }, []);

  return (
    <>
      <h2 className="text-white text-4xl">Vizyon</h2>

      <p className="text-white text-xl">
        Vizyonumuz Türkiyemizin gücüne güç katmak, Türkiyemizi Cankuşu gibi
        teknolojiler ile bir adım ileriye taşıyabilmektir. Bunun için bu
        alandaki cevherlerin bilgi ve yeteneklerinin bir araya getirilerek
        kurucumuz tarafından değerlendirilmesiyle ülkemiz lehine kullanmayı
        gayret göstermekteyiz.
      </p>
    </>
  );
}

export default Vision;
