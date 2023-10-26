import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '../src/components/WelcomePage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App