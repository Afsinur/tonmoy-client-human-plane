import React from "react";
import { MdDone } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

function GetToKnowUs() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 py-32">
          <div>
            <div className="grid gap-6">
              <div>
                <p className="text-[#a79132] text-2xl uppercase font-semibold">
                  get to know us
                </p>
              </div>

              <div>
                <h2 className="text-[#123821] capitalize font-semibold text-5xl">
                  Our jetly save your time and give you comfort in flights
                </h2>
              </div>

              <div>
                <p className="text-slate-500 text-lg">
                  Non augue egestas, commodo velit eget, vestibulum tellus.
                  Curabitur vulputate justo elit, at elementum orci pulvinar
                  vel. Pellentesque habitant morbi tristique. Pellentesque
                  habitant morbi tristique. Ut non augue egestas, commodo velit
                  eget, vestibulum tellus.
                </p>
              </div>

              <div className="grid gap-4">
                <p className="flex gap-4 items-center">
                  <MdDone className="text-2xl text-[#a79132]" />
                  <span className="text-[#123821] font-semibold text-xl">
                    There are many variations of passage of lorem.
                  </span>
                </p>
                <p className="flex gap-4 items-center">
                  <MdDone className="text-2xl text-[#a79132]" />
                  <span className="text-[#123821] font-semibold text-xl">
                    Available but the majority alteration.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 items-center">
                <button className="py-4 rounded-full border uppercase font-semibold bg-[#123821] text-white">
                  discover more
                </button>
                <FaSquarePhone className="text-[#a79132] text-4xl cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="p-12">
            <div className="bg-[#f8f7f1]">
              <img
                src="./get-to-know-us-right-img.jpg"
                alt="image"
                className="w-full translate-x-[50px] -translate-y-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetToKnowUs;
