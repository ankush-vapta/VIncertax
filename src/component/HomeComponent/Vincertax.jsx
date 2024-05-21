import React from 'react'
import './vincertax.css'
import { vincertaxlogo, pngFirst, pngSecond } from '../../assets/config'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Share } from '../ShareComponent/Share';
import { useNavigate } from 'react-router-dom';

const Vincertax = () => {
	const navigate = useNavigate();

	const gotoLoginPage = () => {
		navigate('Login')
	}

	const handleDragStart = (e) => e.preventDefault();
	const items = [
		<img src={pngFirst} onDragStart={handleDragStart} role="presentation" />,
		<img src={pngSecond} onDragStart={handleDragStart} role="presentation" />,
	];
	return (
		<>
			<div className='vincertax-main-div display-flex'>
				<div className='vincertax-left-side-div'>
					<div className="left-side-first-child">
						<div className="logo-image">
							<img src={vincertaxlogo} alt="image not supports" />
						</div>
					</div>
					<div className="left-side-second-child display-property">
						<div className="left-side-second-child-inner display-flex justify-content">
							<h3>
								Welcome to Vincere Tax Portal: Your All-in-One Tax Solution
							</h3>
							<p>
								Are you ready to take control of your taxes like never before? Look no further – the Vincere Tax Portal is here to simplify your tax journey and empower you with unmatched convenience and expertise. Whether you're a valued tax client, a dedicated Vincere Tax Employee, or a trusted White Label Financial Advisor, our cutting-edge platform is designed to bring you closer to your financial goals.
							</p>
							<Share
								title="Get started"
								gotoLoginPage={gotoLoginPage}
							/>
						</div>
					</div>
				</div>

				<div className="vincertax-right-side-div display-property">
					<div className="aliceCarousel" style={{ height: "381px", width: "500px" }}>
						<AliceCarousel
							mouseTracking items={items}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Vincertax