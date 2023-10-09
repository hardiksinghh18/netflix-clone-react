
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';

const Movie = () => {
  const popularMovies ='https://api.themoviedb.org/3/movie/popular?api_key=923b0f8d5537d155f732743614ca66a1'
  const imgPath = "https://image.tmdb.org/t/p/original";
  
  const[popular,setPopular]=useState([])
  

  useEffect(()=>{
    axios.get(popularMovies).then(res=>{
      setPopular(res.data.results)
  
    })
  },[])

  // console.log(popular)
  return (
    <div className='shows'>
    <h2>Popular Movies</h2>
    <div className='movieCards tvShows'>
    
      {popular && popular.map((movie, index) => (
        <MovieCard key={index} movie={movie} imgPath={imgPath} />


      ))}

    </div>
    </div>
  )
}

export default Movie
