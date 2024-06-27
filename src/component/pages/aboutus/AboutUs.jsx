import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { image_inventory, image_dot } from '../../../assets/config'
import './about.css';

//Drawer

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const Documents = () => {
	const data = [{
		img: image_inventory,
		heading: "Workspace",
		subHeading: "Taxes",
		imgDot: image_dot
	}, {
		img: image_inventory,
		heading: "Workspace",
		subHeading: "Taxes",
		imgDot: image_dot
	}]

	const [state, setState] = React.useState({ right: false });

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	return (
		<>
			<div className='document-container'>
				<Grid container justify="center" spacing={2}>
					{data.map(({ img, heading, subHeading, imgDot }) => {
						return (<>
							<Grid item xs={6} sm={4}>
								<Paper className='document-paper' >
									<div className='document-paper-container'>
										<div className='image-container-image_inventory' >
											<img src={img} alt="image_inventory" />
										</div>
										<div className='document-paper-heading'>
											<p >{heading}</p>
											<p >{subHeading}</p>
										</div>
									</div>
									<div className='document-paper-image_dot'>
										<img src={imgDot} alt="image_dot" />
									</div>
								</Paper>
							</Grid>
						</>)
					})
					}
				</Grid>
			</div>
			<div>
				{['right'].map((anchor) => (
					<React.Fragment key={anchor}>
						<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
						<Drawer
							anchor='right'
							// open={state[anchor]}
							open={true}
							onClose={toggleDrawer(anchor, false)}
							variant="persistent"
							className='MuiDrawer-docked'
						>
							<div className='Drawer-header'>
								<div className='Drawer-header-title'>
									<h3>Taxes</h3>
								</div>
								<div className='Drawer-header-button'>
									<button>Add board</button>
									<button>X</button>
								</div>
							</div>
						</Drawer>
					</React.Fragment>
				))}
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



