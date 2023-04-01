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

      <div className="links">
        <table>
          <tr className="head">
            <th>For Buyers</th>
            <th>For Buyers</th>
          </tr>

          <tr className="data">
            <td>Our Buyers</td>
            <td>Our Buyers</td>
          </tr>

          <tr className="data">
            <td>Browse</td>
            <td>Browse</td>
          </tr>

          <tr className="data">
            <td>Post your requirement</td>
            <td>Post your requirement</td>
          </tr>
          <tr className="data">
            <td>Entertainment on EMI</td>
            <td>Entertainment on EMI</td>
          </tr>
        </table>
       
      </div>
        <div className="about">
            <table>
              <tr className="head">
                <th>ABOUT US</th>
                <th>ABOUT US</th>
              </tr>
              <tr className="data">
                <td>Our Story</td>
                <td>Our Story</td>
              </tr>
              <tr className="data">
                <td>Careers</td>
                <td>Careers</td>
              </tr>
            
            </table>
        </div>
        <div className="address">
          <h3>REGISTERED OFFICE ADDRESS</h3>
          <p>
            VINSM Globe Private Limited Percept House, Ground Floor East of
            Kailash, New Delhi CIN: U52605DL2012PTC236944 Phone: +91 11 498 498
            01
          </p>
          <p>Contact us</p>
        </div>

        <div className="payment">
            <div className="payment_img"><img src="https://verdant-biscuit-f278ad.netlify.app/payment.c2c1222d.png" alt="" /></div>
            <p>&copy; Copyright 2015-2023 | <span>VINSM Globe Pvt Ltd </span>| All Right Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
