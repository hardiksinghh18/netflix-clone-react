import React from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const NetflixSignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')
const navigate=useNavigate()
    const { user, logIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (email && password) {
            try {
                await logIn(email, password);
      
                navigate("/")
            } catch (error) {
                console.log(error);
                setError(error.message)
            }
           
        } else {
           
            console.log("Email and password are required.");
        }
       
    }

    return (
        <div className="signup-box">
            <h1>Sign In</h1>
            {error?<p className='errormsg'>{error}</p>:''}
            <form onSubmit={handleSubmit} action="">
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" autoComplete='current-password' />
                <button>Log In</button>

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
                    <span>By clicking "Sign In," you agree to our</span>
                    <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </div>
                <div className="login-link">
                    New to Netflix? <NavLink to={"/signup"}>Sign Up</NavLink>
                </div>
            </form>
        </div>
    );
};

export default NetflixSignIn;
