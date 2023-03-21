import { Avatar } from '@mui/material'
import React , {useState} from 'react'
import './Chat.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
function Chat() {
  const [input,setInput] = useState()

  const sendMessage= () => {

  }
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
    This is the message

    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
    </p>  
    <p className= ' chat__message chat__receiver'>
    <span className='chat__name'>Anisha</span>
    This is the message
    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
    </p> 
     </div>
     <div className='chat__footer'>
<InsertEmoticonIcon/>
<form>
  <input 
  onChange={(e) => setInput(e.target.value)}
  placeholder = "Type a message"
  type = "text"
  />
  <button onClick={sendMessage} type = "submit"><SendIcon/></button>
</form>
<MicIcon/>
     </div>
    </div>
  )
}

export default Chat
