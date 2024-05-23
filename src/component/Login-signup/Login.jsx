import React from 'react'
import './login.css'
import { vincertaxlogo, pngFirst, pngSecond } from '../../assets/config'
import { SignupForm } from './SignupForm'
import AliceCarousel from 'react-alice-carousel'

const Login = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src={pngFirst} onDragStart={handleDragStart} role="presentation" />,
        <img src={pngSecond} onDragStart={handleDragStart} role="presentation" />,
    ];
    return (
        <>
            <div className='login-main-div display-flex'>
                <div className='login-left-side-div'>
                    <div className="login-left-side-first-child">
                        <div className="login-logo-image">
                            <img src={vincertaxlogo} alt="image not supports" />
                        </div>
                    </div>
                    <div className="login-left-side-second-child display-property">
                        <div className="login-left-side-second-child-inner" >
                            <SignupForm />
                        </div>
                    </div>
                </div>
                <div className="login-right-side-div display-property">
                    <div className="aliceCarousel" style={{ width: "500px" }}>
                        <AliceCarousel
                            mouseTracking items={items}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login