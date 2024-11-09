import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router();
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { authenticate } from "../middleware/authenticate.js";
dotenv.config()
router.post('/signup',async (req,res) =>{
    const {username,email,password} =req.body;
    const user  = await User.findOne({email})
    if(!username || !password || !email)
      return res.json({message:"Please fill all the required fields"})
    else if(user){
        return res.json({message:"user already existed"})
    }

    //hash the password
    const hashpassword = await bcryt.hash(password,10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,
    })

    await newUser.save();
    return res.json({status:true, message:"record Registered"})
})
router.post('/login',async(req,res)=>{
    const{email,password} = req.body;
    const user = await User.findOne({email})
   if(!user){
        return res.json({message:"user is not registerd"})
   }
    const validPassword = await bcryt.compare(password,user.password)
    if(!validPassword){
        return res.json({message:"passwrod is incorrect"})
    }
    const token = jwt.sign({id:user._id},process.env.KEY,{expiresIn:'1hr'})
   res.cookie('token', token, {
  httpOnly: true, // Prevents JavaScript from accessing the token
  secure:  true, // Only send cookies over HTTPS 
  maxAge: 360000, // 
  sameSite: 'None' // Required for cross-origin requests (e.g., in production)
});
    return res.json({status:true,message:"login succesfully"})
})
router.post('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the cookie
  return res.json({ status: true, message: "Logged out successfully" });
});
router.post('/forgot-password',async(req,res)=>{
    const{email} = req.body; 
    try{
        const user = await User.findOne({email})
        if( !email)
          return res.json({message:"Please fill all the required fields"})
        else if(!user){
            return res.json({message:"user not registred"})
        }

        const token = jwt.sign({id:user._id},process.env.KEY,{expiresIn:'5m'})
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'iamsanyamchoudhary@gmail.com',
            pass: 'clameeyowiinqaaw'
          }
        });  
        var mailOptions = {
          from: 'iamsanyamchoudhary@gmail.com',
          to: email,
          subject: 'Reset Password',
          text: `http://localhost:5173/resetPassword/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            return res.json({message:"email sending  not sent"});
          } 
          else {
            return res.json({status:true,message:"email sent"})
          }
        });
    }
    catch(err){
        console.log(err)
    } 
})   
router.post('/reset-password/:token',async(req,res)=>{
  const {token} = req.params;
  const {password} = req.body;

  try{
    const decoded = await jwt.verify(token,process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bcryt.hash(password,10);
    await User.findByIdAndUpdate({_id:id} , {password:hashPassword})
    return res.json({status:true,message:"updated password"})
  }
  catch(err){
    return res.json({message:"invalid token"})
  }
})
router.get("/user-details",authenticate, async (req, res) => {
  try {
    const username = req.user.username;
    const user = await User.findOne({ username });
   
    if (!user) {
      return res.status(404).json({ error: "User  not found" });
    }
    res.status(200).json({ user });
 
}
  catch (error) {
    res.status(500).json({ error: "user search failed" });
  }
});
export {router as AuthRouter}
