import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="netflix-footer">
                <NavLink to={'/'} className="footer-logo">
                    <img src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
                </NavLink>

                <div class="footer-rights">
                    <p>&copy; 2023 Netflix, Inc. All Rights Reserved</p>
                </div>

                <div class="footer-social">
                    <ul>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
