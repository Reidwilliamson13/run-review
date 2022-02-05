import React from "react";

function ReviewPage() {
  return (
    <div className="review_page">
      <h2>Share Your Experience!</h2>
      <p>Post your review!</p>
      <form>
        <div class="form-group">
          <div>
            <input type="value" placeholder="Name"/>
          </div>
          <div>
            <input type="value" placeholder="Trail/Park"/>
          </div>
          <label for="exampleFormControlTextarea1">Review</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default ReviewPage;
