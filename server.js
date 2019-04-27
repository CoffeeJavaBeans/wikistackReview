
const http= require('http');
const app=require('./app');
const server=http.createServer(app);



// app.get('/',(req,res)=>{
//     res.send('still working!');
// }) 

let PORT=3000;
server.listen(PORT, function(){
    console.log(`Great news! I am actually istening on port ${PORT}...`);
});