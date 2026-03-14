const mongoose = require('mongoose')
const connectdb =()=>{
    try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("database is connect");
    
    }catch(err){
        console.log(err);
        
    }

}
module.exports=connectdb
