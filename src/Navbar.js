import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
const Navbar = () => {

    const { user, logOut } = UserAuth()
const navigate = useNavigate()
    const handleLogOut = async () => {
        try {
            await logOut()
           navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
// console.log(user.email)

    return (
        <>

            <header>
                <div className="header-section" id="headernav">
                    <div className="header-left">

                        <NavLink to={"/"}>

                            <img className="mainlogo" src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
                                alt="Netflix" /></NavLink>

                        <ul>

                            <NavLink to={"/"}><li>Home</li></NavLink>
                            <NavLink to={"/movies"}><li>Popular</li></NavLink>
                            <NavLink to={"/shows"}><li>TV Shows</li></NavLink>
                            <NavLink to={"/toprated"}><li>Top Rated</li></NavLink>
                            <NavLink to={"/upcoming"}><li>Upcoming</li></NavLink>



                        </ul>
                    </div>
                    {user?.email ? (
                        <div className="header-right">

                            <NavLink to={"/account"}><button className='login'>Account</button></NavLink>
                            <button onClick={handleLogOut} className='signup'>Log out</button>
                        </div>
                    ) : (
                        <div className="header-right">

                            <NavLink to={"/login"}><button className='login'>Login</button></NavLink>
                            <NavLink to={"/signup"}><button className='signup'>Sign Up</button></NavLink>
                        </div>
                    )}

                </div>
            </header>

        </>
    )
}

export default Navbar
