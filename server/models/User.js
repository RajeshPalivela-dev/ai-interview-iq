import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

        name:{
             type:String,
             require:true,
        },
        email:{
              type:String,
              require:true,
              lowercase:true,
              unique:true,
        },
        password:{
              type:String,
              require:true,
              min:6,
        },
        age:{
            type:Number,
            require:true,
            min:15,
            max:70,
        },
        phone:{
              type:String,
              
        }
})

export const User=mongoose.model("User",userSchema)