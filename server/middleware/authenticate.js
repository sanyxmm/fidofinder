import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '../models/User.js';
dotenv.config()
const authenticate = async(req, res, next) => {
  try {

      // console.log("Body", req.body.token);
      // console.log("Cookies", req.cookies.token);
      // console.log("Header", req.header("authorization"));

      const token = req.body.token || req.cookies.token ;

      if(!token || token === undefined) {
          return res.status(401).json({
              success:false,
              message:'Token Missing'
          });
      }
      // verify the token 
      try {
        //   const decode = jwt.verify(token, process.env.KEY);
        //   req.user = decode;
        //   console.log(req.user.id)
        const decode = jwt.verify(token, process.env.KEY);
        const userId = decode.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
              success: false,
              message: "User not found"
            });
          }
    
          req.user = user; // Set the req.user object to the user's data
        //   console.log(req.user)
      }
      catch (e) {
          return res.status(401).json({
              success: false,
              message: "token is invalid"
          })
      }

      next();
  }
  catch (err) {
      console.log(err)
      return res.status(401).json({
          success: false,
          message: "Please Login to Continue"
      })
  }
}

export {authenticate};

 
