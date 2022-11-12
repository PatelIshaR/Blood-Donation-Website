const router = require("express").Router();
const Camp = require("../models/bloodCamp.model");

router.route('/search').get((req,res) => {
    
    Camp.find({})
        .then(camp => res.json(camp))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;

// router.post("/", async (req, res) => {
// 	const state = req.body.state
//     const city = req.body.city
//     const address = req.body.address
//     const name = req.body.name
//     const description = req.body.description

//     const newCamp = new Camp({state,city,address,name,description})

//     newCamp.save()
//         .then(() => res.json('added'))
//         .catch(err => res.status(400).json({error: "failed"}))
	
// });

module.exports = router;

