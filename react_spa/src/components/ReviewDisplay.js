import React from "react";

const ReviewDisplay = ({ allReviews, loading }) => {
  function createCard(allReviews) {
    const reviewCard = allReviews.map((review, idx) => {
      return (
        <div className="card" key={idx}>
          <div className="card-body">
            <h5 className="card-title">{review.nameInput} says...</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              ({review.trailInput})
            </h6>
            <p className="card-text">{review.reviewInput}</p>
          </div>
        </div>
      );
    });
    return reviewCard;
  }

  return (
    <div>
      {!loading && (
        <div className="card-container">{createCard(allReviews)}</div>
      )}
    </div>
  );
};

export default ReviewDisplay;
