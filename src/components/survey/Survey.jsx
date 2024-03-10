import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../home/Footer";

function Survey() {
  return (
    <div className="bg-[#142143]">
      <NavBar />

      <div className="container mx-auto py-20 ">
        <h1 className="capitalize font-semibold text-6xl text-slate-300">
          Anket- Sonuçları
        </h1>

        <div className="grid gap-10 justify-items-center py-20">
          {[
            1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          ].map((itm, i) => (
            <img
              src={`/charts/${itm}.png`}
              alt="image"
              key={i}
              className="w-4/5"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Survey;
