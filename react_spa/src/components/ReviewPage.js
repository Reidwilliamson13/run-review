import React, { useState } from "react";
import axios from "axios";

function ReviewPage() {
  const [nameInput, setName] = useState("");
  const [trailInput, setTrail] = useState("");
  const [reviewInput, setReview] = useState("");

const handleSubmit = (e) => {
 e.preventDefault();
const aReview = { nameInput, trailInput, reviewInput };

console.log(aReview);
}

  return (
    <div className="review_page">
      <h2>Share Your Experience!</h2>
      <p>Post your review!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <input
              className="textspace_name"
              id="name_input"
              placeholder="Name"
              type="text"
              value={nameInput}
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
        <p>{nameInput}</p>
        <p>{trailInput}</p>
        <p>{reviewInput}</p>
      </form>
    </div>
  );
}

export default ReviewPage;
