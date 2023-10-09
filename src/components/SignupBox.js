import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const NetflixSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
const navigate=useNavigate()
    const { user, signUp } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        if (email && password) {
            try { 
      
                await signUp(email, password);
                console.log('clicked')
                navigate("/")
            } catch (error) {
               
                console.log(error);
            }
           
        } else {
           
            console.log("Email and password are required.");
        }
       
    }


    return (
        <div className="signup-box">
            <h1>Sign Up</h1>
            
            <form onSubmit={handleSubmit} action="">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" autoComplete='current-password' />
                <button>Sign Up</button>

                {/* <div className='flex-row'>
                    <div className="remember-me flex-column">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <div>
                        <div className="need-help">
                            Need help? 
                        </div>
                    </div>
                </div> */}
                <div className="terms-and-conditions">
                    <span>By clicking "Sign Up," you agree to our</span>
                    <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </div>
                <div className="login-link">
                    Already have an account? <NavLink to={"/login"}>Sign In</NavLink>
                </div>
            </form>
     
        </div>
    );
};

export default NetflixSignup;
