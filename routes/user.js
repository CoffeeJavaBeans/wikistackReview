const express= require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.send('got to get /user/');
});


router.post('/',(req,res,next)=>{
    res.send('got to get /user/');
});

router.get('/add',(req,res,next)=>{
    res.send('got to get /user/add');
});

module.exports=router;
