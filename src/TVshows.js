import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';
import Tvcard from './components/Tvcard';

const TVshows = () => {
  const apikey = "923b0f8d5537d155f732743614ca66a1";
  const apiEndpoint = "https://api.themoviedb.org/3";
  const imgPath = "https://image.tmdb.org/t/p/original";

  // const tvShowsUrl=`https://api.themoviedb.org/3/tv/?api_key=${apikey}`
  const tvShowsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}`
  const [tvShow, setTvShow] = useState([])
  useEffect(() => {
    axios.get(tvShowsUrl).then(res => {
      // console.log(res.data.results)
      setTvShow(res.data.results)

    })
  }, [])

  console.log(tvShow)
  return (
    <div className='shows'>
    <h2>Tv Shows</h2>
    <div className='movieCards tvShows'>
    
      {tvShow && tvShow.map((movie, index) => (
        <Tvcard key={index} movie={movie} imgPath={imgPath} />


      ))}

    </div>
    </div>
  )
}

export default TVshows
