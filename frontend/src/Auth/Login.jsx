import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css';
import { useDispatch} from 'react-redux';
import {setlogin,setsignup,setforgot,setlogchk,setlogPop} from '../StateMangement/cartSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
});
// const navigate = useNavigate()
Axios.defaults.withCredentials =true;
const handleSubmit = (e) => {
  e.preventDefault();  //prevent default submission if u donst wrtie this u will face with error

  //axios is http request response library to go call our server side up
  //using post method to pass the data
  //here we write server side app url
  Axios.post('https://fidofinder.onrender.com/login',formData).then(response =>{
      if(response.data.status){
        dispatch(setlogin(false))
        dispatch(setlogchk(true)) // update the loggedin state
        dispatch(setlogPop(true))
        // localStorage.setItem('token-info', JSON.stringify(response.data)); // store the token
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
      <div className='login-container'> 
      <OutsideClickHandler  onOutsideClick={() => dispatch(setlogin(false))}>

       <form className='login-form' onSubmit={handleSubmit}>
         <h1>Login</h1>

         <label htmlFor="">Email:</label>
         <input name="email" type="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
 
         <label htmlFor="">Password:</label>
         <input name="password" type="password" placeholder='********' value={formData.password} onChange={handleChange} required />

         {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>}
         <button type="submit">Sign in</button>
         
         <a onClick={() => {dispatch(setforgot(true));dispatch(setlogin(false))}}>Forgot Password?</a>
         <a onClick={()=>{dispatch(setsignup(true));dispatch(setlogin(false))}}>Don't have a Account? Sign up</a>
       </form>  

     </OutsideClickHandler>    
     </div>
  );
};

export default Login;
