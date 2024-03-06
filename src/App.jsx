import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Slider2MoreInfo from "./components/more-info/Slider2MoreInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/slider-2" element={<Slider2MoreInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
