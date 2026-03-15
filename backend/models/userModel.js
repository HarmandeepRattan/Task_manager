const {Schema,model, default: mongoose}=require('mongoose')
const userSchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    profileImage:{
        type:String,
        default:""
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{timestamps:true}
)
const userModel=mongoose.model("User",userSchema)
module.exports=userModel