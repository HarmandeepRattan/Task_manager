const {Schema,model, mongo, default: mongoose}= require('mongoose')
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Low"
    },
    status:{
        type:String,
        enum:["Pending","Complete","In Progress"],
        default:"Pending"
    },
    dueDate:{
        type:Date,
        required:true,
    },
    assignedTo:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    ],
    createdBy:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    attachments:[
        {
            type:String,
        },
    ],
    todoChecklist:[todoSchema],

    progress:{type:Number,default:0},
},{timestamps:true})
const task = mongoose.model("Task",taskSchema)
module.exports=task