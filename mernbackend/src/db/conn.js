const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DB=process.env.LOCAL_DATABASE;

mongoose.connect(DB,{

 useNewUrlParser: true,
 
  useUnifiedTopology: true
  
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log(err);
})