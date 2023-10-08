import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Movie from './Movie';
import { DataProvider } from './context/datacontext';
import TopRated from './TopRated';
import Upcoming from './Upcoming';
import AuthContextProvider from './context/AuthContext';
import Login from './Login';
import Signup from './Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Favorites from './Favorites';
import Footer from './components/Footer';

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
    <AuthContextProvider>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/favorites" element={<ProtectedRoute><Favorites/></ProtectedRoute>} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
        
      </DataProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
