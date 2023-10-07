import React from 'react'
import { Modal, Rating } from '@mui/material';
import ServiceModal from './ServiceModal';

const MovieCard = (props) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const { movie } = props
  // console.log(movie)
  return (
    <>
      <div className='singleCard'>

        <img src={`${imgPath}${movie.backdrop_path}`} alt={movie.title} />
        <div className='movieDesc'>
          <div className='flex-row '>
            <h5>{movie.title?movie.title:'57 Seconds'}</h5>
            
          </div>
          <div className='flex-row rating'>
            <p className='flex-row'>Rating:<Rating name="read-only" value={movie.vote_average / 2
            } precision={0.2} size="small" readOnly /> <span>({movie.vote_average/2})</span></p>
            {/* <button className='btn '>View more &#8594;</button> */}
            <ServiceModal movie={movie}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard

