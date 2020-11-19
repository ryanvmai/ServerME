const router = require('express').Router();
const User = require('./../models/user.model');
const bcrypt = require('bcrypt');

router.route('/').get(async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

    try {
        const user = await User.findOne({username: req.body.username}).exec();
        console.log(user);
        if(!user) {
            res.status(400).json('The username does not exist');
        }
        if(!bcrypt.compareSync(password, user.password)) {
            res.status(400).json('The password is invalid');
        }
        res.json('Username and password are correct');
    } catch {
        res.status(400).json(err);
    }

});

module.exports = router;