import React from "react";
import "../App.css";

function RunPage({ descriptions, loading }) {

  console.log(descriptions);

  return (
    <div className="trailclass">
      {!loading ? <> <div className="runlist_intro">
        <h2>Week of 2/7 - 2/13</h2>
        <p>
          The weather has held up this week in terms of no rain or snow, here's
          this week's list:
        </p>
        <ol>
          <li>Burke Lake Park, Burke</li>
          <li>Lake Accotink, Manassas</li>
          <li>Armistead Park, Fairfax</li>
          <li>Cherrydale Park, Arlington</li>
          <li>W & OD Trail, Reston</li>
        </ol>
      </div>
      {descriptions.map((description, idx) => {
        return (
          <div key={idx}>
            <h2>{description.name}</h2>
            <p>
              {description.description}
              <br />
              <img src={description.image} alt={description.name}></img>
            </p>
          </div>
      )})} </> : <h3>Loading...</h3>}
      </div>
  );
        }

export default RunPage;
