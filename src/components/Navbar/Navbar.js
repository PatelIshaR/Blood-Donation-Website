// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//         <Link to="/" className="navbar-brand">ExcerTracker</Link>
//         <div className="collpase navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="navbar-item">
//           <Link to="/" className="nav-link">Exercises</Link>
//           </li>
//           <li className="navbar-item">
//           <Link to="/create" className="nav-link">Create Exercise Log</Link>
//           </li>
//           <li className="navbar-item">
//           <Link to="/user" className="nav-link">Create User</Link>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     );
//   }
// }


import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import './Navbar.css';
import { Link } from "react-router-dom";
 
class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <img src='./images/logo1.png' alt=""></img>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li class="nav-item">
                        <Link to="/" class="nav-link" style={{color: '#c6414c'}}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link" style={{color: '#c6414c'}}>About us</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/blood" class="nav-link" style={{color: '#c6414c'}}>Looking for blood</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link" style={{color: '#c6414c'}}>Donor login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/camp" class="nav-link" style={{color: '#c6414c'}}>Blood camp</Link>
                    </li>    
                </ul>
            </nav>
        
        )
    }
}

export default Navbar 