import React from "react";
import NavbarWithHero from "./NavbarWithHero";
import Footer from "./Footer";
import News from "./News";
import PushingTheLimits from "./PushingTheLimits";

function Home() {
  return (
    <>
      <div>
        <NavbarWithHero page={"home"} />
        <News />
        <PushingTheLimits />
        <Footer />
      </div>
    </>
  );
}

export default Home;
