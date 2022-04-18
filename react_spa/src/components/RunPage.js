import React from "react";
import { Spinner } from "react-bootstrap";
import "../App.css";

function RunPage({ descriptions, loading, options}) {
  return (
    <div className="p-5 bg-dark text-light">
      {!loading ? (
        <>
          <div className="jumbotron">
            <h2 className="display-6">Week of 2/7 - 2/13</h2>
            <p className="lead">
              The weather has held up this week in terms of no rain or snow,
              here's this week's list:
            </p>
            <hr className="my-4" />
            <ol>
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ol>
            <hr className="my-4" />
          </div>
          <div style={{ overflow: "scroll", height: "500px" }}>
            {descriptions.map((description, idx) => {
              return (
                <div
                  className="card text-dark mb-5"
                  style={{
                    width: "40%",
                    marginLeft: "30%",
                    marginRight: "30%",
                  }}
                  key={idx}
                >
                  <img
                    className="card-img-top"
                    src={description.image}
                    alt={description.name}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{description.name}</h4>
                    <p className="card-text">{description.description}</p>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </>
      ) : (
        <div className="bg-dark vh-100 d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default RunPage;
