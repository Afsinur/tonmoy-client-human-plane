import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../home/Footer";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Survey() {
  return (
    <div className="bg-[#142143]">
      <NavBar bread={""} />

      <div className="container mx-auto py-20 grid gap-4 lg:px-0 px-2">
        <h1 className="capitalize font-semibold text-6xl text-slate-300">
          Anket- Sonuçları
        </h1>

        <div>
          <p className="text-slate-400 text-xl">
            Anket çalışmalarımız çerçevesinde insanların Uçan İnsan Projesi ile
            ilgili bakış açılarını ölçmeyi amaçladık. Buradan elde ettiğimiz
            sonuçlar ve önerileriniz incelenmiş olup, Türkiye’nin ilk uçan insan
            projesinin çalışma sürecine yön vermiştir. Bu anlamda tüm
            katılımcılarımıza teşekkürlerimizi sunarız.
          </p>
        </div>

        <div className="lg:p-20 p-2">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
          >
            {[
              1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((itm, i) => (
              <div data-src={`/charts/${itm}.png`} key={i} />
            ))}
          </AutoplaySlider>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Survey;
