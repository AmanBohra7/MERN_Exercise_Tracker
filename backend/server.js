// importing lib
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// for dot var to save locally 
require('dotenv').config();

const app = express();
const port =  5000;

// making our app use these two 
app.use(cors());
app.use(express.json());

// database connection part
const uri = process.env.ATLAS_URI;
mongoose.connect(uri , {useNewUrlParser:true , useCreateIndex:true , useUnifiedTopology:true} );
const connection  = mongoose.connection;
connection.once('open' , () => {
    console.log("MongoDB database connection established successfully! ");
});

// creating the variables for import these files in the server files 
// creating these router vairables
const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');


// test
app.get('/test' , (req,res) => {
    res.json({
        message : "SUCCESS!"
    });
});


// we have to use the new route files
// when the user goes to root and then
// when /exercises then will load all to xerciseRouter
app.use('/exercises',exerciseRouter);
// when /users_one then will load all to userRouter
app.use('/users',userRouter);


// starting server
app.listen(port , () => {
    console.log(`Server running on port: ${port} `);
});