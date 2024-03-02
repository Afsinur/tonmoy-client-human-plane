import React from "react";
import NavbarWithHero from "./NavbarWithHero";
import Feature from "./Feature";
import GetToKnowUs from "./GettoKnowUs";

function Home() {
  return (
    <>
      <div>
        <NavbarWithHero />
        <Feature />
        <GetToKnowUs />
      </div>
    </>
  );
}

export default Home;
