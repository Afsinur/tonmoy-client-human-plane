import React from "react";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

function Feature() {
  const features = [
    { logo: MdOutlineFeaturedPlayList, title: "Luxury & Comfort" },
    { logo: MdOutlineFeaturedPlayList, title: "Safe & Secure" },
    { logo: MdOutlineFeaturedPlayList, title: "Personal Schedule" },
    { logo: MdOutlineFeaturedPlayList, title: "Many airports" },
  ];

  return (
    <div className="pt-80 pb-20 bg-[linear-gradient(rgba(167,145,50,0.72),rgba(167,145,50,0.72))]">
      <div className="container mx-auto grid gap-12">
        <h2 className="capitalize text-3xl font-semibold text-center text-white drop-shadow-lg">
          features
        </h2>
        <div className="grid gap-4 grid-cols-4">
          {features.map((obj, i) => (
            <div key={i}>
              <FeatureCard obj={obj} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ obj }) {
  return (
    <div className="border p-12 grid gap-4 group text-white hover:bg-white transition-colors">
      <div className="text-5xl drop-shadow-md text-[#123821] group-hover:text-[#a79132]">
        {<obj.logo />}
      </div>
      <p className="text-xl font-semibold drop-shadow-md group-hover:text-[#123821]">
        {obj.title}
      </p>
    </div>
  );
}

export default Feature;
