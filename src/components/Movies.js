import React, { useState } from "react";
import Card from "./Card";
import { Data } from "../Data/MoviesData";

function Movies(props) {
  const [genre, setGenre] = useState("action");

  return (
    <div className="App">
      {Data.map((movie) => {
        if (movie.tags.find((tag) => tag == "action")) {
          console.log("Hi im here in if statement");
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
  );
}

export default Movies;
