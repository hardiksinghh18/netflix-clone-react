import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
// import MovieCard from './MovieCard'
import { Rating } from '@mui/material'
import ServiceModal from './ServiceModal'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'

const SavedShows = () => {
    const { user } = UserAuth()
    const [movie, setMovie] = useState([])
    const imgPath = "https://image.tmdb.org/t/p/original";


    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            // console.log(doc.data()?.savedshows)
            setMovie(doc.data()?.savedshows)
        })
    }, [user?.email])

const movieRef = doc(db,'users',`${user?.email}`)
const deleteShow = async (passedId) =>{
    try {
        const result = movie.filter((item)=> item.id!=passedId)
        await updateDoc(movieRef,{
            savedshows:result
        })
    } catch (error) {
        console.log(error)
    }
}
    return (
        <div>
            <div className='movieCards tvShows'>

                {movie && movie.map((movie, index) => (
                    //   <MovieCard key={index} movie={movie}  />
                    <div className='singleCard'>
                       
                        <img src={`${imgPath}${movie.backdrop_path}`} alt={movie.title} />
                        <div className='movieDesc'>
                            <div className='flex-row movieTitle'>
                                <h5>{movie.title ? movie.title : '57 Seconds'}</h5>
                                <p className='deleteIcon' onClick={()=>deleteShow(movie.id)}><AiFillDelete /></p>
                            </div>
                            <div className='flex-row rating'>
                                <p className='flex-row'>Rating:<Rating name="read-only" value={movie.vote_average / 2
                                } precision={0.2} size="small" readOnly /> <span>({movie.vote_average / 2})</span></p>
                                {/* <button className='btn '>View more &#8594;</button> */}
                                <ServiceModal movie={movie} />
                            </div>
                        </div>
                    </div>


                ))}

            </div>
        </div>
    )
}

export default SavedShows
