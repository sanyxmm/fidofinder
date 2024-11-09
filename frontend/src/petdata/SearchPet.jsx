// import React, { useState, useEffect, useContext } from "react";
// import OutsideClickHandler from 'react-outside-click-handler';
// import { setsearchtag } from '../StateMangement/cartSlice'
// import { useDispatch , useSelector } from "react-redux";
// import Axios from 'axios';
// import './petdata.css'


// const SearchPet  = () => {
//   const {code}  = useSelector((state) => state.pawtag);
//  const dispatch = useDispatch();
//   const [formData,setformData] =useState({});
//   useEffect(()=>{
//     Axios.get(`https://fidofinder.onrender.com/search-pet/${code}`)
//     .then((response) => {
//       const formData = response.data.pet;
//       setformData(formData)
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   },[]);
  


//   if (!formData || Object.keys(formData).length === 0) {
//     return <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0 bg-auto backdrop-blur-[4px]">
//     <OutsideClickHandler   onOutsideClick={() =>{ dispatch(setsearchtag(false));setformData({})}}>
//     <div className=' rounded-md bg-white shadow-md p-10'>Pet Not Found</div>
//     </OutsideClickHandler>
//     </div> // Or any loading/error message you prefer
//   }
//   return (
//     <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0 bg-auto backdrop-blur-[4px]">
//         <OutsideClickHandler  onOutsideClick={() =>{ dispatch(setsearchtag(false));setformData({})}}>
//     <form className="relative w-[290px] p-[20px_15px] border border-gray-300 rounded-md shadow-md backdrop-blur-sm image " >
//       {/* <img src={arrow} alt="" width={'25px'}  class='absolute top-3 left-3 '/> */}
//       <div class="text-[10px] p-[15px] mx-0 mb-[15px] mt-[15px] rounded-md bg-white shadow-md">
//        <div  class="flex flex-row gap-[7px]">
//       <img class='rounded-[15px]' src={require("../assets/doggy.jpg")} alt="" width={'60px'}  />
//       <div>
//       <p  className="text-[15px]  mb-[4px] "><strong>{formData.petname}</strong></p>
//       Parent :<span className="text-[#2980b9]"> {formData.parentName}</span> <br />
//         {/* <img src={location} alt="" width={'8px'}  /> */}
//         {formData.address}<br />
//         {formData.petemail}
//       </div>

//        </div>
//         <button class="rounded-[8px] bg-[#3498db] text-[12px] font-[700] mt-[10px] p-[10px] w-full text-white">Call my Parent</button>
//       </div>
//       <label htmlFor="" className="text-[13px]"><strong>About {formData.parentName}</strong></label>
//       <br />
//       <label htmlFor="About" className="text-[13px] ">{formData.petBio}</label>
//       <div  class="grid bg-[rgba(247,246,249,1)] grid-cols-3 gap-[20px] rounded-md shadow-md">
//         <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
//           <div  className="text-[9px] text-[#2980b9]">GENDER</div>
//           <div class="text-[11px]"><strong>{formData.petGender}</strong></div>
//         </div>
//         <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
//           <div  className="text-[9px] text-[#2980b9]">AGE</div>
//           <div class="text-[11px]"><strong>{formData.petAge}</strong></div>
//         </div>
//         <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
//           <div className="text-[9px] text-[#2980b9]">PET TYPE</div>
//           <div class="text-[11px]"><strong>{formData.petType}</strong></div>
//         </div>
//       </div>
//       <div className='grid grid-cols-2 gap-20px shadow rounded  mt-[15px]'>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">BREED</div>
//           <div class="text-[11px]"><strong>{formData.petBreed}</strong></div>
//         </div>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">PET BIRTHDAY</div>
//           <div class="text-[11px]"><strong>{formData.petBirth}</strong></div>
//         </div>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">Weight</div>
//           <div class="text-[11px]"><strong>{formData.petweight}</strong></div>
//         </div>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">MICROCHIP</div>
//           <div class="text-[11px]"><strong>{formData.petchipstatus}</strong></div>
//         </div>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">RABIES VACC.</div>
//           <div class="text-[11px]"><strong>{formData.petVaccstatus}</strong></div>
//         </div>
//         <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
//           <div className="text-[8px] text-[rgb(186,186,186,1)]">FAV FOOD...</div>
//           <div class="text-[11px]"><strong>{formData.petFavfood}</strong></div>
//         </div>
//       </div>
//     </form>
//     </OutsideClickHandler>
//   </div>
//   )
// }

// export default SearchPet



import React, { useState, useEffect, useContext } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import { setsearchtag } from '../StateMangement/cartSlice'
import { useDispatch , useSelector } from "react-redux";
import Axios from 'axios';
import './petdata.css'
import '../Auth/Login.css'

const SearchPet  = () => {
  const {url}  = useSelector((state) => state.cart);
  const {code}  = useSelector((state) => state.pawtag);
 const dispatch = useDispatch();
  const [formData,setformData] =useState({});
  useEffect(()=>{
    Axios.get(`${url}/search-pet/${code}`)
    .then((response) => {
      const formData = response.data.pet;
      setformData(formData)
    })
    .catch((err) => {
      console.log(err);
    });

  },[]);
  


  if (!formData || Object.keys(formData).length === 0) {
    return <div className='login-container'>
    <OutsideClickHandler   onOutsideClick={() =>{ dispatch(setsearchtag(false));setformData({})}}>
    <div className=' rounded-md bg-white shadow-md p-10 findpet'>Pet Not Found</div>
    </OutsideClickHandler>
    </div> // Or any loading/error message you prefer
  }
  return (
  <div className='login-container'>
    <OutsideClickHandler  onOutsideClick={() =>{ dispatch(setsearchtag(false));setformData({})}}>
       <form className="relative border border-gray-300 rounded-md shadow-md backdrop-blur-sm form-container" >
       <img onClick={() => dispatch(setsearchtag(false))} src={require('../assets/icons8-go-back-48.png')} className='absolute mt-[-12px] ml-[-8px] w-[1.5rem]' alt="" />
      <div class="text-[10px] p-[15px] mx-0 mb-[15px] mt-[15px] rounded-md bg-white shadow-md">
       <div  class="flex flex-row gap-[7px]">
      <img class='rounded-[15px]' src={require("../assets/doggy.jpg")} alt="" width={'60px'}  />
      <div>
      <p  className="text-[15px]  mb-[4px] "><strong>{formData.petname}</strong></p>
      Parent :<span className="text-[#2980b9]"> {formData.parentName}</span> <br />
        {/* <img src={location} alt="" width={'8px'}  /> */}
        {formData.address}<br />
        {formData.petemail}
      </div>

       </div>
        <button class="rounded-[8px] bg-[#3498db] text-[12px] font-[700] mt-[10px] p-[10px] w-full text-white">Call my Parent</button>
      </div>
      <label htmlFor="" className="text-[13px]"><strong>About {formData.parentName}</strong></label>
      <br />
      <label htmlFor="About" className="text-[13px] ">{formData.petBio}</label>
      <div  class="grid bg-[rgba(247,246,249,1)] grid-cols-3 gap-[20px] rounded-md shadow-md">
        <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
          <div  className="text-[9px] text-[#2980b9]">GENDER</div>
          <div class="text-[11px]"><strong>{formData.petGender}</strong></div>
        </div>
        <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
          <div  className="text-[9px] text-[#2980b9]">AGE</div>
          <div class="text-[11px]"><strong>{formData.petAge}</strong></div>
        </div>
        <div  class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
          <div className="text-[9px] text-[#2980b9]">PET TYPE</div>
          <div class="text-[11px]"><strong>{formData.petType}</strong></div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-20px shadow rounded  mt-[15px]'>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">BREED</div>
          <div class="text-[11px]"><strong>{formData.petBreed}</strong></div>
        </div>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">PET BIRTHDAY</div>
          <div class="text-[11px]"><strong>{formData.petBirth}</strong></div>
        </div>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">Weight</div>
          <div class="text-[11px]"><strong>{formData.petweight}</strong></div>
        </div>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">MICROCHIP</div>
          <div class="text-[11px]"><strong>{formData.petchipstatus}</strong></div>
        </div>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">RABIES VACC.</div>
          <div class="text-[11px]"><strong>{formData.petVaccstatus}</strong></div>
        </div>
        <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
          <div className="text-[8px] text-[rgb(186,186,186,1)]">FAV FOOD...</div>
          <div class="text-[11px]"><strong>{formData.petFavfood}</strong></div>
        </div>
      </div>
       </form>
    </OutsideClickHandler>
  </div>
  )
}

export default SearchPet
