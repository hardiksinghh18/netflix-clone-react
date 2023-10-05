import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TVshows from './TVshows';
import Mylist from './Mylist';
import Movie from './Movie';
import { DataProvider } from './context.js/datacontext';

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
            <Route path="/mylist" element={<Mylist />} />
          </Routes>
        </BrowserRouter>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
