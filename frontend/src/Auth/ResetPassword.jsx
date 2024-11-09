import React, { useState,useRef, useContext } from 'react';
import Axios from 'axios'
import './Login.css';
import {useSelector} from 'react-redux';

const ResetPassword = () => {
    const [error, setError] = useState('');
    const {url}  = useSelector((state) => state.cart);
    const [formData, setFormData] = useState({
      password: '',
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
    Axios.post(`${url}/reset-password`,formData).then(response =>{
       
        if(response.data.status)
        setError("Password changed Succefully")
        else
        setError(response.data.message)
       
    }).catch(err=>{
        console.log(err)
    })
  };
  return (
       <div className='login-container '> 

         <form className='login-form border-2 border-black-200' onSubmit={handleSubmit}>
           <h1>Reset Password</h1>
  
           <label htmlFor="">New Password:</label>
           <input name="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
           {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>}
           <button type="submit">Submit</button>
         </form>     
    </div>
  )
}

export default ResetPassword
