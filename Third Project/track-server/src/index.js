require('./models/User');                                               // Step:4 
require('./models/Track');
const express = require('express');                                     // Express API library import Step:0
const mongoose = require('mongoose');                                   // MongoDB library import Step:1
const bodyParser = require('body-parser');                              // Handling JSON data Step:3
const authRoutes = require('./routes/authRoutes');                      // Authentication Step:2
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');               // JWT token user authentication

const app = express();                                                  // Express API Init Step: 0

app.use(bodyParser.json());                                             // JSON data parser Step:3
app.use(authRoutes);                                                    // Authentication Step:2
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://theAdmin:passwordpassword@cluster0.gmcqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;           // MongoDB cluster connection URI Step:1 

mongoose.connect(mongoUri, {                                            // MongoDB connect to express API Step:1
    useNewUrlParser: true,
    useCreateIndex: true 
});

mongoose.connection.on('connected', () => {                             // MongoDB successsful connection check Step:1
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {                              // MongoDB unsuccessful connection error message Step:1
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {                                               // Express API get request for testing Step:0
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {                                                   // Express API listener at port 3000 ( if 3000 is not available try something else) Step:0
    console.log("Listening to port 3000");
}); 