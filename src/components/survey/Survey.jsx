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

      <div className="container mx-auto py-20 ">
        <h1 className="capitalize font-semibold text-6xl text-slate-300">
          Anket- Sonuçları
        </h1>

        <div className="p-20">
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
