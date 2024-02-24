import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(null, { tmdbId: movie.id })
  //       .then((url) => {
  //         console.log("url is " + url);
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         console.log("urlParamsn" + urlParams);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  const handleClick = async (movie) => {
    try {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        const url = await movieTrailer(null, { tmdbId: movie.id });
        console.log("url is " + url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log("urlParamsn" + urlParams);
        setTrailerUrl(urlParams.get("v"));
      }
    } catch (error) {
      alert("Temporarily unavailable");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
