import React from "react";
import "../App.css";

function RunPage({ descriptions }) {
 
  return (
    <div className="trailclass">
      <div className="runlist_intro">
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
      {descriptions.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.name}</h2>
            <p>
              {item.description}
              <br />
              <img src={item.image} alt={item.name}></img>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default RunPage;
