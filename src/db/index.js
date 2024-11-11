import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{

    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
    } catch(e){
        console.log("MOOGODB CONNECTION ERROR", e);
        process.exit(1);
    }
}

export default connectDB;