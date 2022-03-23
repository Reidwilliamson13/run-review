import React, { useState } from "react";
import ReviewDisplay from "./ReviewDisplay";
import Form from "./Form";


function ReviewPage({ allReviews, loading, setLoading }) {
  const [nameInput, setName] = useState("");
  const [trailInput, setTrail] = useState("Burke Lake Park");
  const [reviewInput, setReview] = useState("");
  const options = [
    "Burke Lake Park",
    "Lake Accotink",
    "Armistead Park",
    "Cherrydale Park",
    "W & OD Trail",
  ];



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
        setReview("");
        setTrail("");
        setName("");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    setLoading(true);
  };



  return (
    <div className="review_page">
      {!loading ? (
        <div>
          <h2>Share Your Experience!</h2>
          <h3>Post your review!</h3>
          <Form
            nameInput={nameInput}
            trailInput={trailInput}
            reviewInput={reviewInput}
            setName={setName}
            setTrail={setTrail}
            setReview={setReview}
            options={options}
            handleSubmit={handleSubmit}
          />
          <ReviewDisplay allReviews={allReviews} loading={loading} />{" "}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default ReviewPage;
