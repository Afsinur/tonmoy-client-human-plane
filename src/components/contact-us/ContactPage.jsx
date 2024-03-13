import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../home/Footer";
import ContactUs from "../common/ContactUs";

function ContactPage() {
  return (
    <div>
      <div className="bg-[#142143]">
        <NavBar />
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
