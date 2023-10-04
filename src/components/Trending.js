import React from 'react'
import MovieCard from './MovieCard';

const Trending = (props) => {
    const imgPath = "https://image.tmdb.org/t/p/original";
    const{trendingMovies}=props

  return (
    <div>
      <div className='movieSection'>
            <h3>Trnding Now</h3>
            <div className='movieCards'>
                
                  {trendingMovies&&  trendingMovies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} imgPath={imgPath}/>
                    
                        
                    ))}
                
            </div>
        </div>
    </div>
  )
}

export default Trending
