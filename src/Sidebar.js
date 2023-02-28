import React from 'react'
import './Sidebar.css'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div  className='Sidebar'>
        <div className='sidebar__header'>
            <Avatar/>
            <div className = 'sidebar__headerRight'>
                <DonutLargeIcon/>
                <ChatIcon/>
                <MoreVertIcon/>
            </div>
        </div>
        <div className = "sidebar__search">
            <div className = "sidebar__searchContainer">
                <SearchIcon/>
                <input type = "text" placeholder='Search '/>
            </div>
        </div>
        <div className = "sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar
