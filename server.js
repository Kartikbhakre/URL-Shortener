import express from 'express';
import mongoose from 'mongoose';
import dns from 'dns';
import { shortUrl , getOriginalUrl  } from './Controllers/url.js';


dns.setServers(['8.8.8.8','1.1.1.1']);

const app = express();

app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://kartikbhakre200_db_user:Efgp16wz8QTkZRW8@cluster0.zqoh51a.mongodb.net/' , {
    dbName:'Nodejs_mastery_course'
}).then(()=>console.log("mongodb connected")).catch((error)=>console.log(error));

// rendering the ejs file
app.get('/',(req , res)=>{
  res.render('index.ejs', {shortUrl:null});
})

// shorting url logic
app.post('/short',shortUrl);


// redirect to original url using short code :- dynamic routing

app.get('/:shortCode' ,getOriginalUrl )

const port = 1000 ;

app.listen(port , ()=>{
    console.log(`server is running on ${port}`);
})