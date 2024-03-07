import React from "react";
import { MdDone } from "react-icons/md";

function DetailsCard() {
  const cardInfo = [
    {
      title: "Basic flight performance criteria",
      detailList: [
        "40,000 Feet Flight Altitude",
        "24 Hours Airtime",
        "Dual Redundant SATCOM + Dual Redundant LOS",
        "Fully Automatic Flight Control and 3 Redundant Autopilot System (Triple Redundant)",
        "Fully Automatic Landing and Take-off Feature Without Dependence on Ground Systems",
        "Navigation with Internal Sensor Fusion Without Dependency on GPS",
      ],
    },
    {
      title: "Advanced Features",
      detailList: [
        "40,000 Feet Flight Altitude",
        "24 Hours Airtime",
        "Dual Redundant SATCOM + Dual Redundant LOS",
        "Fully Automatic Taxi and Parking Feature",
        "Semi-Autonomous Flight Modes Support",
        "Fault Tolerant and 3 Redundant Sensor Fusion Application",
        "Unique Redundant Servo Actuator Units",
        "Unique Redundant Lithium-Based Battery Units",
      ],
    },
  ];

  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-8">
          {cardInfo &&
            cardInfo.map((obj, i) => (
              <div key={i}>
                <Card obj={obj} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Card({ obj }) {
  return (
    <div className="px-10 py-6 rounded-3xl text-white drop-shadow-md font-semibold text-2xl bg-[#283c6bbf] h-full flex flex-col gap-6">
      <div>
        <h2>{obj.title}</h2>
      </div>

      <div>
        <ul className="text-slate-300 text-base grid gap-3 drop-shadow-md">
          {obj.detailList.map((itm, i) => (
            <li key={i} className="flex gap-4 items-center">
              <div className="self-start w-5 h-5 p-4 rounded-full bg-[#142143] grid place-content-center">
                <MdDone className="text-white" />
              </div>
              {itm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsCard;
