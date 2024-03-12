import React from "react";
import NavbarWithHero from "../home/NavbarWithHero";
import Details from "./Details";
import Footer from "../home/Footer";
import DetailsCard from "./DetailsCard";
import PushingTheLimits from "../home/PushingTheLimits";
import ContactUs from "../common/ContactUs";

function Slider2MoreInfo() {
  return (
    <>
      <NavbarWithHero page={"more-info"} />
      <Details />
      <DetailsCard />
      <PushingTheLimits />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Slider2MoreInfo;
