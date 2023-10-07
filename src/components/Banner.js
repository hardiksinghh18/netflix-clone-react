


// import React, { useEffect, useState } from 'react';
// import ServiceModal from './ServiceModal';
// import { Rating } from '@mui/material';

// const Banner = (props) => {
//   const { trendingMovies } = props;
//   const imgPath = "https://image.tmdb.org/t/p/original";

//   const [selectedMovie, setSelectedMovie] = useState('');

//   useEffect(() => {
//     if (trendingMovies && trendingMovies.length > 0) {
//       const randomIndex = Math.floor(Math.random() * trendingMovies.length);
//       const selectedMovieData = trendingMovies[randomIndex];

//       setSelectedMovie(selectedMovieData);
//     }


//   }, [trendingMovies]);

//   useEffect(() => {
//     if (selectedMovie) {
//       const banner = document.getElementById("banner");
//       banner.style.backgroundImage = `url(${imgPath}${selectedMovie.backdrop_path})`;
//     }
//   }, [selectedMovie]);

//   return (
//     <>
//     { selectedMovie && (
//       <div className="banner .banner-gradient" id='banner'>
//         <div className='bannerText'>
//           <h1>{selectedMovie.title}</h1>
//           <p>{selectedMovie.overview}</p>
//           <div>
//             <div className='flex-row BannerMovieDetail'>
//               <ServiceModal movie={selectedMovie} />
//               <p className='flex-row'>Rating :<Rating name="read-only" value={selectedMovie.vote_average / 2
//               } precision={0.2} size="small" readOnly /> <span>({selectedMovie.vote_average / 2})</span></p>
//             </div>
//           </div>
//         </div>
        
//         </div>
//         )}
// </>
//     );
// }

// export default Banner;





import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Rating } from '@mui/material'
import ServiceModal from './ServiceModal';

const Banner = () => {
const popularMovies ='https://api.themoviedb.org/3/movie/popular?api_key=923b0f8d5537d155f732743614ca66a1'
const imgPath = "https://image.tmdb.org/t/p/original";

const[popular,setPopular]=useState([])

const movie=popular[Math.floor(Math.random() * popular.length)]
useEffect(()=>{
  axios.get(popularMovies).then(res=>{
    setPopular(res.data.results)

  })
},[])
  // console.log(movie)
  return (
    <div className='bannerSection banner '>
      <img src={`${imgPath}${movie?.backdrop_path}`} alt="" />
      <div className='bannerText'>
        <h1 className=''>{movie?.title}</h1>
        <p><span>Relaeased on :</span>{movie?.release_date}</p>
        <p className=''>{movie?.overview}</p>
        <div className='flex-row BannerMovieDetail'>
             <ServiceModal movie={movie} />
             <p className='flex-row'>Rating :<Rating name="read-only" value={movie?.vote_average / 2
               } precision={0.2} size="small" readOnly /> <span>({movie?.vote_average / 2})</span></p>
            </div>
        
      </div>
    </div>
  )
}

export default Banner

