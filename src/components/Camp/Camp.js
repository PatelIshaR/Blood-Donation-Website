import React from 'react'
// import './Camp.css'
import '../blood/blood.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
// import { Component } from 'react';

function Camp() {

  const[camp, setCamp] = useState([''])


  function handleSubmit(e){
    e.preventDefault();
    axios.get("http://localhost:5000/camps/search")
      .then(function(response){
        console.log(response)
        setCamp(response.data)
      })
      .catch(function(error){
        console.log(error)
      })
  }
  
  const display = camp.map((item)=>{
    return(
      <>
      <div className='card-deck'>
        <div className='row'>
        <div className='col-sm-6'>
      <div className='card' style={{width: '40rem', height:'15rem', padding:'1.5rem'}}>
        <h4> Name: {item.name} </h4>
        <h5> Address: {item.address}</h5>
        <h5> State: {item.state}</h5>
        <h5> City: {item.city}</h5>
        <h5> Description: {item.description}</h5>
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
                    <div className='container'>
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
                    {/* </div>
                    </div>
                    
                
            </div>
        </section> */}
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
 export default Camp

// import React from 'react'
// import { useState } from "react";
// import './Camp.css';
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from '../Navbar/Navbar';


// const Camp = () => {
//   const [data, setData] = useState({
//     name: "",
// 		address: "",
//     city: "",
// 		state: "",
// 		description: ""
// 	});

//   const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
//     // console.log(data)
// 	};

//   const handleSubmit = async (e) => {
// 		e.preventDefault();
//     console.log(data)
// 			const url = "http://localhost:5000/camps";
// 			const { data: res } = await axios.post(url, data);

// 			console.log(res.message);
	
// 	};
  
//   return (
//     <>
//     <Navbar />
//     <div className='container'>
//       <section className='singup'>
//         <div className='signup-content'>
//           <h2 className='form-title'>Add Blood Camp</h2>
//           <form method="POST" className='register-form' id="register-form" onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor="name"></label>
//               <input type="text" name="name" id="name" placeholder="Blood Camp Name" onChange={handleChange} value={data.name}/>
//             </div>
//             <div className='form-group'>
//               <label htmlFor="address"></label>
//               <input type="text" name="address" id="address" placeholder="Address" onChange={handleChange} value={data.address}/>
//             </div>
//             <div className='form-group'>
//               <label htmlFor="city"></label>
//               <input type="text" name="city" id="city" placeholder="City" onChange={handleChange} value={data.city}/>
//             </div>
//             <div className='form-group'>
//               <label htmlFor="state"></label>
//               <input type="text" name="state" id="state" placeholder="State" onChange={handleChange} value={data.state}/>
//             </div>
//             <div className='form-group'>
//               <label htmlFor="description"></label>
//               <input type="text" name="description" id="description" placeholder="Description" onChange={handleChange} value={data.description}/>
//             </div>
//             <div className='form-group form-button'>
//               <input type="submit" name="add" id="add" className='form-submit' value="Add Blood Camp"/>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//     {/* <div className='container'>

//       <table className='table-responsive table-bordered ' >
//         <tbody>
//           <tr>
//             <th colSpan={3} className='mainRow'>Compatible Blood Type Donors</th>
//           </tr>
//           <tr>
//             <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Blood Type</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
//             <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Donate Blood To</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
//             <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Receive Blood From</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>A+</b></span></td>
//             <td>A+ AB+</td>
//             <td>A+ A- O+ O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>O+</b></span></td>
//             <td>O+ A+ B+ AB+</td>
//             <td>O+ O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>B+</b></span></td>
//             <td>B+ AB+</td>
//             <td>B+ B- O+ O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>AB+</b></span></td>
//             <td>AB+</td>
//             <td>Everyone</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>A-</b></span></td>
//             <td>A+ A- AB+ AB-</td>
//             <td>A- O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>O-</b></span></td>
//             <td>Everyone</td>
//             <td>O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>B-</b></span></td>
//             <td>B+ B- AB+ AB-</td>
//             <td>B- O-</td>
//           </tr>
//           <tr>
//             <td><span className='sStyle'><b>AB-</b></span></td>
//             <td>AB+ AB-</td>
//             <td>AB- A- B- O-</td>
//           </tr>
//         </tbody>
//       </table>
    
//   </div> */}
//     </>
//   )
// }
//  export default Camp
