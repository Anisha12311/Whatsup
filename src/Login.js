import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
     auth.signInWithPopup(provider)
     .then(result =>{
      console.log(result)
      dispatch({
        type: actionTypes.SET_USER,
        user:result.user,
      })}
      )
    .catch((error) => alert(error.message))
    }
  return (
    <div className = "login">
      <div className = "login__container">
        <img src = "https://speedyclearance.uk/wp-content/uploads/2018/04/whatsapp-icon.png"/>
        <div className = "login__text">
<h1> Sign in to WhatsApp</h1>
        </div>
        <Button type = "submit" onClick= {signIn}>
            Sign In With Google
        </Button>
      </div>
    </div>
  )
}

export default Login
