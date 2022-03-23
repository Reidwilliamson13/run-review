import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="m-5 text-light w-75">
      <div
        className="p-4 rounded shadow-lg"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
      >
        <h2 className="display-2">HELLO</h2>
        <p className="h5">
          This app is for running enthusiasts like myself who are interested in
          discovering all of Northern Virginia's beautiful parks and running
          trails. I will be posting a new park or trail every week with a
          description and pictures. The idea is to provide information on new
          trails, what to expect, level of difficulty, and safety information.
        </p>
        <br />
        <button
          type="button"
          className="btn btn-info text-light"
          onClick={() => navigate("/reviewpage")}
        >
          SHARE ON THE REVIEWS TAB
        </button>
      </div>
    </div>
  );
}

export default Home;
