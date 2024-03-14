import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../home/Footer";
import ContactUs from "../common/ContactUs";

function ContactPage() {
  return (
    <div>
      <div className="bg-[url(/contact-us-bg.jpg)] w-full h-[60vh] bg-center bg-cover grid">
        <NavBar />

        <div className="container mx-auto flex flex-col justify-end">
          <h2 className="uppercase text-white pb-20 text-4xl font-normal">
            contact us
          </h2>
        </div>
      </div>

      <ContactUs />

      <Footer />
    </div>
  );
}

export default ContactPage;
