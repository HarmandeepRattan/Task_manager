// import bcryptjs from "bcryptjs"
const bcryptjs = require('bcryptjs')
const user = require('../models/userModel')
const signup = async(req,res)=>{
    const {name,email,password,profileImage,adminJoinCode} = req.body
    if(!name || !email || !password || name===""|| password==="" ||email===""){
        res.send({statuscode:400, message:"all fields are required"})
    }

    // check if user already exists
    const isAlreadyExist = await user.findOne({email})

    if(isAlreadyExist){
        res.send({statuscode:0, success:false, message:"User already exists"})
    }

    
    // check user role 
    let role="user"

    if(adminJoinCode && adminJoinCode === process.env.ADMIN_JOIN_CODE){
        role="admin"
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new user({name,email,password:hashedPassword,profileImage,role})

    try{
        await newUser.save()
        res.send({statuscode:1,message:"Signup successful"})
    }catch(err){
        console.log(err);
    }
}
module.exports={signup}