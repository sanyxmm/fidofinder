import React from 'react';
import './Search.css'
import { useDispatch} from 'react-redux';
import {setsearchtag,setcode } from '../../StateMangement/cartSlice';
const Search = () => {
  const dispatch = useDispatch();
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
      <button  onClick={() => dispatch(setsearchtag(true))}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
     
      
    </div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <img src={require('../../assets/abt-section.png')} alt="" id='dogboy' />
 
  </div>
  )
}

export default Search