 // require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000)
    console.log(`server listening on port ${process.env.PORT}`)
})
.catch((err) => {
    console.log("mongo db connection failed", err);
})












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