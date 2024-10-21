import React, { useContext, useState } from "react";
import "./Login.css";
import Axios from 'axios'
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch} from 'react-redux';
import {setlogin,setsignup,setregPop} from '../StateMangement/cartSlice';
const Signup = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
// const navigate = useNavigate()
Axios.defaults.withCredentials =true;
const handleSubmit = (e) => {
  e.preventDefault();  //prevent default submission if u donst wrtie this u will face with error

  //axios is http request response library to go call our server side up
  //using post method to pass the data
  //here we write server side app url
  Axios.post('http://localhost:4000/auth/signup',formData).then(response =>{
    console.log(formData);
      if(response.data.status){
        dispatch(setsignup(true));
        dispatch(setlogin(true));
        dispatch(setregPop(true));
      }
      else
      setError(response.data.message)
  }).catch(err=>{
      console.log(err)
  })
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-container">
      <OutsideClickHandler onOutsideClick={() => dispatch(setsignup(false))} >
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Sign-Up</h1>

          <label> UserName: </label>
          <input
           
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email: </label>
          <input
           
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password: </label>
          <input
         
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "must contain uppercase, lowercase characters, and numbers"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          />
         
        {/* error */}
         {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>}
        <button type="submit">Sign up</button>

        <a onClick={()=>{ dispatch(setlogin(true));dispatch(setsignup(false))}}>Have a Account?Login</a>

        </form>
      </OutsideClickHandler>
    </div>
  );
};
export default Signup;
{/* <label>Confirm Password:</label>
          <input
            id="p2"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "must contain uppercase, lowercase characters, and numbers"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            required
          /> */}
 {/* {formData.password !== formData.confirmPassword && (
            <p id="redtext" style={{ fontSize: "15px", color: "red" }}>
              Passwords do not match
            </p>
          )} */}