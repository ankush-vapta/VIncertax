import React, { useState } from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import './workspace.css'
import { sidebarpng } from '../../assets/config'
import { Link } from 'react-router-dom';

export const Workspace = () => {

	const SidebarData = [
		{
			title: "About Us",
			path: "/about-us",
			icon: <MapOutlinedIcon />,
		},
		{
			title: "Services",
			path: "/services",
			icon: <StackedLineChartOutlinedIcon />,
		},
		{
			title: "Contact",
			path: "/contact",
			icon: <MultipleStopOutlinedIcon />,
		},
		{
			title: "Events",
			path: "/events",
			icon: <PeopleOutlinedIcon />,
		},
		{
			title: "Support",
			path: "/support",
			icon: <FileCopyOutlinedIcon />,
		},
		{
			title: "Support",
			path: "/support",
			icon: <ChatBubbleOutlineOutlinedIcon />,
		},
		{
			title: "Support",
			path: "/support",
			icon: <NotificationsActiveOutlinedIcon />,
		},
		{
			title: "Support",
			path: "/support",
			icon: <SettingsSuggestOutlinedIcon />,
		},
	];
	return (
		<>
			<div className='workspace-container'>
				<nav className='sidebar-nav open '>
					<div className='sidebar-nav-container'>
						<div className='sidebar-link image-container'>
							<img src={sidebarpng} alt="" />
						</div>
						{SidebarData.map((item, index) => {
							return (
								<>
									<Link to={item.path} className='sidebar-link'>
										<div>{item.icon}</div>
										<div className='sidebar-label'>{item.title}</div>
									</Link></>
							);
						})}
					</div>
				</nav>
			</div>
		</>
	)
}


