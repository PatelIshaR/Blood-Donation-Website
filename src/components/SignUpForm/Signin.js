import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import '../SignUpForm/signup.css';
// import '../SignUpForm/sign'
import { Navigate } from "react-router-dom";
import axios from 'axios';

export default class Signin extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
          }
    }
          onChangeEmail(e) {
            this.setState({
              email: e.target.value
            })
          }

          onChangePassword(e) {
            this.setState({
              password: e.target.value
            })
          }
        
          onSubmit(e) {
            e.preventDefault();
        
            const user = {
              email: this.state.email,
              password: this.state.password
            }

            console.log(user);

    axios.post('http://localhost:5000/users/signin', user)
      .then(res => console.log(res.data));
      
      window.location.href = "/";
    

      this.setState({
        email: '',
        password: '',
      })

      
      
    }

    render() {
        return(
            <>
            <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src="images/signin-image.jpg" alt="sing up image"/></figure>
                        <NavLink to="/signup" class="signup-image-link">Create an account</NavLink>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name" value={this.state.email}
                onChange={this.onChangeEmail}/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" value={this.state.password}
                onChange={this.onChangePassword}/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    }
}