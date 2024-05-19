import React from 'react';
//Side bar icons
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



export const SidebarData=[
    {
        title:"Your Profile",
        icon:<AccountBoxIcon />,
        link:"/home"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon />,
        link:"/dashboard"
    },
    {
        title:"Sign out",
        icon:<PowerSettingsNewIcon />,
        link: "/signout"
    },
];




