import React from 'react'
import './PetRegistration.css'
import { setaddtag } from '../../StateMangement/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import AddPet from '../../petdata/add-pet'
const PetRegistration = () => {
  const dispatch = useDispatch();
  const {addtag}  = useSelector((state) => state.pawtag);
  return (
<div className='petreg'>
<div className="container relative">
{addtag && <AddPet/>}
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