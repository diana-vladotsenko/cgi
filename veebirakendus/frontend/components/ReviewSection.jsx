/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReviewSection = ({ reviews }) => {
  return (
    <div className="reviews-section">
        <div
          className="heading2-text"
          style={{
            justifyContent: "start",
            alignItems: "flex-start",
            marginTop: "30px",
          }}
        >
          <h2 className="h2">Reviews</h2>
        </div>
        <div className="addReview-filter-container">
          <div className="filter">
            <select className="select" name="filter">
              <option className="option" value="newest">
                Newest
              </option>
              <option className="option" value="oldest">
                Oldest
              </option>
              <option className="option" value="highest">
                Highest Rating
              </option>
              <option className="option" value="lowest">
                Lowest Rating
              </option>
            </select>
          </div>
          <div className="card-buttons">
            <button id="see-more" className="button-see-more" style={{marginRight:"33px"}}>
              <a className="nav-link-see-more-button" href="/example.com">
                Add Review
              </a>
            </button>
          </div>
        </div>

        <div className="review-container">
          <div className="user-review">
            {/* <i className="bi-star"/>
              <img src="/icons/user.svg" alt="User Icon" className="user-icon"/> */}
            <div className="date-review">
              <p style={{ color: "#8B8B8B" }} className="date">
                {reviews.date}
              </p>
              
            </div>
            <div className="user-text-title">
              <div
                className="user-text"
                style={{ fontWeight: 600, marginTop: 0 }}
              >
                <p>{reviews.title}</p>
              </div>
              <div className="user-text">
                <p>{reviews.reviewText}</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReviewSection;
