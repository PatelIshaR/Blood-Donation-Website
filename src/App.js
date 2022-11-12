import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';
import Home from "./components/home/Home"
import Login from './components/Login/login';
import Signup from './components/SignUp/Signup';
import About from './components/About Us/About';
import Blood from './components/blood/Blood';
import Camp from './components/Camp/Camp';

function App() {
  const user = localStorage.getItem("token")
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
      {/* <Navbar /> */}
      <Routes>
       {user&&<Route path="/home" exact element={<Home/>} />}
       <Route path="/about" element={<About/>} />
       <Route path="/blood" element={<Blood/>} />
       <Route path="/login" index element={<Login/>} />
       <Route path="/camp" element={<Camp/>} />   
       <Route path='/signup' element={<Signup />} /> 
       {/* <Route path="/home" element={<Navigate replace to="/login" />} />  
       <Route path="/blood" element={<Navigate replace to="/login" />} />                */}
      </Routes>
      </>
    )
  );
}

export default App;

