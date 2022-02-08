import React, {useState} from "react";
import Axios from "axios";

function ReviewPage() {
const url = ""
const [data, setData] = useState({
  name: "",
  trail: "",
  trailreview: ""
})

function submit(e){
e.preventDefault();
Axios.post(url,{
  name: data.name,
  trail: data.trail,
  trailreview: data.trailreview
})
.then(res=>{
  console.log(res.data)
})
}

function handle(e){
  const newdata={...data}
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}
  return (
    <div className="review_page">
      <h2>Share Your Experience!</h2>
      <p>Post your review!</p>
      <form onSubmit={(e)=> submit(e)}>
        <div class="form-group">
          <div>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Name" type="value"/>
          </div>
          <div>
            <input onChange={(e)=>handle(e)} id="trail" value={data.trail} placeholder="Trail/Park" type="value"/>
          </div>
          <label for="exampleFormControlTextarea1">Review</label>
          <textarea
            onChange={(e)=>handle(e)} id="trailreview" value={data.trailreview}
            placeholder="Write a review!"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ReviewPage;
