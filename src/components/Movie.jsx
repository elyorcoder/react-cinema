import React from "react";
import "../App.css";
const Movie = ({ data }) => {
  return (
    <div className="cards">
      {data?.length > 0
        ? data.map((item) => (
            <div className="card" key={item.imdbID}>
              <img
                width="300"
                height="450"
                src={item.Poster}
                alt={item.Title}
              />
              <h2>{item.Title}</h2>
              <p>{item.Year}</p>
              <p>{item.imdbID}</p>
            </div>
          ))
        : "Loading . . . ."}
    </div>
  );
};

export default Movie;
