const express=require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const path = require('path');
const app=express(); //creates our express app
const {db} = require('./models');

//boiler plate code to set up
app.use(morgan("dev")); // loggin middlewear
app.use(express.static(path.join(__dirname,"./public"))); //middlewear that sets up path directory
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const layout = require('./views/layout') //

app.get('/',(req,res)=>{
    //res.send(layout('passed into content function'));
    res.redirect('/wiki');
});

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
// ...
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);


module.exports = app;