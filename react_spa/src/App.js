import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RunPage from "./components/RunPage";
import ReviewPage from "./components/ReviewPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allReviews, setallReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    if (loading) {
      fetch("http://localhost:3000/Reviews")
        .then((response) => response.json())
        .then((reviews) => setallReviews(reviews));

      fetch("http://localhost:3000/Description")
        .then((response) => response.json())
        .then((descriptions) => setDescriptions(descriptions));

      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/runpage"
          element={<RunPage descriptions={descriptions} loading={loading} />}
        />
        <Route
          path="/reviewpage"
          element={
            <ReviewPage
              allReviews={allReviews}
              setallReviews={setallReviews}
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
