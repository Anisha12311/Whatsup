import { Avatar } from '@mui/material'
import React , {useState,useEffect}from 'react'
import db from './firebase';
import './SidebarChat.css'
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
function SidebarChat({id,name,addNewChat}) {
  console.log("id",id)
 console.log("idname",name)
 const [seed,setSeed] = useState("")
const [message,setMessage] = useState("")
 useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000))
 },[])
 useEffect(() => {
  if(id) {
    db.collection('rooms').doc(id).collection
    ('messages').orderBy('timestamp','desc')
    .onSnapshot((snapShot) => 
    setMessage(snapShot.docs.map((doc) => doc.data())))
  }
 },[id])
 const createChat = () => {
  const roomName = prompt("Please enter name")
  if(roomName) {
    db.collection("rooms").add({
      name:roomName
    })
  }
 }
  return !addNewChat ? (
    <Link style = {{textDecoration: "none",color : "black"}}to = {`/rooms/${id}`}>
    <div className = "sidebarChat">
      <Avatar src = {`https://api.dicebear.com/api/human/${seed}.svg`}/>
      <div className = "sidebarChat__info">
        <h2>{name}</h2>
        <p>{message[0]?.message}</p>
      </div>
    </div>
    </Link>
  ):
  (
    <div className = "sidebarChat" onClick={createChat}>
      
      <div className = "sidebarChat__info1">
        <AddIcon/>
        <h2>Add new Chat</h2>
        
      </div>
    </div>
  )
}

export default SidebarChat
