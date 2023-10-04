import React, { useEffect, useState } from 'react'
import MovieSection from './components/MovieSection';
import Trending from './components/Trending';
import Banner from './components/Banner';



const Home = () => {
  
  // const apikey = "7543524441a260664a97044b8e2dc621";
  const apikey = "923b0f8d5537d155f732743614ca66a1";
  const apiEndpoint = "https://api.themoviedb.org/3";

  const imgPath = "https://image.tmdb.org/t/p/original";


const[category,setCategory]=useState([])
const[trendingMovies,setTrendingMovies]=useState([])

  const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList: (id) => `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrending: `${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`,
    searchOnYoutube: (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}%20trailer&key=AIzaSyC07osIHRoULTt_piBGme7aVnTJG3hLRf0`
  }


  const getCategoryData = async () => {
    try {
      const res = await fetch(apiPaths.fetchAllCategories);
      const data = await res.json();
      setCategory(data.genres);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getTrendingMovies = async () => {
    try {
      const trending = await fetch(apiPaths.fetchTrending);
      const trendingData = await trending.json();
      // console.log(trendingData.results)
      setTrendingMovies(trendingData.results);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getTrendingMovies();
  }, []);

  // console.log(category)
  
  
 

  return (
   <div className='mainSection'>
   <div >
   <Banner  trendingMovies={trendingMovies} />
   </div>
   <div >

    <Trending trendingMovies={trendingMovies}/>
   </div>
    <div >
      {category&&category.map((item) => (
      <MovieSection key={item.id} item={item} />
      ))}
    </div></div>
  );
};





  // fetch(apiPaths.fetchAllCategories)
  // .then(res => res.json())
  // .then((res) => {
  //     // console.log(res)
  //     let categories = res.genres
  //     console.log(categories)

  // }).catch((err) => console.log(err))

 
export default Home
