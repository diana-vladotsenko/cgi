/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div className="products-section" id="products">
          <div className="heading2-text">
            <h2 className="h2">Products</h2>
            <p className="products-undertext">
              Perfect for planners, personal use and gifts!
            </p>
            <img
              src="/images/elipse_products.svg"
              alt="elipse-decoration"
              className="elipse-3"
            />
          </div>
          <div className="products-line-1">
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/potato_set.webp"
                  alt="potato-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Potato Christmas Set</p>
                      <p className="card-text">7 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/1"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/coffee_set.jpg"
                  alt="coffee-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Coffee Set</p>
                      <p className="card-text">12 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/2"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/octopus.avif"
                  alt="octopus"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Octopus</p>
                      <p className="card-text">1 PNG File</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">0,20€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/3"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container">
              <div className="product-card">
                <img
                  src="/images/selfcare.jpg"
                  alt="selfcare-set"
                  className="product-img"
                />
                <div className="product-info-container">
                  <div className="card-introduction">
                    <div className="title-container">
                      <p className="card-title">Self Care Set</p>
                      <p className="card-text">20 PNG Files</p>
                    </div>
                    <div className="price-container">
                      <p className="card-price">2,99€</p>
                    </div>
                  </div>
                  <div className="card-buttons">
                    <button id="add-to-card" className="button-add-to-card">
                      <Link className="nav-link-button" href="/">
                        Add To Card
                      </Link>
                    </button>
                    <button id="see-more" className="button-see-more">
                      <Link
                        className="nav-link-see-more-button"
                        href="/products/4"
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-line-2">
            <p style={{ textAlign: "center", marginTop:"40px"}} className="undertext">
              There would be more products...
            </p>
          </div>
        </div>
  );
};

export default ProductsList;
