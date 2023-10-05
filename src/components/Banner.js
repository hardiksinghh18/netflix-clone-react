


import React, { useEffect, useState } from 'react';
import ServiceModal from './ServiceModal';

const Banner = (props) => {
  const { trendingMovies } = props;
  const imgPath = "https://image.tmdb.org/t/p/original";

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (trendingMovies && trendingMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * trendingMovies.length);
      const selectedMovieData = trendingMovies[randomIndex];

      setSelectedMovie(selectedMovieData);
    }
  }, [trendingMovies]);

  useEffect(() => {
    if (selectedMovie) {
      const banner = document.getElementById("banner");
      banner.style.backgroundImage = `url(${imgPath}${selectedMovie.backdrop_path})`;
    }
  }, [selectedMovie]);

  return (
    <div className="banner .banner-gradient" id='banner'>
      {selectedMovie && (
        <div className='bannerText'>
          <h1>{selectedMovie.title}</h1>
          <p>{selectedMovie.overview}</p>
          <div>
          <div>
         <ServiceModal movie={selectedMovie}/>
        </div>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Banner;


