import React, { useState } from "react";
import { useEffect } from "react";

function ReviewPage() {
  const [nameInput, setName] = useState("");
  const [trailInput, setTrail] = useState("");
  const [reviewInput, setReview] = useState("");
  const [allReviews, setallReviews] = useState([]);

  function createCard(allReviews) {
    const reviewCard = allReviews.map((review) => {
      return (
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{review.nameInput}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{review.trailInput}</h6>
            <p className="card-text">{review.reviewInput}</p>
          </div>
        </div>
      );
    });
    return reviewCard;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const aReview = { nameInput, trailInput, reviewInput };

    fetch("http://localhost:3000/Reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aReview),
    })
      .then((resp) => resp.json())
      .then((aReview) => {
        console.log("Success: ", aReview);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    fetch("http://localhost:3000/Reviews")
      .then((response) => response.json())
      .then((reviews) => setallReviews(reviews));
  };

  useEffect(() => {
    fetch("http://localhost:3000/Reviews")
      .then((response) => response.json())
      .then((reviews) => setallReviews(reviews));
  }, []);

  console.log(allReviews);

  return (
    <div className="review_page">
      <h2>Share Your Experience!</h2>
      <h3>Post your review!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <input
              className="textspace_name"
              value={nameInput}
              id="name_input"
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <select
              className="textspace_trails"
              value={trailInput}
              onChange={(e) => setTrail(e.target.value)}
            >
              <option>Burke Lake Park</option>
              <option>Lake Accotink</option>
              <option>Armistead Park</option>
              <option>Cherrydale Park</option>
              <option>W & OD Trail</option>
            </select>
          </div>
          <label for="exampleFormControlTextarea1">Review</label>
          <br />
          <textarea
            className="textspace_review"
            id="trailreview_input"
            placeholder="Write a review!"
            rows="3"
            type="text"
            value={reviewInput}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>

      <div className="card-container">{createCard(allReviews)}</div>
    </div>
  );
}

export default ReviewPage;
