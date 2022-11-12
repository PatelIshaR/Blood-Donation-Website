const router = require("express").Router();
const { User, validate } = require("../models/user.model");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;

// const router = require('express').Router();
// const { Navigate } = require('react-router-dom');
// let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' +err));
// });

// router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const gender = req.body.gender;
//     const age = req.body.age;
//     const mobile = req.body.mobile;
//     const email = req.body.email;
//     const password = req.body.password;

//     if(!username || !email || !gender || !age || !mobile || !password) {
//         return res.status(422).json({error: "please fill the field properly"});
//     }

//     User.findOne({email: email})
//         .then((userExist) => {
//             if(userExist) {
//                 return res.status(422).json({error: "Email already exist"});
//             }

//             const newUser = new User({username,gender,age,mobile,email,password});

//             newUser.save()
//                 .then(() => res.json('User added!'))
//                 .catch(err => res.status(400).json({error: "Failed to register"}));
//         }).catch(err => {console.log(err)});

// });

// //login route

// router.post('/signin', async (req, res) => {
//     // console.log(req.body);
//     try {
//         const {email, password} = req.body;

//         if(!email || !password) {
//             return res.status(400).json({error: "please fill the data"})
//         }

//         const userLogin = await User.findOne({ email: email, password: password});
//         // const isMatch = await User.match(password, userLogin.password);

//         if(!userLogin) {
//             res.send({error: "Invalid credential"});
            
//         } else {
//             res.send({message: "User signin successfully"});
//         }
        
//     } catch (err) {
//         console.log(err);
//     }
// })

// module.exports = router;