import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const img =
  "https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="logoo">
        <img src={img} alt="" /> <h2>StarClinch</h2>
      </div>

      <div className="icons">
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaYoutube />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaInstagram />
        </span>
      </div>

      <div className="footer_data">
        <div className="buyers_data">
          <h2>For buyers</h2>
          <p>Our Buyers</p>
          <p>Browse</p>
          <p>Post Your Requirement</p>
          <p>Entertainment on EMI</p>
          <br />
          <h2>about</h2>
          <p>Our Story </p>
          <p>Careers</p>
        </div>

        <div className="buyers_data">
          <h2>For Buyers</h2>
          <p>Our Buyers</p>
          <p>Browse</p>
          <p>Post Your Requirement</p>
          <p>Entertainment on EMI</p>
          <br />
          <h2>about</h2>
          <p>Our Story </p>
          <p>Careers</p>
        </div>

        <div className="buyers_data specific">
          <h2>registered office address</h2>
          <p>
            VINSM Globe Private Limited Percept House, Ground Floor East of
            Kailash, New Delhi CIN: U52605DL2012PTC236944 Phone: +91 11 498 498
            01
          </p>
          <span className="contact">Contact us</span>
        </div>
      </div>
      <div className="payment">
        <div className="payment_img">
          <img
            src="https://verdant-biscuit-f278ad.netlify.app/payment.c2c1222d.png"
            alt=""
          />
        </div>
        <p>
          &copy; Copyright 2015-2023 | <span>VINSM Globe Pvt Ltd </span>| All
          Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
