import React, { useState } from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import { Link } from "react-router-dom";
import './workspacehome.css'

export const Workspacehome = () => {
	return (
		<>
			<Sidebar />
		</>
	)
}

export const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<Link className='sidebar-link'
			// to={item.path}
			// onClick={item.subNav && showSubnav}
			>
				<div>{item.icon}<span className='sidebar-label'> {item.title}</span></div>
			</Link>
		</>
	);
};




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

export const Sidebar = () => {
	const [sidebar, setSidebar] = useState(true);

	return (
		<>
			<nav className='sidebar-nav open' sidebar={sidebar}>
				<div style={{ width: "100%" }}>
					{SidebarData.map((item, index) => {
						return (
							<SubMenu
								item={item}
								key={index}
							/>
						);
					})}
				</div>
			</nav>
		</>
	);
};