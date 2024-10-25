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
// transfer fetched data from frontend in json format
app.use(express.json())
app.use(cors({
origin:["http://localhost:3000"],
credentials:true
}))
app.use(cookieParser())
app.use(AuthRouter)
app.use(PetRouter)
app.use(ProductRouter)
app.use(OrderRouter)
//connection can be done in seperate file but we are doinfg it here
mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})