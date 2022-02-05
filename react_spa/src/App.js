import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RunPage from "./components/RunPage";
import ReviewPage from "./components/ReviewPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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
