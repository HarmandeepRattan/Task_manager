const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectdb = require('./config/db')


dotenv.config();
connectdb();
// Middleware to handle cors
const cors = require('cors')
app.use(cors({
    origin:process.env.FRONT_END_URL || "http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

// Middleware to handle JSON object in req body
app.use(express.json())

app.listen(8080,()=>{
    console.log("server is running");
    
})