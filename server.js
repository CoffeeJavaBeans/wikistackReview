
const http= require('http');
const {db, Page, User} = require('./models');
const app=require('./app');
const server=http.createServer(app);

let PORT=3000;

const init = async () =>{
    //await Page.sync();
    //await User.sync();
     //this drops all tables then recreates them based on our JS definitions
    //await db.sync({force: true})
    await db.sync({force:false})
    server.listen(PORT, function(){
        console.log(`Great news! I am actually istening on port ${PORT}...`);
    });
}

init();

