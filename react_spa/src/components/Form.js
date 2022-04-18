import React from "react";

const Form = ({
  nameInput,
  trailInput,
  reviewInput,
  setName,
  setTrail,
  setReview,
  options,
  handleSubmit
}) => {

  return (
    
    <form
      onSubmit={handleSubmit}
      className="w-50 p-5 border border-secondary rounded"
    >
      <div className="form-group">
        <label>Name</label>
        <input
          className="form-control"
          value={nameInput}
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required 
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <select
          className="form-control"
          value={trailInput}
          onChange={(e) => setTrail(e.target.value)}
        >
          {options.map((o, idx) => (
            <option key={idx}>{o}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Review</label>
        <textarea
          className="form-control"
          placeholder="Write a review!"
          rows="3"
          type="text"
          value={reviewInput}
          onChange={(e) => setReview(e.target.value)}
          required  
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>

    </form>
  );
};

export default Form;
