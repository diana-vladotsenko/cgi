/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/" className="logo-link">
          <img className="logo-img" src="/images/logo.jpg" alt="logo" />
          <p>CutyeStickers</p>
        </Link>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-container">
          <p className="heading-info">Contact Me!</p>
          <div className="time-mail-container">
            <p style={{ fontSize: "22px", color: "#8B8B8B" }}>
              E-S 12:00 AM - 20:00 PM (Estonian Time, UTC+2)
            </p>
            <div className="mail-footer">
              <Link
                href="mailto:cutyestickers@gmail.com"
                style={{ fontSize: "22px", color: "black", textDecoration: "none" }}
                className="mail-text-footer"
              >
                <img src="/icons/mail.svg" alt="mail-icon" className="mail-icon" />
                cutyestickers@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media-container">
          <p className="heading-info">Social Media</p>
          <div className="social-media-links">
            <Link href="https://www.instagram.com/cutyestickers/?igsh=MWJqOXVvcXdiNWVkNA%3D%3D" target="_blank">
              <img src="/icons/instagram.svg" alt="instagram" className="social-media-icon" />
            </Link>
            <Link href="https://www.tiktok.com/@cutyestickers?lang=en" target="_blank">
              <img src="/icons/tiktok.svg" alt="tiktok" className="social-media-icon" />
            </Link>
            <Link href="https://www.etsy.com/shop/cutyestickers/?etsrc=sdt" target="_blank">
              <img src="/icons/etsy.svg" alt="etsy" className="social-media-icon" />
            </Link>
          </div>
        </div>

        {/* Information Links */}
        <div className="information-container">
          <p className="heading-info">Information</p>
          <ul className="info-links">
            <li><Link href="/" className="info-underlined-links">Home</Link></li>
            <li><Link href="/#products" className="info-underlined-links">Products</Link></li>
            <li><Link href="/#about" className="info-underlined-links">About</Link></li>
            <li><Link href="/#contacts" className="info-underlined-links">Contacts</Link></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="information-container">
          <p className="heading-info">Helpful Links</p>
          <ul className="info-links">
            <li><Link href="/privacy_policy" className="info-underlined-links">Privacy Policy</Link></li>
            <li><Link href="/terms_and_cookies" className="info-underlined-links">Terms & Cookies</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>Copyright ©2025 CutyeStickers. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
