import React from 'react'

export const Card = ({reviewCard, text}) => {
    const review = {reviewCard}
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">{review.nameInput} {text}.</h5>
        <h6 className="card-subtitle mb-2 text-muted">({review.trailInput})</h6>
        <p className="card-text">{review.reviewInput}</p>
      </div>
    </div>
  );
}

export default Card;