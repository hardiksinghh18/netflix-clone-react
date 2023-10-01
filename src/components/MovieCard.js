import React from 'react'

const MovieCard = (props) => {
    const{movie}=props
    // console.log(movie)
  return (
    <div>
      <h5>{movie.title}</h5>
    </div>
  )
}

export default MovieCard

