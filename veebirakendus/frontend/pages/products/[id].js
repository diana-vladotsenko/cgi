import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from "../../src/data.json";
import dataReview from "../../src/review.json";
import ProductInfo from "../../components/ProductInfo";
import ReviewSection from "../../components/ReviewSection";
import ReviewCard from "../../components/ReviewCard";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewCard, setReviewCard] = useState([]);

  useEffect(() => {
    if (id) {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error("ERROR_PRODUCT_IS_NOT_FOUND");
      }
      const productReviews = dataReview.filter(
        (review) => review.productId === parseInt(id)
      );

      const reviewCards = data.find((item) => item.id === parseInt(id));
      if (reviewCards) {
        setReviewCard(reviewCards);
      }
      setReviews(productReviews);
    }
  }, [id]);

  if (!product) {
    return <h2>Loading product..</h2>;
  }

  return (
    <div className="a">
      <div
        className="contact-basket-container"
        style={{ marginLeft: "80px", marginRight: "80px" }}
      >
        <p className="pages-container">
          <Link className="page-1" href="/" style={{color:"646464",textDecoration:"none",fontSize:"22px"}}>
            Home/
          </Link>
        </p>
        <i className="bi-basket">
          <img
            src="/icons/basket.svg"
            alt="Basket Icon"
            className="basket-icon"
          />
        </i>
      </div>

      {/* Product Info Component */}
      <ProductInfo product={product} />

      {/* Reviews Section Component */}
      <ReviewSection reviews={reviews} />
      {/* Reviews Section Component */}
      <ReviewCard reviewCard={reviewCard} />
    </div>
  );
}
