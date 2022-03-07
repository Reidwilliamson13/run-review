import React from 'react'


const Form = ({nameInput, trailInput, reviewInput, setName, setTrail, setReview, options, handleSubmit}) => {



  return (
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
                {options.map((o, idx) => <option key={idx}>{o}</option>)}
            </select>
          </div>
          <label htmlFor="exampleFormControlTextarea1">Review</label>
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
  );
}

export default Form