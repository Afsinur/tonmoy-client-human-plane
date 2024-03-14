import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#142143] text-white py-20">
      <div className="container mx-auto grid gap-16">
        <div className="grid gap-4 grid-cols-5">
          <div className="flex flex-col gap-6">
            <h2 className="text-sm text-slate-100 font-semibold uppercase">
              corporate
            </h2>

            <ul className="text-sm text-slate-400 font-light grid gap-2">
              <li>
                <a href="#" className="hover:text-slate-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Private Jet Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Flight Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Book Flight
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm text-slate-100 font-semibold uppercase">
              our solutions
            </h2>

            <ul className="text-sm text-slate-400 font-light grid gap-2">
              <li>
                <a href="#" className="hover:text-slate-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Private Jet Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Flight Search
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm text-slate-100 font-semibold uppercase">
              innovation
            </h2>

            <ul className="text-sm text-slate-400 font-light grid gap-2">
              <li>
                <a href="#" className="hover:text-slate-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Private Jet Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Flight Search
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm text-slate-100 font-semibold uppercase">
              careers
            </h2>

            <ul className="text-sm text-slate-400 font-light grid gap-2">
              <li>
                <a href="#" className="hover:text-slate-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Private Jet Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-500">
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-sm text-slate-100 font-semibold uppercase">
              news
            </h2>

            <Link to="/contact-us" className="uppercase text-base font-bold">
              contact us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div></div>

          <div></div>

          <div className="grid gap-4">
            <h2 className="text-center text-slate-200 uppercase font-medium">
              follow us
            </h2>
            <ul className="flex items-center justify-center gap-8">
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

        <hr className="border-1 border-slate-700" />

        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <img src="/logo-white.png" alt="image" width="w-[40px]" />
          </div>

          <p className="text-slate-200 capitalize font-light text-sm text-center">
            @copyright 2024 TUIPAS.
          </p>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
