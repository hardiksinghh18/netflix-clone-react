import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TVshows from './TVshows';
import Movie from './Movie';
import { DataProvider } from './context.js/datacontext';
import TopRated from './TopRated';
import Upcoming from './Upcoming';

function App() {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("headernav").style.top = "0";
      document.getElementById("headernav").style.transition = "all ease .5s";
    } else {
      document.getElementById("headernav").style.top 
      = "-110px";
    }
    prevScrollpos = currentScrollPos;
  }
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/shows" element={<TVshows />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </BrowserRouter>
        
      </DataProvider>
    </>
  );
}

export default App;
