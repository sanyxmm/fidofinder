import React, { useState, useEffect } from 'react';
import { setsearchtag,setcode,setpetData } from '../../StateMangement/cartSlice'
import { useDispatch, useSelector} from "react-redux";
import Axios from 'axios';
import './Search.css'
const Search = () => {
  const dispatch = useDispatch();
  const {code,petData} = useSelector((state) => state.pawtag);

  return (
  <div className='findme'>
    <div id='content-find'> 
      <div>
      <h4 id='findme-heading'>Searching For Your Missing Pet?</h4>
      <div>We're here to reunite you with your beloved companion swiftly!</div>
      <div> Find you Pet....</div>
      </div>

      <div className='find-search'>
      <label ><input  type="text" placeholder='Search Pet-id '  onChange={(e) => dispatch(setcode(e.target.value))}
 /> </label>
      <button  onClick={()=>dispatch(setsearchtag(true))}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
    <div>&nbsp;</div>
    <img src={require('../../assets/abt-section.png')} alt="" id='dogboy' />
 
  </div>
  )
}

export default Search