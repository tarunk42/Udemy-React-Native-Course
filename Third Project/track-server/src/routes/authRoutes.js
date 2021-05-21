const express = require('express');                                     // Step:2
const mongoose = require('mongoose');                                   // Step:4
const User = mongoose.model('User');                                    // Step:4

const router = express.Router();                                        // Step:2

router.post('/signup', async (req, res) => {
// router.post('/signup',  (req, res) => {                             // Step:2

    const { email, password } = req.body;                               // Step:4

    // const user = new User({ email, password });                     // Step:4
    // await user.save();                                              // Step:4
    // res.send('You made a post request');                            // Step:4

    try {                                                              // Error Handling Step:5
        const user = new User({ email, password });
        await user.save();

        res.send('You made a post request');
    } catch (err) {
        return res.status(422).send(err.message);
    }
    console.log(req.body);                                             // Step:3
    // res.send('You made a post request!');                           // Step:2
}); 

module.exports = router;                                                // Step:2