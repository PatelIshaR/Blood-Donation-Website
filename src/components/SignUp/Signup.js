import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;


// import React, { Component } from 'react';
// // import '../SignUpForm/signup.css';
// // import '../SignUpForm/sign'
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';

// export default class Signup extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeGender = this.onChangeGender.bind(this);
//     this.onChangeAge = this.onChangeAge.bind(this);
//     this.onChangeMobile = this.onChangeMobile.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       gender: '',
//       age: '',
//       mobile: '',
//       email: '',
//       password: ''
//     }
//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangeGender(e) {
//     this.setState({
//       gender: e.target.value
//     })
//   }

//   onChangeAge(e) {
//     this.setState({
//       age: e.target.value
//     })
//   }

//   onChangeMobile(e) {
//     this.setState({
//       mobile: e.target.value
//     })
//   }

//   onChangeEmail(e) {
//     this.setState({
//       email: e.target.value
//     })
//   }

//   onChangePassword(e) {
//     this.setState({
//       password: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const user = {
//       username: this.state.username,
//       gender: this.state.gender,
//       age: this.state.age,
//       mobile: this.state.mobile,
//       email: this.state.email,
//       password: this.state.password
//     }

//     console.log(user);

//     axios.post('http://localhost:5000/users/add', user)
//       .then(res => console.log(res.data));

//       window.location.href = "/login"
//     this.setState({
//       username: '',
//       gender: '',
//       age: '',
//       mobile: '',
//       email: '',
//       password: '',
//     })
//   }

//   render() {
//     return (
//       <section class="signup">
//             <div class="container">
//                 <div class="signup-content">
//                     <div class="signup-form">
//                         <h2 class="form-title">Sign up</h2>
//                         <form method="POST" class="register-form" id="register-form" onSubmit={this.onSubmit}>
//                             <div class="form-group">
//                                 <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
//                                 <input type="text" name="name" id="name" placeholder="Your Name" value={this.state.username}
//                 onChange={this.onChangeUsername}/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="gender"><i class="zmdi zmdi-email"></i></label>
//                                 <input type="text" name="gender" id="gender" placeholder="Your gender" value={this.state.gender}
//                 onChange={this.onChangeGender}/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="age"><i class="zmdi zmdi-lock"></i></label>
//                                 <input type="text" name="age" id="age" placeholder="age" value={this.state.age}
//                 onChange={this.onChangeAge}/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
//                                 <input type="mobile" name="mobile" id="mobile" placeholder="mobile" value={this.state.mobile}
//                 onChange={this.onChangeMobile}/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
//                                 <input type="email" name="email" id="email" placeholder="email" value={this.state.email}
//                 onChange={this.onChangeEmail}/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="password"><i class="zmdi zmdi-lock-outline"></i></label>
//                                 <input type="password" name="password" id="password" placeholder="password" value={this.state.password}
//                 onChange={this.onChangePassword}/>
//                             </div>
//                             {/* <div class="form-group">
//                                 <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
//                                 <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
//                             </div> */}
//                             <div class="form-group form-button">
//                                 <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
//                             </div>
//                         </form>
//                     </div>
//                     </div>
//                     <div class="signup-image">
//                         <figure><img src="images/blood-donation.jpg" alt="sing up image"/></figure>
//                         <NavLink to="/login" class="signup-image-link">I am already member</NavLink>
//                     </div>
                
//             </div>
//         </section>
//     )
//   }
// }