import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // Check if results array is not empty
        if (request.data.results && request.data.results.length > 0) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
        } else {
          console.log("No results found");
        }
        return request;
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
