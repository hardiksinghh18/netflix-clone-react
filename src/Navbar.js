import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const showNavBar = () => {
        setShowNav(true)

    }
    const hideNavBar = () => {
        setShowNav(false)
    }


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
                                alt="Netflix" />
                        </NavLink>
                        {!showNav&&   <i className='bx bx-menu menu-box' onClick={showNavBar}></i>}
                        {showNav&& <i className='bx bx-x crossBar' onClick={hideNavBar}></i>}

                        <ul  className={showNav?"navbar navbarActive":"navbar"} onClick={()=>setShowNav(false)}>

                            <NavLink to={"/"}><li>Home</li></NavLink>
                            <NavLink to={"/movies"}><li>Popular</li></NavLink>

                            <NavLink to={"/toprated"}><li>Top Rated</li></NavLink>
                            <NavLink to={"/upcoming"}><li>Upcoming</li></NavLink>

                            {user?.email ? (<NavLink to={"/favorites"}><li>My Favorites</li></NavLink>) : ''}

                        </ul>
                    </div>
                    {user?.email ? (
                        <div className="header-right">
                            <div className='flex-col'>
                                <p className='username'>Hello</p>
                                <p className='username'>{user?.email}</p></div>
                            {/* <NavLink to={"/favorites"}><button className='login'>Favorites</button></NavLink> */}
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
