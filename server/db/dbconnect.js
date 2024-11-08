import mongoose from "mongoose";
import dotenv from 'dotenv'

const MONGODB_URL = process.env.MONGODB_URL
  const dbConnect = async ()=>{
    try{
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true}
            )
      
            console.log("Connected to MongoDB");       
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
      }; 
  }

  export default dbConnect;