import React, { useState } from 'react'
import { Rating } from '@mui/material';
import ServiceModal from './ServiceModal';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = (props) => {
  const imgPath = "https://image.tmdb.org/t/p/original";
  const { movie } = props

  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const { user } = UserAuth()
  // console.log(movie)

  const movieId = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId, {
        savedshows: arrayUnion({
          id: movie.id,
          title: movie.title?movie.title:'57 Seconds',
          backdrop_path: movie.backdrop_path,
          overview:movie.overview,
          vote_average:movie.vote_average,
          vote_count:movie.vote_count,
          release_date:movie.release_date
          // favMovies: [movie]
          // favMovies: movie
        })
      })
    } else {
      alert("Please login to add this show to favourites")
    }
  }


  return (
    <>
      <div className='singleCard'>

        <img src={`${imgPath}${movie.backdrop_path}`} alt={movie.title} />
        <div className='movieDesc'>
          <div className='flex-row movieTitle'>
            <h5>{movie.title ? movie.title : '57 Seconds'}</h5>
            <p className='hearticon' onClick={saveShow}>
              {like ? (
                <FaHeart className='absolute top-4 left-4 text-gray-300' />
              ) : (
                <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
              )}
            </p>
          </div>
          <div className='flex-row rating'>
            <p className='flex-row'>Rating:<Rating name="read-only" value={movie.vote_average / 2
            } precision={0.2} size="small" readOnly /> <span>({movie.vote_average / 2})</span></p>
            {/* <button className='btn '>View more &#8594;</button> */}
            <ServiceModal movie={movie} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard

