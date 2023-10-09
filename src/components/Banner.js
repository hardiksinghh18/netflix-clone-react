

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import ServiceModal from './ServiceModal';
import {GrFormAdd} from 'react-icons/gr'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Banner = () => {
  const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=923b0f8d5537d155f732743614ca66a1'
  const imgPath = "https://image.tmdb.org/t/p/original";

  const [popular, setPopular] = useState([])

  const movie = popular[Math.floor(Math.random() * popular.length)]
  useEffect(() => {
    axios.get(popularMovies).then(res => {
      setPopular(res.data.results)

    })
  }, [])




  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const { user } = UserAuth()
  // console.log(movie)

  const movieId = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {

    if (user?.email) {
      toast('Movie added to favourites !');
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

  


  // console.log(movie)
  return (
    <>
      <div className='bannerSection banner '>
        <img src={`${imgPath}${movie?.backdrop_path}`} alt="" />

      </div>
      <div className="bannerTextBox">

        <div className='bannerText'>
          <h1 className=''>{movie?.title}</h1>
          <p><span>Relaeased on :</span>{movie?.release_date}</p>
          <p className=''>{movie?.overview}</p>
          <p className='flex-row bannerRating'>Rating :<Rating name="read-only" value={movie?.vote_average / 2
            } precision={0.2} size="small" readOnly /> <span>({movie?.vote_average / 2})</span></p>
         
          <div className='flex-row BannerMovieDetail'>
            <ServiceModal movie={movie} />
            <button className='btnwatchnow' onClick={saveShow}><GrFormAdd/> Favorites </button>

         </div>

        </div>
      </div>
      <ToastContainer
                backgroundColor="#333"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </>
  )
}

export default Banner

