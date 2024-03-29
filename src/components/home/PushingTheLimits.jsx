import React, { useEffect, useRef } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { motion } from "framer-motion";

function PushingTheLimits() {
  const dragBarParent = useRef();
  const dragBar = useRef();
  const meat = useRef();

  useEffect(() => {
    let isDragging = false;
    let startX, startLeft, lastPos, offsetX2;

    dragBar.current.addEventListener("mousedown", (event) => {
      isDragging = true;
      startX = event.clientX;
      startLeft = dragBar.current.offsetLeft;
    });

    document.addEventListener("mousemove", (event) => {
      if (isDragging) {
        const offsetX = event.clientX - startX;
        const newLeft = startLeft + offsetX;

        const minLeft = 0;
        const maxLeft =
          dragBarParent.current.offsetWidth - dragBar.current.offsetWidth;

        dragBar.current.style.left = `${Math.max(
          minLeft,
          Math.min(maxLeft, newLeft)
        )}px`;

        lastPos = !offsetX2
          ? meat.current.clientWidth / 2 + offsetX
          : offsetX2 + offsetX;

        meat.current.style.clip = `rect(0px, ${window.innerWidth}px, 550px, ${
          !offsetX2
            ? meat.current.clientWidth / 2 + offsetX
            : offsetX2 + offsetX
        }px)`;
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      offsetX2 = lastPos;
    });

    setTimeout(() => {
      meat.current.style.clip = `rect(0px, ${window.innerWidth}px, 550px, ${
        meat.current.clientWidth / 2
      }px)`;
    }, 10);
  }, []);

  return (
    <div ref={dragBarParent} className="bg-[#142143] relative">
      <div
        ref={dragBar}
        className="px-1 bg-gradient-to-b from-transparent via-indigo-500 to-transparent absolute top-0 left-1/2 h-full z-30"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white p-3 cursor-pointer">
          <div className="rounded-full bg-blue-500 w-full h-full">
            <div className="flex justify-between items-center h-full">
              <GoTriangleLeft className="text-xl text-white" />
              <GoTriangleRight className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 relative overflow-hidden">
        <div className="relative h-[100vh] select-none w-full">
          <div className="w-[700px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <img src="/sceleton.png" alt="image" className="w-full sceleton" />
            <img
              ref={meat}
              src="/meat.png"
              alt="image"
              className="w-[73%] meat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="select-none md:px-0 px-2 grid gap-8 absolute top-1/3 left-0 -translate-y-full text-white z-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Initial state of the element
            whileInView={{ opacity: 1, x: 0 }} // Animation state
            transition={{ type: "spring", duration: 0.5 }} // Transition duration
            viewport={{ once: false }}
          >
            <h2 className="text-5xl font-semibold">
              Pushing <br />
              the Limits
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }} // Initial state of the element
            whileInView={{ opacity: 1, x: 0 }} // Animation state
            transition={{ type: "spring", duration: 0.5 }} // Transition duration
            viewport={{ once: false }}
          >
            <p>
              We are proud of achieving world-class <br /> performance with an
              integrated, complete system.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PushingTheLimits;
