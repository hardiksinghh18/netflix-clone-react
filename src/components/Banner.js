import React, { useEffect, useState } from 'react'

const Banner = (props) => {
const{ trendingMovies}=props
const imgPath = "https://image.tmdb.org/t/p/original";

// const[bannerUrl,setBannerUrl]=useState('')

const randomindex = parseInt(Math.random() * trendingMovies.length)
randomindex&&(console.log(trendingMovies[randomindex].backdrop_path))
  // setBannerUrl(trendingMovies[randomindex].backdrop_path)
// let bannerUrl=trendingMovies[randomindex].backdrop_path


  let banner=document.getElementById("banner")

banner.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${trendingMovies[randomindex].backdrop_path})`;

  return (
    <div className="banner" id='banner'>
       <h1>
        {randomindex &&  trendingMovies[randomindex].title}
       </h1>
    </div>
  )
}

export default Banner
