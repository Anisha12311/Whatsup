import { Avatar } from '@mui/material'
import React from 'react'
import './Chat.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
function Chat() {
  return (
    <div className='chat'>
   <div className = "chat__header">
    <Avatar/>
    <div className='chat__headerInfo'>
     <h3>Room name</h3>
     <p>Last seen at....</p>
    
    </div>
    <div className='chat__headerRight'>
     <SearchIcon/>
     <AttachFileIcon/>
     <MoreVertIcon/>
     </div>
   </div>
   <div className='chat__body'>
<p className='chat__message'>
    <span className='chat__name'>Anisha</span>
    <span className='chat__timestamp'>{new Date().toDateString()}</span>
    </p>   </div>
    </div>
  )
}

export default Chat
