import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import RunPage from "./RunPage";
import ReviewPage from "./ReviewPage";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">The Run</NavLink></li>
            <li><NavLink to="/">Reviews</NavLink></li>
        </ul>
        <div className="content"></div>
      </BrowserRouter>
    </div>
  );
}

export default Main;
