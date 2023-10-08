import React from 'react'
import SavedShows from './components/SavedShows'

const Favorites = () => {
    return (
        <div className='favouritePage'>
            <div className='favoritePageImage'>

            <div className="favoritesText">
                <h1>My Favorites</h1>
            </div>
            </div>
            <div>
                <SavedShows/>
            </div>
        </div>
    )
}

export default Favorites

