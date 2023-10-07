
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';

const TopRated = () => {

    const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=923b0f8d5537d155f732743614ca66a1'
    const imgPath = "https://image.tmdb.org/t/p/original";

    const [topRated, setTopRated] = useState([])


    useEffect(() => {
        axios.get(topRatedUrl).then(res => {
            setTopRated((res.data.results))


        })
    }, [])

    console.log(topRated)
    return (
        <>
            <div className='shows'>
                <h2>Top-Rated Movies</h2>
                <div className='movieCards tvShows'>

                    {topRated && topRated.map((movie, index) => (
                        <MovieCard key={index} movie={movie} imgPath={imgPath} />


                    ))}

                </div>
            </div>
        </>
    )
}

export default TopRated
