import React ,{useEffect,useState}from 'react'
import './Sidebar.css'

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';


function Sidebar() {

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
       
        db.collection("rooms").onSnapshot((snapshot) => 
        setRooms(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data:doc.data(),
            }))
        ))
      
    },[])
    console.log(rooms)
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
        <SidebarChat addNewChat />
            {rooms.map((room) =>(
              
                <SidebarChat key= {room.id} id={room.id} name={room.data.name} />
            ))}
        </div>
    </div>
  )
}

export default Sidebar
