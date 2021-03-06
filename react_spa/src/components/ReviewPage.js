import React from "react";
import ReviewDisplay from "./ReviewDisplay";
import { Spinner, InputGroup, FormControl} from "react-bootstrap";
import Form from "./Form";

//onChange={(e) => handleSearch(e.target.value)}

//reviewInput.filter(review => review.charAt(0) === e)

function ReviewPage({
  allReviews,
  loading,
  nameInput,
  setName,
  trailInput,
  setTrail,
  reviewInput,
  setReview,
  handleSubmit,
  handleSearch,
  options,
}) {
  return (
    <div className="bg-dark p-5">
      {!loading ? (
        <div className="text-white">
          <h2 className="display-5">Share Your Experience!</h2>
          <h2 className="lead">Post your review!</h2>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            <FormControl
              onChange={(e, idx) => handleSearch(e.target.value, idx)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
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
          <hr className="my-4" />
          <div style={{ overflow: "scroll", height: "500px" }}>
            <ReviewDisplay allReviews={allReviews} loading={loading} />{" "}
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center bg-dark vh-100 text-white">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;
