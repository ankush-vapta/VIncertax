import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import './workspace.css'
import { Link } from 'react-router-dom';

export const Workspace = () => {


	const SidebarDataOptions = () => {
		const SidebarData = [
			{
				title: "Documents",
				path: "/documents",
				icon: <MapOutlinedIcon />,
			},
			{
				title: "Search",
				path: "/search",
				icon: <StackedLineChartOutlinedIcon />,
			},
			{
				title: "Projects",
				path: "/projects",
				icon: <MultipleStopOutlinedIcon />,
			},
			{
				title: "People",
				path: "/people",
				icon: <PeopleOutlinedIcon />,
			},
			{
				title: "Invoices",
				path: "/invoices",
				icon: <FileCopyOutlinedIcon />,
			},
			{
				title: "Chat",
				path: "/chat",
				icon: <ChatBubbleOutlineOutlinedIcon />,
			},
			{
				title: "Notifications",
				path: "/notifications",
				icon: <NotificationsActiveOutlinedIcon />,
			}
		];

		if (SidebarData.length > 6) {
			SidebarData.unshift({
				title: "Settings",
				path: "/settings",
				icon: <SettingsSuggestOutlinedIcon />,
			})
		}
		return SidebarData;
	};
	const SidebarDataOption = SidebarDataOptions();
	return (
		<>
			<div className='workspace-container'>
				<nav className='sidebar-nav open '>
					<div className='sidebar-nav-container'>
						{SidebarDataOption.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<Link to={item.path} className='sidebar-link'>
										<div>{item.icon}</div>
										<div className='sidebar-label'>{item.title}</div>
									</Link>
								</React.Fragment>
							);
						})}
					</div>
				</nav>
			</div>
		</>
	)
}


