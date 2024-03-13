import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Slider2MoreInfo from "./components/more-info/Slider2MoreInfo";
import Survey from "./components/survey/Survey";
import AboutUs from "./components/corporate/AboutUs";
import OurFounder from "./components/corporate/OurFounder";
import Vision from "./components/corporate/Vision";
import OurValues from "./components/corporate/OurValues";
import OurWorkingPrinciples from "./components/corporate/OurWorkingPrinciples";
import OurGoals from "./components/corporate/OurGoals";
import Corporate from "./components/corporate/Corporate";
import ContactPage from "./components/contact-us/ContactPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/slider-2" element={<Slider2MoreInfo />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/corporate" element={<Corporate />}>
            <Route index element={<AboutUs />} />
            <Route path="our-founder" element={<OurFounder />} />
            <Route path="vision" element={<Vision />} />
            <Route path="our-values" element={<OurValues />} />
            <Route
              path="our-working-principles"
              element={<OurWorkingPrinciples />}
            />
            <Route path="our-goals" element={<OurGoals />} />
          </Route>
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
