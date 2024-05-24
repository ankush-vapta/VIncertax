import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { image_inventory, image_dot } from '../../../assets/config'
import './about.css';

export const Documents = () => {
	return (
		<>

			<div className='document-container'>
				<Grid container justify="center" spacing={2}>
					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory' >
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p >Taxes</p>
									<p style={{}}>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory' >
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p >Taxes</p>
									<p style={{}}>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory' >
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p >Taxes</p>
									<p style={{}}>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory' >
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p >Taxes</p>
									<p style={{}}>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>

					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory'>
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p>Taxes</p>
									<p>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>

					<Grid item xs={6} sm={4}>
						<Paper className='document-paper' >
							<div className='document-paper-container'>
								<div className='image-container-image_inventory'>
									<img src={image_inventory} alt="image_inventory" />
								</div>
								<div className='document-paper-heading'>
									<p>Taxes</p>
									<p>Taxes</p>
								</div>
							</div>
							<div className='document-paper-image_dot'>
								<img src={image_dot} alt="image_dot" />
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</>
	)
}
export const Invoices = () => {
    return (
        <div>
            <h1>Invoices</h1>
        </div>
    )
}

export const Search = () => {
	return (
		<h1>Search</h1>
	)
}

export const Chat = () => {
	return (
		<h1>Chat</h1>
	)
}

export const Analytics = () => {
	return (
		<div>
			<h1>Analytics</h1>
		</div>
	)
}

export const Projects = () => {
	return (
		<div>
			<h1>Projects</h1>
		</div>
	)
}
export const People = () => {
	return (
		<div>
			<h1>People</h1>
		</div>
	)
}
export const Notifications = () => {
	return (
		<div>
			<h1>Notifications</h1>
		</div>
	)
}
export const Settings = () => {
	return (
		<div>
			<h1>Settings</h1>
		</div>
	)
}



