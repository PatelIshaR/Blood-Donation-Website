import React from 'react'
import './blood.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
// import { Component } from 'react';

function Blood() {

  const[bank, setBank] = useState(['search'])


  function handleSubmit(e){
    e.preventDefault();
    axios.get("http://localhost:5000/banks/search")
      .then(function(response){
        console.log(response)
        setBank(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
  }
  
  const display = bank.map((item)=>{
    return(
      <>
      <div className='card-deck'>
        <div className='row'>
        <div className='col-sm-6'>
      <div className='card' style={{width: '50rem', height:'15rem', padding:'1.5rem'}}>
        <h5> {item.address}</h5>
        <h4> {item.contact}</h4>
        </div>
        </div>
      </div>
      </div>
      </>
    )
  })

  // useEffect(() => {
  //   fetch('http://localhost:5000/banks/search')
  //     .then((res) => res.json())
  //     .then((jsonRes) => setBank(jsonRes))
  // }, [])
  

  return (
    <>
    
    <Navbar />
      <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        {/* <h2 class="form-title">Sign up</h2> */}
                        <form method="POST" class="register-form" id="register-form" onSubmit={handleSubmit}>
                            {/* <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="state" id="state" placeholder="state" />
                            </div>
                            <div class="form-group">
                                <label for="gender"><i class="zmdi zmdi-email"></i></label>
                                <input type="text" name="city" id="city" placeholder="city" />
                            </div>
                            <div class="form-group">
                                <label for="age"><i class="zmdi zmdi-lock"></i></label>
                                <input type="text" name="bloodtype" id="bloodtype" placeholder="blood group"/>
                            </div> */}
                            
                            {/* <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div> */}
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="search"/>
                            </div>
                        </form>
                    </div>
                    </div>
                    
                
            </div>
        </section>
        <div className='box'>
        {display}
        </div>
{/* 
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            {bank.map((item) => {
              <h5 class="card-title">Address: {item.address}</h5>
            })}
          </div>
        </div> */}
    
        
    </>
  );

  
}
 export default Blood
