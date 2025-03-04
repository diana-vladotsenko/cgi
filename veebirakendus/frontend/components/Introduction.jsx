/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <div className="introduction-section" id="home">
          <div className="heading-text">
            <h1 className="h1">
              <strong>Handmade Digital Stickers</strong>
              <span style={{ fontWeight: "normal" }}> Shop for</span>
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#DCC1FF",
                  fontWeight: "normal",
                }}
              >
                Every
              </span>
              <span style={{ fontWeight: "normal" }}> Occasion!</span>
            </h1>
            <p className="undertext">
              Discover unique, handcrafted digital stickers designed to brighten
              your day and add personality to everything you love. From planners
              to gifts, our stickers make every moment special.
            </p>

            <div className="introduction-buttons">
              <button id="see-products" className="button-see-products">
                <Link className="nav-link-button" href="/#products">
                  See Products
                  <i className="bi-arrow-up-right"></i>
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt="Arrow Up Right Icon"
                    className="bi-arrow-up-right"
                  />
                </Link>
              </button>
              <Link
                href="https://cutyestickers.etsy.com"
                className="link-etsy-shop"
                target="_blank"
              >
                Visit Etsy Shop
              </Link>
            </div>
          </div>
          <img
            src="/images/elipse_introduction_right.svg"
            alt="elipse-decoration"
            className="elipse-1"
          />
          <img
            src="/images/elipse_introduction_left.svg"
            alt="elipse-decoration"
            className="elipse-2"
          />
          <img
            src="/images/pink_logo.jpg"
            alt="logo-pink"
            className="introduction-image"
          />
        </div>
  );
};

export default Introduction;
