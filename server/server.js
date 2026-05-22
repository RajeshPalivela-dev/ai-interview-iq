import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import  cors from 'cors'
import mongoose from 'mongoose'

const app=express()
app.use(cors())


// const dns = require("dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]); // Use Google or Cloudflare DNS

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("dbconnected")
}).catch((err)=>{
    console.log(err)
})



 const port=process.env.PORT

 
app.listen(port,()=>{
    console.log(`server runing on ${port}`)
})