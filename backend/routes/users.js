const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( (req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
}  );

router.route('/add').post( (req,res) => {
    const username = req.body.username;
    console.log(username);
    const newUser = new User({username});
    newUser.save()
        .then( () => res.json('User added!') )
        .catch(err => res.status(400).json('Error: '+err));
} ) ;

// module exports are the instructions that tells node.js which bits
// of code (function,objects,string,etc) to 'export' from a give file
// so other files are allowed to access the exported code
module.exports = router;