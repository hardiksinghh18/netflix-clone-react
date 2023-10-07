import React from 'react'
import { Modal, Rating } from '@mui/material';
import ServiceModal from './ServiceModal';

const Tvcard = (props) => {
    const{movie}=props
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>
            <div className='singleCard'>

                <img src={`${imgPath}${movie.backdrop_path}`} alt={movie.name} />
                <div className='movieDesc'>
                    <div className='flex-row '>
                        <h5>{movie.name}</h5>

                    </div>
                    <div className='flex-row rating'>
                        <p className='flex-row'>Rating :<Rating name="read-only" value={movie.vote_average /2
                        } precision={0.2} size="small" readOnly /> <span>({movie.vote_average/2})</span></p>
                        {/* <button className='btn '>View more &#8594;</button> */}
                        <ServiceModal movie={movie} title={movie.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tvcard
