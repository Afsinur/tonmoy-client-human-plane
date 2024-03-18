import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../home/Footer";
import News from "../home/News";

function Media() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar bread={"Medya > Basın Yayın"} />
        <div className="container mx-auto">
          <News />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Media;
