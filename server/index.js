import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AuthRouter } from './routes/auth.route.js'
import {PetRouter} from './routes/pet.route.js'
import { OrderRouter } from './routes/Order.route.js'
import { ProductRouter } from './routes/Product.route.js'

const app = express()   //creating app
dotenv.config()
const port = process.env.PORT || 4000;
// transfer fetched data from frontend in json format
const corsOptions = {
  origin: "https://fidofinder-frontend.vercel.app",  // Allowed origin
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],  // Allowed methods, including OPTIONS
  allowedHeaders: ["Content-Type", "Authorization"],  // Explicitly allowed headers
  credentials: true  // Allow cookies if needed
};

app.options('*', cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

app.use(AuthRouter)
app.use(PetRouter)
app.use(ProductRouter)
app.use(OrderRouter)

//connection can be done in seperate file but we are doinfg it here
mongoose.connect('mongodb+srv://iamsanyamchoudhary:A5vIIggw3uTA83tz@fido.q9zue.mongodb.net/Ffido?retryWrites=true&w=majority&appName=fido', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

app.get("/",(req,res)=>{
  res.json("Hello")
})
app.listen(port,()=>{
    console.log("Server is Running")
})
