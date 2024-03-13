import React from "react";
import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../home/Footer";

function Corporate() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar />

        <div className="container mx-auto min-h-[40vh] py-20 flex flex-col gap-6">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Corporate;
