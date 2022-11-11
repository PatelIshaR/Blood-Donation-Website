const router = require('express').Router();
let Bank = require('../models/bloodbank.model');

router.route('/search').get((req,res) => {
    const state = 'Gujarat'
    const city = 'Surat'
    Bank.find({state: state})
        .then(bloodbank => res.json(bloodbank))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;