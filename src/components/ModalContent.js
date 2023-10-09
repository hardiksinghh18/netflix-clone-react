import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Rating } from '@mui/material';


const ModalContent = (props) => {




    // const imgPath = "https://image.tmdb.org/t/p/original";
    const { movie, hideModal } = props

    // console.log(movie)

    const searchOnYoutube = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movie.title}%20trailer&key=AIzaSyC07osIHRoULTt_piBGme7aVnTJG3hLRf0`

    useEffect(() => {
        getYoutubeData()
    }, [])
    const [trailerUrl, setTrailerUrl] = useState('')

    const getYoutubeData = async () => {
        try {
            const res = await fetch(searchOnYoutube);
            const youtubeData = await res.json();
            //   console.log(youtubeData.items[0])
            const topResult = youtubeData.items[0]
            //   console.log(topResult.id.videoId)
            // setyoutubeData(movieLis);

            const vdoUrl = `https://www.youtube.com/watch?v=${topResult.id.videoId}`
            // console.log(vdoUrl)
            setTrailerUrl(vdoUrl)
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
// console.log(trailerUrl)

    return (
        <>
            <div className="services__modal  " >

                <div className="serviceModalContent project">
                    <div onClick={hideModal}  ><i className='bx bx-x modalClose' ></i></div>
                    <div className="flex-row mainModalContent">
                        <div className='movieTrailer'>
                        <ReactPlayer url={trailerUrl} controls height='100%'/>
                           
                        </div>
                        <div className='movieDetails'>
                            <h3>{movie?.title}</h3>
                            <p>{movie.overview}</p>
                            <div className=""><h4>Released :</h4> <p>{movie.release_date}</p></div>
                            <div className="flex-row"><h4>Rating :</h4><Rating name="read-only" value={movie.vote_average / 2
                            } precision={0.2} size="small" readOnly /> <span>({movie.vote_average / 2})</span></div>
                            <div className=""><h4>Reviews :</h4> <p>{movie.vote_count}</p></div>

                            <div className="button-container">
                                <a href="https://www.netflix.com/signup" className="subscribe-button">Subscribe to Premium</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )


}

export default ModalContent
