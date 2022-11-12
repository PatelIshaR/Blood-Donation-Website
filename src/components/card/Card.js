import React from 'react'
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
                  <p className='cardText'>Over the years, blood banking has helped save countless lives. Today, about 13.6 million units of blood are donated per year. About 36,000 units of blood are needed each day.<b><em>"Be the reason for someone's heartbeat."</em></b></p>
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
                  <p className='cardText'>Health check-ups are designed not only to detect medical issues, but also to identify risk factors and illnesses before they start to cause problems.A regular check-up can help in recovering your body from any health concerns.</p>
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
                  <p className='cardText'>Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life.This lifesaving care starts with one person making a generous donation. The need for blood is constant. </p>
                </div>
              </div>

            </div>
          </div>
          
        </>
    )
}

export default Card;