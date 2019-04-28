const express= require('express');
const router=express.Router();
const {Page, User} = require('../models')
const { addPage, editPage, main, userList, userPages, wikiPage} = require('../views');

router.get('/',async(req,res,next)=>{
    //res.send('got to get /wiki/');
    try{
        const pages= await Page.findAll();
        res.send(main(pages));
    }catch(error){
        next(error);
    }
});

router.post('/', async(req,res,next)=>{
    //res.send('got to get /wiki/');
    //res.json(req.body);
    const page= new Page(req.body);
    //console.log(req.body);
    //req.body could be broken down into a object but since we named the properties the same
    //in our html form as our database ie {title: req.body.title , auther: req.body.autor...}
    try{
        const [user,wasCreated] = await User.findOrCreate({
            where: {
            name: req.body.name,
            email: req.body.email
            }
        });
        await page.save();
        page.setAuthor(user);
        res.redirect(`/wiki/${page.slug}`);
    }catch(error){next(error)}
});

router.get('/add',(req,res,next)=>{
    res.send(addPage());
});

router.get('/:slug', async(req, res, next) => {
    try{
     const page=await Page.findOne({
         where: {
             slug: req.params.slug
         }
     });
     const author= await page.getAuthor();
     res.send(wikiPage(page,author));
    }catch(error){ 
        next(error)
    }
});
module.exports=router;


