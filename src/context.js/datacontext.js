import React from 'react'
import { createContext,useContext } from 'react';


const DataContext = createContext();
const DataProvider = ({children}) => {



    // // const apikey = "7543524441a260664a97044b8e2dc621";
    // const apikey = "923b0f8d5537d155f732743614ca66a1";
    // const apiEndpoint = "https://api.themoviedb.org/3";

    // const imgPath = "https://image.tmdb.org/t/p/original";




    // const apiPaths = {
    //     fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    //     fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    //     fetchTrending: `${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`,
    //     searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyC0SZJkHFX-fQ7NrsxdI4l4mGwYuY4l7P8`
    // }


    // fetch(apiPaths.fetchAllCategories)
    //     .then(res => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         // let categories = res.genres
    //         // console.log(categories)
            
    //     }).catch((err) => console.log(err))


    return (
        <DataContext.Provider value={''}>
        {children}
      </DataContext.Provider>
    )

}
const useDataContext = () => {
    return useContext(DataContext);
  };

export {DataContext,DataProvider,useDataContext}
