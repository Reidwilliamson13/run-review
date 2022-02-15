import React, { useState } from "react";


function ReviewPage() {

  const [nameInput, setName] = useState("");
  const [trailInput, setTrail] = useState("");
  const [reviewInput, setReview] = useState("");

const handleSubmit = (e) => {
 e.preventDefault();
const aReview = { nameInput, trailInput, reviewInput };

fetch("http://localhost:3000/Reviews", {
  method: "POST",
  headers: { "Content-Type": "application/json"},
  body: JSON.stringify(aReview)
}).then(resp => resp.json())
.then(aReview => {
  console.log("Success: ", aReview);
})
.catch((error) => {
  console.error("Error: ", error);
})
}


  return (
    <div className="review_page">
      <h2>Share Your Experience!</h2>
      <h3>Post your review!</h3>
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
