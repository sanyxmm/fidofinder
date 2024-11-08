import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Checkout.css'
import { Link, useNavigate } from 'react-router-dom';
import AddPet from '../../petdata/add-pet';
import { useDispatch, useSelector } from 'react-redux';
import {setaddtag, setshippingDetails} from '../../StateMangement/cartSlice';

const Checkout = () => {
  const [error,setError] = useState("");
  const {addtag,petDetails}  = useSelector((state) => state.pawtag);
  const { isCartOpen, cartItems,shippingDetails ,url} = useSelector((state) => state.cart); 
  const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const navigate = useNavigate();

  //setting shipping details
  const [formData, setformData] = useState({
    Firstname:"",
    LastName:"",
    Address:"",
    Country:"",
    Landmark:"",
    Contact:"",
    State:"",
    Town:"",
    Zipcode:"",
    EmailAddress:"",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default submission if u donst wrtie this u will face with error
    dispatch(setshippingDetails(formData));
    if (!petDetails || Object.keys(petDetails).length === 0)
    dispatch(setaddtag(true));
  };


  //setting order details
  const orderData = {
    items: cartItems,
    shippingAddress: shippingDetails,
    totalAmount:cartTotal,
    petDetails:petDetails
};

//sending order details to database
  Axios.defaults.withCredentials = true;
  const handlePlaceOrder = (e) => {
    console.log(orderData)
    e.preventDefault();
    Axios.post(`${url}/placeOrder`, orderData)
    .then((response) => {
      navigate('/');
      console.log(orderData);
      alert(response.data.message)
      setError(response.data.message);
      
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data.message);
      setError(error.response.data.message);
    });
};


  return (

<div id='shipping-container'>
    
<Link to="/"><img src={require('../../assets/back-button (2).png')} className='absolute mt-4 ml-4 w-10' alt="" /></Link>
<div><br />
<br /></div>

{/* checkoutpage */}
<div id='checkout'>

  {/* petTagPop */}
  {addtag && <AddPet/>}


  {/* shipping details */}
  <form onSubmit={handleSubmit} className="Shipping-details">
 <h2>Shipping-details</h2>

 <div className='grid grid-cols-2 grid-rows-1 gap-12 inputsgap'>
 <input required  onChange={handleChange} value={formData.Firstname} name="Firstname" type="First-name" placeholder='First Name*' />
 <input required  onChange={handleChange} value={formData.LastName} name="LastName" type="Last-name" placeholder='Last Name*'/>
 </div>


 <input required  onChange={handleChange} value={formData.Landmark} name="Landmark"  type="Landmark" placeholder='Landmark*'/>

<div className='grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-5 inputsgap'>
<input required  onChange={handleChange} value={formData.Country} name="Country" type="Country" placeholder='Country*'/>
<input required  onChange={handleChange} value={formData.State} name="State" type="State" placeholder='State*'/>
<input required  onChange={handleChange} value={formData.Zipcode} name="Zipcode" type="ZipCode" placeholder='Zip Code*'/>
<input required  onChange={handleChange} value={formData.Town} name="Town" type="Town" placeholder='City/Town*'/>

</div>

<input required  onChange={handleChange} value={formData.Address} name="Address"  type="House-Address" placeholder='Address*'/>


<input required  onChange={handleChange} value={formData.EmailAddress} name="EmailAddress" type="EmailAddress" placeholder='Email Address*'/>
 <input required  onChange={handleChange} value={formData.Contact} name="Contact" type="Contact" placeholder='Phone Number*'/>

{/* {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>} */}
<button type='submit'>Submit</button>
 </form>

  {/* Billing details */}
  <div className="billing-details">
<h2>Billing-details</h2>
{
     cartItems.map(item => {
      const { id, img, title, price, quantity } = item;
      const itemTotal = price * quantity;

      return (
             <div className='cont'  key={id}>
<div>{title}</div>
<div>x {quantity}</div>
<div>₹ {itemTotal.toLocaleString()}</div>
</div>
      );
  })
  }
<input  onChange={handleChange} value={formData.petname} name="" type="text" placeholder='Enter PromoCode' className='border-2 p-1' />
<div class="grid-container">
<div class="grid-item">Subtotal</div>
<div class="grid-item">₹ {cartTotal.toLocaleString()}</div>
<div class="grid-item">Shipping</div>
<div class="grid-item">Rs 00.00</div>
<div></div>
<div></div>
<div class="grid-item"><span className='text-[18px]'>Total</span></div>
<div class="grid-item"><span className='text-[18px] font-bold'>₹ {cartTotal.toLocaleString()}</span></div>
</div>


<button onClick={handlePlaceOrder}>Place Order</button>
{error ? <p className='text-red-500 mb-[-3]'>{error}</p>:<p><br /></p>}


  </div>

</div>

 </div>
  )
}

export default Checkout
