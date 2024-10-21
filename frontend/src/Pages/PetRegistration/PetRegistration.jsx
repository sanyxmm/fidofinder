import React from 'react'
import './PetRegistration.css'
import { useDispatch,useSelector } from 'react-redux'
const PetRegistration = () => {
  const dispatch = useDispatch();
  const {setaddtag}  = useSelector((state) => state.pawtag);
  return (
<div>
<div className="container">
    <div className='sticker'></div>
  <img id="dog-image" src={require("../../assets/dogyy.png")} alt="" />
     <div className='s-content'>
     <h1 id='heading-p'>Ensure Your Pet's Safety </h1>
     <h6>In Seconds...</h6>
    <button  onClick={()=>{dispatch(setaddtag(true))}}>Add PetNow</button>
    </div>
</div>
</div>
  )
}

export default PetRegistration