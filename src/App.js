
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {

  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
{!user ? (
  <Login/>
)
:
<div className='app__body'>
      <BrowserRouter>
      <Sidebar />
        <Routes>
      
        <Route path="/rooms/:id" element = {<Chat />}/>
          <Route path="/app"/>
          
         
        </Routes>
      </BrowserRouter>
      </div>}
      
    </div>
  );
}

export default App;
