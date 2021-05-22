const express = require('express');                                     // Step:2
const mongoose = require('mongoose');                                   // Step:4
const jwt = require('jsonwebtoken');                                    // Creating JSON web token Step:6
const User = mongoose.model('User');                                    // Step:4

const router = express.Router();                                        // Step:2

router.post('/signup', async (req, res) => {

    const { email, password } = req.body;                               // Step:4

    try {                                                              // Error Handling Step:5
        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY' );       // Creating jwt token Step:6
        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message);
    }
}); 

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    } catch (err) {
        return res.status(422).send({ error: 'Invalid password or email'});
    }
});

module.exports = router;                                                // Step:2