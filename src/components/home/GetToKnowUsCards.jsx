import React from "react";

function GetToKnowUsCards() {
  const SubCards = [
    { src: "./sub-card-1.jpg", title: "Exclusive new offers" },
    { src: "./sub-card-2.jpg", title: "Join our cabin crew" },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 pb-20">
      <SpecialCard />
      {SubCards.map((obj, i) => (
        <div key={i}>
          <SubCard obj={obj} />
        </div>
      ))}
    </div>
  );
}

function SpecialCard() {
  return (
    <div className="bg-[#a79132] grid gap-8 p-14 relative">
      <div className="grid gap-2">
        <h4 className="text-[#ede2b1] font-semibold text-lg uppercase">
          collect miles
        </h4>
        <h2 className="text-white text-3xl font-bold">
          Get discount <br /> next flights with <br /> our card
        </h2>
      </div>

      <p className="text-[#ede2b1] font-semibold">
        Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur
        vulputate justo elit, at elementum orci pulvinar vel.
      </p>

      <button className="w-fit z-20 relative uppercase py-4 px-16 font-semibold rounded-full text-[#123821] bg-white transition-colors hover:bg-[#123821] hover:text-white">
        discover more
      </button>

      <img
        src="./get-to-know-card-two-dot.png"
        alt="image"
        className="absolute bottom-0 left-0 z-10"
      />
    </div>
  );
}

function SubCard({ obj }) {
  return (
    <div className="relative group overflow-hidden h-full p-14 flex items-end">
      <img
        src={obj.src}
        alt="image"
        className="absolute top-0 left-0 object-cover z-10 group-hover:scale-105 transition-transform"
      />
      <h2 className="text-white drop-shadow-md relative z-50 capitalize text-2xl font-semibold">
        {obj.title}
      </h2>

      <div className="bg-gradient-to-t from-[#12382111] to-[#12382111] h-full w-full absolute bottom-0 left-0 z-20"></div>
      <div className="bg-gradient-to-t from-[#1238214d] h-1/3 w-full absolute bottom-0 left-0 z-30"></div>
      <div className="bg-gradient-to-t from-[#1238214d] h-1/3 w-full absolute bottom-0 left-0 z-30"></div>
      <div className="bg-gradient-to-t from-[#1238216a] to-[#1238216a] h-full w-full absolute bottom-0 left-0 z-40 transition-transform -translate-y-full group-hover:translate-y-0 duration-300"></div>
    </div>
  );
}

export default GetToKnowUsCards;
