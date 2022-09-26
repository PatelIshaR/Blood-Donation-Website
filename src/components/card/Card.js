import React, { Component } from 'react'
import './card.css'

function Card(){
    return(
        <>
          <div className='container-box'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='icon'>
                    <img src='./images/bank.png'/>
                  </div>
                  <div className='heading'>
                    <h3>Blood Bank</h3>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='icon'>
                    {/* <img src='./images/check.png'/> */}
                    <i className='fas fa-user-alt'></i>
                  </div>
                  <div className='heading'>
                    <h3>Health Checkup</h3>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card'>
                  <div className='icon'>
                    <img src='./images/donation_1.png'/>
                  </div>
                  <div className='heading'>
                    <h3>Blood Donation Camp</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </>
    )
}

export default Card;