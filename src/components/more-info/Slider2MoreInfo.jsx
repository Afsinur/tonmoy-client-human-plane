import React from "react";
import NavbarWithHero from "../home/NavbarWithHero";
import Details from "./Details";
import Footer from "../home/Footer";
import DetailsCard from "./DetailsCard";

function Slider2MoreInfo() {
  return (
    <>
      <NavbarWithHero page={"more-info"} />
      <Details />
      <DetailsCard />
      <Footer />
    </>
  );
}

export default Slider2MoreInfo;
