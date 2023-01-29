import React from "react";
export default function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card m-2 border border-primary" style={{ width: "18rem", height:"22rem" }}>
        <img
          className="card-img-top"
          src={props.movie.imgSrc}
          alt={props.movie.title}
          style={{ width: "18rem", height:"15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{props.movie.title}</h5>
          <hr/ >
          <p className="card-text text-center">{props.movie.text}</p>
        </div>
      </div>
    </div>
  );
}
