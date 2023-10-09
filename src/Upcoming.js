
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard';

const Upcoming = () => {

    const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=923b0f8d5537d155f732743614ca66a1'
    const imgPath = "https://image.tmdb.org/t/p/original";

    const [upcoming, setUpcoming] = useState([])


    useEffect(() => {
        axios.get(upcomingUrl).then(res => {
            setUpcoming((res.data.results))


        })
    }, [])

    // console.log(upcoming)
    return (
        <>
            <div className='shows'>
                <h2>Upcoming Movies</h2>
                <div className='movieCards tvShows'>

                    {upcoming && upcoming.map((movie, index) => (
                        <MovieCard key={index} movie={movie} imgPath={imgPath} />


                    ))}

                </div>
            </div>
        </>
    )
}

export default Upcoming
