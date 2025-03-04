/* eslint-disable @next/next/no-img-element */
import React from "react";

const ReviewSection = ({ reviews }) => {
  return (
    <div className="reviews-section">

      {/* Check if there are reviews before mapping */}
      {reviews && reviews.length > 0 ? (
        reviews.map((reviewCard) => (
          <div key={reviewCard.id} className="review-container">
            <div className="user-review">
              <img src="/icons/user.svg" alt="User Icon" className="user-icon" />
              <div className="review-content">
                <div className="date-review">
                  <p className="date">{reviewCard.date}</p>
                  <div className="reviews-star">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={index < reviewCard.rating ? "/icons/star.svg" : "/icons/star-empty.svg"}
                        alt="Star Icon"
                        className="star-icon"
                      />
                    ))}
                  </div>
                </div>

                <div className="user-text-title">
                  <p style={{ fontWeight: 600, marginTop: 0 }}>{reviewCard.title}</p>
                  <p>{reviewCard.reviewText}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="no-reviews">No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;
