import React from "react";
import NavbarWithHero from "./NavbarWithHero";
import Feature from "./Feature";
import GetToKnowUs from "./GettoKnowUs";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <NavbarWithHero />
        <Feature />
        <GetToKnowUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
