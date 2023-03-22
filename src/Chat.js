import { Avatar } from '@mui/material'
import React , {useState,useEffect} from 'react'
import './Chat.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import  db  from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import EmojiPicker,{EmojiStyle } from 'emoji-picker-react';



function Chat() {
  const [input,setInput] = useState()
  const {id} = useParams();
  const [roomName,setRoomName] = useState("")
  const [seed,setSeed] = useState("")
  const [mess,setMessage] = useState([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [{user},dispatch] = useStateValue();
  useEffect(() => {
   setSeed(Math.floor(Math.random() * 5000))
  },[id])
  useEffect(() => {
    console.log("ids",id)
    setShowEmojiPicker(showEmojiPicker)
   if(id){
    db.collection('rooms').doc(id).onSnapshot(snapshot => (
      setRoomName(snapshot.data().name)
    ))
    db.collection("rooms").doc(id).collection("messages")
    .orderBy('timestamp','asc').onSnapshot(snapshot => (
   //  snapshot.docs.map((doc) =>{console.log("data",doc.data())})
    setMessage(snapshot.docs.map(doc =>doc.data()))
    ))
   }
  },[id])
  console.log("message",mess)
  const sendMessage= (e) => {
    e.preventDefault();
    db.collection("rooms").doc(id).collection("messages")
    .add({
      message : input,
      name : user.displayName,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const handleEmojiClick = ( emojiObject,event) => {
    const emoji = emojiObject.emoji;
    console.log(emoji)
    setInput(input + emoji);
  };
  return (
    <div className='chat'>
   <div className = "chat__header">
    <Avatar src = {`https://api.dicebear.com/api/human/${seed}.svg`}/>
    <div className='chat__headerInfo'>
     <h3>{roomName}</h3>
     <p>Last seen {""}
     {new Date(mess[mess.length -1]?.timestamp?.toDate()).toUTCString()}
     </p>
    
    </div>
    <div className='chat__headerRight'>
     <SearchIcon/>
     <AttachFileIcon/>
     <MoreVertIcon/>
     </div>
   </div>
   <div className='chat__body'>
    {mess.map((message,i) => (
      <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`} key = {i}>
      <span className='chat__name'>{message.name}</span>
      {message.message}
      <span className='chat__timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
      
      </p> 
    ))}
    
     </div>
     {showEmojiPicker && (
  <EmojiPicker
  onEmojiClick={handleEmojiClick}
  disableAutoFocus={true} 
  height={300}
  width={860}
>
  <EmojiPicker.EmojiContainer previewPosition="top" />
</EmojiPicker>
)}
     <div className='chat__footer'>
<InsertEmoticonIcon  onClick={toggleEmojiPicker}/>

<form>
  <input 
  value = {input}
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
