import { Avatar } from '@mui/material'
import React , {useState,useEffect}from 'react'
import db from './firebase';
import './SidebarChat.css'
import { Link } from "react-router-dom";
function SidebarChat({id,name,addNewChat}) {
  console.log("id",id)
 console.log("idname",name)
 const [seed,setSeed] = useState("")
 useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000))
 },[])

 const createChat = () => {
  const roomName = prompt("Please enter name")
  if(roomName) {
    db.collection("rooms").add({
      name:roomName
    })
  }
 }
  return !addNewChat ? (
    <Link to = {`/rooms/${id}`}>
    <div className = "sidebarChat">
      <Avatar src = {`https://api.dicebear.com/api/human/${seed}.svg`}/>
      <div className = "sidebarChat__info">
        <h2>{name}</h2>
        <p>This is message...</p>
      </div>
    </div>
    </Link>
  ):
  (
    <div className = "sidebarChat" onClick={createChat}>
      
      <div className = "sidebarChat__info">
        <h2>Add new Chat</h2>
        
      </div>
    </div>
  )
}

export default SidebarChat
