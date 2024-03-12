import React from "react";
import NavbarWithHero from "./NavbarWithHero";
import Footer from "./Footer";
import News from "./News";
import PushingTheLimits from "./PushingTheLimits";
import ContactUs from "../common/ContactUs";

function Home() {
  return (
    <>
      <div>
        <NavbarWithHero page={"home"} />
        <News />
        <PushingTheLimits />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
