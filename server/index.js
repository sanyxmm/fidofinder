import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

//connection can be done in seperate file but we are doinfg it here
mongoose.connect('mongodb+srv://iamsanyamchoudhary:<fidofinder@123>@cluster0.4gwj4fk.mongodb.net/fidofinder?retryWrites=true&w=majority&appName=Cluster0')

app.get("/",(req,res)=>{
  res.json("Hello")
})
app.listen(4000,()=>{
    console.log("Server is Running")
})
