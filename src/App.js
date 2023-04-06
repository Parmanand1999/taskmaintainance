
import './App.css';
import React from 'react';
import Taskmaintainer from './Componant/Taskmaintainer';

import { Routes, Route } from 'react-router-dom';
import Signup from './Componant/forms/Sign';
import Login from './Componant/forms/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Taskmaintainer' element={<Taskmaintainer />} />
        <Route path='/Signup' element={< Signup/>} />
      </Routes>
    </>
  );
}

export default App;
