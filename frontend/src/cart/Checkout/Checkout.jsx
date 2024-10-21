import React, { useContext,useState } from 'react'
import Axios from 'axios';
import './Checkout.css'
import { Link } from 'react-router-dom';
import AddPet from '../../petdata/add-pet';
import { useDispatch, useSelector } from 'react-redux';
import {setaddtag} from '../../StateMangement/cartSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const {addtag}  = useSelector((state) => state.pawtag);
  const { isCartOpen, cartItems } = useSelector((state) => state.cart); 
  const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
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
  // const navigate = useNavigate()
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default submission if u donst wrtie this u will face with error

    //axios is http request response library to go call our server side up
    //using post method to pass the data
    //here we write server side app url
    Axios.post("http://localhost:4000/shipping/add-Shipping", formData)
      .then((response) => {
        console.log(formData);
        if (response.data.status)
        dispatch(setaddtag(true));
        else setError(response.data.message);
        dispatch(setaddtag(true));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
   <div id='shipping-container'>
    
  <Link to="/Findmydog"><img src={require('../../assets/back-button (2).png')} className='absolute mt-4 ml-4 w-10' alt="" /></Link>
     <div className="flex items-center gap-7 w-[30vw] ml-[35vw] pt-[3vw]">
   <div>Cart</div>
   <div className="w-1/2 h-px bg-gray-300 "></div>
   <div className='font-[700]'>Shipping</div>
   <div className="w-1/2 h-px bg-gray-300"></div>
   <div>Payment</div>
 </div>
     <div id='checkout'>
  {addtag && <AddPet/>}

       <form onSubmit={handleSubmit} className="Shipping-details">
       <h2>Shipping-details</h2>

       <div>
       <input required  onChange={handleChange} value={formData.Firstname} name="Firstname" type="First-name" placeholder='First Name*' />
       <input required  onChange={handleChange} value={formData.LastName} name="LastName" type="Last-name" placeholder='Last Name*'/>
       </div>

       <input required  onChange={handleChange} value={formData.Country} name="Country" type="Country" placeholder='Country*'/>

       <input required  onChange={handleChange} value={formData.Address} name="Address"  type="House-Address" placeholder='Address*'/>
       <input required  onChange={handleChange} value={formData.Landmark} name="Landmark"  type="Landmark" placeholder='Landmark*'/>

      <div className='inpu'>
      <input required  onChange={handleChange} value={formData.Town} name="Town" type="Town" placeholder='City/Town*'/>
       <input required  onChange={handleChange} value={formData.State} name="State" type="State" placeholder='State*'/>
       <input required  onChange={handleChange} value={formData.Zipcode} name="Zipcode" type="ZipCode" placeholder='Zip Code*'/>
      </div>

      <div>
      <input required  onChange={handleChange} value={formData.EmailAddress} name="EmailAddress" type="EmailAddress" placeholder='Email Address*'/>
       <input required  onChange={handleChange} value={formData.Contact} name="Contact" type="Contact" placeholder='Phone Number*'/>
      </div>
      {/* {error ? <p style={{ color: 'red' }}>{error}</p>:<p><br /></p>} */}
 <button type='submit'>Click Here to Enter Pet Details</button>
      </form>

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

      <button>Place Order</button>
        </div>


     </div>
   </div>
  )
}

export default Checkout
