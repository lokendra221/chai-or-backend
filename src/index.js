 // require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();













/*
import express from "express";
const app = express();

( async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on('error', (error)=>{
        console.error('Failed to connect to MongoDB' ,error);
        throw error;
       });
       app.listen(porocess.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
     } )
    }catch(e){
        console.log("Error : ",e)
        throw err
    }
})()
*/