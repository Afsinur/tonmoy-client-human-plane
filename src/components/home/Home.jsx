import React from "react";
import NavbarWithHero from "./NavbarWithHero";
import Footer from "./Footer";
import News from "./News";

function Home() {
  return (
    <>
      <div>
        <NavbarWithHero />
        <News />
        <Footer />
      </div>
    </>
  );
}

export default Home;
