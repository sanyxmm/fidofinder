import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

//connection can be done in seperate file but we are doinfg it here
mongoose.connect('mongodb+srv://iamsanyamchoudhary:A5vIIggw3uTA83tz@fido.q9zue.mongodb.net/Ffido?retryWrites=true&w=majority&appName=fido')
app.get("/",(req,res)=>{
  res.json("Hello")
})
app.listen(4000,()=>{
    console.log("Server is Running")
})
