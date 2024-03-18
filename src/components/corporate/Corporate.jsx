import React, { useState } from "react";
import NavBar from "../common/NavBar";
import { Outlet, useOutletContext } from "react-router-dom";
import Footer from "../home/Footer";

function Corporate() {
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState(null);
  const dontShowArray = ["Hakkımızda", "Tuğçe"];

  return (
    <div className="bg-[#142143]">
      {!dontShowArray.includes(title) ? (
        <div
          className={`w-full bg-center bg-cover grid h-[60vh]`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageSrc})`,
          }}
        >
          <NavBar />

          <div className="container mx-auto flex items-center">
            <h2 className="text-white text-4xl">{title}</h2>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}

      <div className="bg-[#142143]">
        <div className="container mx-auto min-h-[40vh] py-20 flex flex-col gap-6">
          <Outlet context={{ setImageSrc, setTitle }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function srcChangeFn() {
  return useOutletContext();
}

export default Corporate;
