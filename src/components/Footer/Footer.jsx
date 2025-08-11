import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/LunaCare.png"
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="LunaCare Logo" className="logo-img" height = "150"/>
            
          </div>
          <p className="footer-description">
            Bringing you care and comfort under the moonlight.
            Dedicated to your well-being, anytime, anywhere.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: support@lunacare.com</p>
          <br></br>
          <p>Phone: +1 (234) 567-890</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} LunaCare. All rights reserved.
      </div>
    </footer>
  );
}
