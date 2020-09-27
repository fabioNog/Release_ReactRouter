import React from 'react';


import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home'
import About from './components/about'

export default function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  )
}
