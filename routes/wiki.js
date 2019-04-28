const express= require('express');
const router=express.Router();
const {Page, User} = require('../models')
const { addPage, editPage, main, userList, userPages, wikiPage} = require('../views');

router.get('/',(req,res,next)=>{
    res.send('got to get /wiki/');
});

router.post('/',async(req,res,next)=>{
    //res.send('got to get /wiki/');
    //res.json(req.body);
    const page= new Page(req.body);
    //req.body could be broken down into a object but since we named the properties the same
    //in our html form as our database ie {title: req.body.title , auther: req.body.autor...}
    try{
        await page.save();
        res.redirect('/');
    }catch(error){
        next(error)
    }
});

router.get('/add',(req,res,next)=>{
    res.send(addPage());
});


module.exports=router;


