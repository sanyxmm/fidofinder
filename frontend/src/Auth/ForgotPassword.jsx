import React, { useState,useRef, useContext } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Axios from 'axios'
import './Login.css';
import { useDispatch} from 'react-redux';
import {setlogin,setforgot} from '../StateMangement/cartSlice';

const ForgotPassword = () => {
  const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
      email: '',
  });
  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
      });
  };
    const handleSubmit = (e) => {
    e.preventDefault();  //prevent default submission if u donst wrtie this u will face with error

    //axios is http request response library to go call our server side up
    //using post method to pass the data
    //here we write server side app url
    Axios.post('http://localhost:4000/forgot-password',formData).then(response =>{
       
        if(response.data.status)
        setError("check ur email for saved password link")
        else
        setError(response.data.message)
       
    }).catch(err=>{
        console.log(err)
    })
  };
    return (
        <div className='login-container'> 
        <OutsideClickHandler onOutsideClick={() => dispatch(setforgot(false))}>
  
         <form className='login-form' onSubmit={handleSubmit}>
           <h1>Forgot Password</h1>
  
           <label htmlFor="">Email:</label>
           <input name="email" type="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
           {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>}
           <button type="submit">Submit</button>

           <a onClick={()=>{dispatch(setlogin(1));dispatch(setforgot(false))}}>Back to Login</a>
         </form>  
  
       </OutsideClickHandler>    
       </div>
    );
}

export default ForgotPassword
