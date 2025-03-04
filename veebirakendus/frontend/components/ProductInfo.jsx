import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div className="page-product-container">
      <div className="page-product-images">
        <img src={product["image-1"]} alt={product.name} className="product-image-big" />
        <div className="product-image-small-container">
          <img src={product["image-2"]} alt={product.name} className="product-image-small" />
          <img src={product["image-3"]} alt={product.name} className="product-image-small" />
          <img src={product["image-4"]} alt={product.name} className="product-image-small" />
        </div>
      </div>

      <div className="product-image-description">
        <div className="product-name-price">
          <p className="h2" style={{ fontWeight: "500" }}>{product.name}</p>
          <p className="h2" style={{ fontWeight: "500", fontSize: "40px" }}>{product.price}</p>
        </div>
        <div className="product-description-container">
          <p className="product-description" 
             dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, "<br/>") }} 
          />
        </div>
        <div className="button-container">
          <button className="add-to-card-big">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
