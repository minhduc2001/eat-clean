import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between py-4">
          <div className="">
            Kalium Bookstore 828 Broadway, New York, NY 10003, USA{" "}
            <span className="">See location</span>
          </div>

          <ul className="flex flex-col list-none px-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-col list-none">
            <li>
              <a href="#" className="hover:underline">
                Bestsellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                On sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Editor Pick
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Best of 2019
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured
              </a>
            </li>
          </ul>

          <ul className="flex flex-col list-none">
            <li>
              <span className="">Tel: 202-555-0121</span>
            </li>
            <li>
              <span className="">E-mail: info@example.com</span>
            </li>
            <li className="w-full">
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_SbyPP_mc_vs_dc_ae.jpg"
                alt="How payment work"
                className="w-[200px]"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-px bg-gray-200"></div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between">
          <ul className="flex">
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <TwitterIcon></TwitterIcon>
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon></InstagramIcon>
              </a>
            </li>
          </ul>
          <div className="">
            © Copyright 2023 ·{" "}
            <a href="#" className="hover:text-green-500">
              Kalium Theme{" "}
            </a>
            by{" "}
            <a href="#" className="hover:text-green-500">
              Laborator
            </a>{" "}
            · All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
