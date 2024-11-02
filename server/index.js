import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { AuthRouter } from './routes/auth.route.js'
import {PetRouter} from './routes/pet.route.js'
import { OrderRouter } from './routes/Order.route.js'
import { ProductRouter } from './routes/Product.route.js'
import path from 'path';

const app = express()   //creating app
dotenv.config()
const port = process.env.PORT || 4000;
// transfer fetched data from frontend in json format
app.use(express.json())
app.use(cors(
{
origin:["https://fidofinder-frontend.vercel.app/FidoFinder"],
methods:["POST","GET","PATCH","PUT"],
credentials:true
}
));
app.use(cookieParser())
app.use(AuthRouter)
app.use(PetRouter)
app.use(ProductRouter)
app.use(OrderRouter)

// Serve the favicon.ico file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'favicon.ico'), (err) => {
    if (err) {
      console.error("Error serving favicon:", err);
      res.status(err.status || 500).send("Favicon not found");
    }
  });
});

//connection can be done in seperate file but we are doinfg it here
mongoose.connect('mongodb+srv://iamsanyamchoudhary:<fidofinder@123>@cluster0.4gwj4fk.mongodb.net/fidofinder?retryWrites=true&w=majority&appName=Cluster0')

app.listen(port,()=>{
    console.log("Server is Running")
})
