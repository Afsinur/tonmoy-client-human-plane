import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#142143] text-white py-20">
      <div className="container mx-auto grid gap-8">
        <div className="flex gap-8 justify-between">
          <div>
            <div className="grid gap-4">
              <img src="./logo-white.png" alt="image" className="w-60" />
              <p className="text-lg capitalize font-semibold">
                Private jet charters save your time and <br /> give you comfort.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <h2 className="text-lg text-slate-100 font-semibold">Explore</h2>

            <ul class="text-slate-400 grid gap-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Private Jet Catering</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Flight Search</a>
              </li>
              <li>
                <a href="#">Book Flight</a>
              </li>
            </ul>
          </div>

          <div className="grid gap-6">
            <h2 className="text-lg text-slate-100 font-semibold">Links</h2>

            <ul class="text-slate-400 grid gap-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Private Jet Catering</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Flight Search</a>
              </li>
              <li>
                <a href="#">Book Flight</a>
              </li>
            </ul>
          </div>

          <div className="grid gap-6">
            <h2 className="text-lg text-slate-100 font-semibold">Contact</h2>

            <ul class="text-slate-400 grid gap-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Private Jet Catering</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Flight Search</a>
              </li>
              <li>
                <a href="#">Book Flight</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border border-slate-500" />

        <div className="flex items-center justify-between">
          <p className="text-slate-200 capitalize font-semibold">
            @copyright 2024 TUIPAS.
          </p>

          <div>
            <ul class="flex items-center gap-8">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaPinterestP />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
