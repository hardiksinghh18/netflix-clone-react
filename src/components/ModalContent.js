import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'

const ModalContent = (props) => {
    
  const imgPath = "https://image.tmdb.org/t/p/original";
    const { movie, hideModal } = props

    console.log(movie)

    return (
        <>
            <div className="services__modal  " >

                <div className="serviceModalContent project">
                    <div onClick={hideModal}  ><i className='bx bx-x modalClose' ></i></div>
                   <div className="flex-row">
                   <div className='movieImage'>
                       <img src={`${imgPath}${movie.poster_path}`} alt="" />
                    </div>
                    <div>
                        {movie.overview}
                    </div>
                   </div>
                    
                </div>
            </div>

        </>
    )


}

export default ModalContent
