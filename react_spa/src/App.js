import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RunPage from "./components/RunPage";
import ReviewPage from "./components/ReviewPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [allReviews, setallReviews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/Reviews")
  //     .then((response) => response.json())
  //     .then((reviews) => setallReviews(reviews));
  // }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runpage" element={<RunPage />} />
        <Route path="/reviewpage" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
