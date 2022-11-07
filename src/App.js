import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/home/Home"
import Herosection from './components/herosection/Herocection';
import Card from './components/card/Card';
import Signup from './components/SignUpForm/Signup';
import About from './components/About Us/About';
import Blood from './components/blood/Blood';
import Camp from './components/Camp/Camp';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
      <Navbar />
      <Routes>
       <Route path="/" index element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/blood" element={<Blood/>} />
       <Route path="/login" element={<Signup/>} />
       <Route path="/camp" element={<Camp/>} />
      </Routes>
      </>
    )
  );
}

export default App;

