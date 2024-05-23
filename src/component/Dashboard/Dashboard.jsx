import React from 'react';
import { Outlet } from 'react-router-dom';
import { Workspace } from './Workspace'

const DashboardLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Workspace />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
