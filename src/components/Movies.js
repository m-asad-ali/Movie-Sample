import React, { useState } from "react";
import Card from "./Card";
import { Data } from "../Data/MoviesData";

function Movies(props) {
  return (
    <>
      <div className="App">
        {Data.map((movie) => {
          if (movie.tags.find((tag) => tag == props.category)) {
            return (
              <Card
                src={movie.images[0].thumbnail}
                title={movie.title}
                date={movie.release_date}
                category={movie.tags}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default Movies;
