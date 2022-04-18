import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RunPage from "./components/RunPage";
import ReviewPage from "./components/ReviewPage";
import "bootstrap/dist/css/bootstrap.min.css";

const options = [
  "Burke Lake Park",
  "Lake Accotink Park",
  "Armistead Park",
  "Cherrydale Park",
  "W&OD Trail",
];  


function App() {
  const [allReviews, setallReviews] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameInput, setName] = useState("");
  const [trailInput, setTrail] = useState(options[0]);
  const [reviewInput, setReview] = useState("");


  useEffect(() => {
    if (loading) {
      fetch("http://localhost:3000/Reviews") // 3 - GET updated reviews with last post
        .then((response) => response.json())
        .then((reviews) => setallReviews(reviews));

      fetch("http://localhost:3000/Description")
        .then((response) => response.json())
        .then((descriptions) => setDescriptions(descriptions));

      setLoading(false); 
    }
  }, [loading]); 

 

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
        setTrail(options[0]);
        setName("");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    setLoading(true); 
  };

const handleSearch = (e, idx) =>
  {
    setallReviews(prevState => prevState.filter((review) => (review.nameInput === e)))

}




  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/runpage"
          element={
            <RunPage
              descriptions={descriptions}
              loading={loading}
              options={options}
            />
          }
        />
        <Route
          path="/reviewpage"
          element={
            <ReviewPage
              allReviews={allReviews}
              setallReviews={setallReviews}
              loading={loading}
              nameInput={nameInput}
              setName={setName}
              trailInput={trailInput}
              setTrail={setTrail}
              reviewInput={reviewInput}
              setReview={setReview}
              handleSubmit={handleSubmit}
              handleSearch={handleSearch}
              options={options}
              
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
