import React, {useState} from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import AboutAuth from '../../components/AboutAuth/AboutAuth'

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSwitch = ()=>{
        setIsSignUp(!isSignUp)
    }
  return (
    <div className='auth-main'>
        { isSignUp && <AboutAuth/> } 
        <div className='auth-main-2'>
            {!isSignUp && 
                <div className='auth-icon'>
                    <img src="{icon}" alt='Rent' className='login-logo'/>
                    <p>Sign in to Rent</p>
                </div>
            }
            <div className='auth-form'>
                {
                    isSignUp && (
                        <div className='auth-name'>
                            <p>Display Name</p>
                            <input type='text' id='name' name='name' placeholder='Enter Name'/>
                        </div>
                    )
                }
                <div className='auth-email' style={{margin:'0',padding:'0'}}>
                    <h4>Email/Number</h4>
                    <input type='email' name='email' id='email' placeholder='Enter email or number'/>
                </div>
                <div className='auth-password'>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <h4>Password</h4>
                        {!isSignUp && <p style={{color:'#007ac6', fontSize:'13px'}}>forgot password?</p>}
                    </div>
                    <input type='password' name='password' id='password' placeholder='Enter password'/>
                </div>
                <button type='submit' className='auth-btn'>
                    <Link to='/home' style={{textDecoration: 'none'}}>
                        {isSignUp? "Sign up" : "Log in"}
                    </Link>
                </button>
            </div>
            <p>
                {isSignUp? "Already a user?" : "New to Rent?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp? "Log in" : "Sign Up"}</button>
            </p>
        </div>
    </div>
  )
}

export default Auth;