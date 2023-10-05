import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieCard from './MovieCard';
const MovieSection = (props) => {

    const apikey = "923b0f8d5537d155f732743614ca66a1";
    const apiEndpoint = "https://api.themoviedb.org/3";
    const imgPath = "https://image.tmdb.org/t/p/original";

 const { item } = props
    // console.log(item)
    const fetchMoviesList = `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${item.id}`

 const [movieData, setMovieData] = useState([])
    const getCategoryData = async () => {
     try {
         const movies = await fetch(fetchMoviesList);
         const movieList = await movies.json();
         //   console.log(movieList.results)
         setMovieData(movieList.results);
     } catch (error) {
         console.error("Error fetching categories:", error);
     }
 };
 console.log(movieData)

 useEffect(() => {
        getCategoryData();
 }, []);
    return (
       < >
         <div className='movieSection'>
            <h3>{movieData&&item.name}</h3>
            <div className='movieCards'>
                
                  {movieData&&  movieData.map((movie, index) => (
                        <MovieCard key={index} movie={movie} imgPath={imgPath}/>
                    
                        
                    ))}
                
            </div>
        </div>
       </>
    )
}

export default MovieSection
