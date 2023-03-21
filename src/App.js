
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React from 'react';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className='app__body'>
      <BrowserRouter>
      <Sidebar />
        <Routes>
      
        <Route path="/rooms/:id" element = {<Chat />}/>
          <Route path="/app"/>
          
         
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
