import React from 'react'
import './login.css'
import { vincertaxlogo, pngFirst, pngSecond } from '../../assets/config'
import { SignupForm } from './SignupForm'


const Login = () => {
    return (
        <>
            <div className='login-main-div'>
                <div className='login-left-side-div'>
                    <div className="login-left-side-first-child">
                        <div className="login-logo-image">
                            <img src={vincertaxlogo} alt="image not supports" />
                        </div>
                    </div>
                    <div className="login-left-side-second-child">
                        <div className="login-left-side-second-child-inner" >
                            <SignupForm />
                        </div>
                    </div>
                </div>
                <div className="login-right-side-div">
                </div>
            </div>
        </>
    )
}

export default Login