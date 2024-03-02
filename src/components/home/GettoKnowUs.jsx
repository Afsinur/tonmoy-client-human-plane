import React from "react";
import { MdDone } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import GetToKnowUsCards from "./GetToKnowUsCards";

function GetToKnowUs() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 pt-32 pb-20">
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
                <button className="py-4 rounded-full border uppercase font-semibold bg-[#123821] text-white hover:bg-[#a79132] hover:text-white transition-colors">
                  discover more
                </button>
                <div className="flex items-center gap-4">
                  <FaSquarePhone className="text-[#a79132] text-5xl cursor-pointer" />
                  <div className="grid">
                    <p className="uppercase text-slate-500 text-sm">
                      call anytime
                    </p>
                    <p className="uppercase text-xl text-[#123821] font-semibold">
                      +92 {`(`} 8800 {`)`} - 6780
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 flex justify-end">
            <div className="bg-[#f8f7f1] h-[600px] w-fit">
              <img
                src="./get-to-know-us-right-img.jpg"
                alt="image"
                className="h-full translate-x-[50px] -translate-y-[50px]"
              />
            </div>
          </div>
        </div>

        <GetToKnowUsCards />
      </div>
    </div>
  );
}

export default GetToKnowUs;
