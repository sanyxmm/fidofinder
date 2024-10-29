
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../../StateMangement/cartSlice';
import '../Shopping/CartSection.css'
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
const Cart = () => {

    const dispatch = useDispatch();
    const { isCartOpen, cartItems } = useSelector((state) => state.cart); 

    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);

    const cartquantity = cartItems.length;
    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (    
        <>
            {
                isCartOpen && (
                    <div className='fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-30'>
                         <OutsideClickHandler onOutsideClick={() => dispatch(toggleCart(false))}>
                        <div className="absolute top-0 right-0 max-w-[370px] w-full h-full bg-[#f5f9fc]">
                        <img onClick={() => dispatch(toggleCart(false))} src={require('../../assets/icons8-go-back-48.png')} className='absolute mt-3 ml-2 w-10' alt="" />
                    <div className='p-[1rem] text-center text-white bg-[#3498db] font-extrabold  text-[1.2rem]'>

                                <h2>Cart <small>({cartquantity})</small></h2>
                               
                    </div>

                            <div className="cart_body">
                                {
                                    cartquantity === 0 ? (
                                        <h2>Cart is empty</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { _id, title, price, quantity,img } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items" key={_id}>
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span onClick={() => dispatch(decrementItem(_id))}>&#8722;</span>
                                                        <b>{quantity}</b>
                                                        <span onClick={() => dispatch(incrementItem(_id))}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() =>   dispatch(removeItem(_id))}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">
                                <h3>
                                    <small>Total:</small>
                                    <b>₹ {cartTotal.toLocaleString()}</b>
                                </h3>
                          
                          <button
                                    type="button"
                                    className="checkout_btn"
                                    
                                    disabled={cartquantity === 0}
                                >
                               <Link to="/shipping">Checkout</Link>
                            </button>
                        
                                
                            </div>
                        </div>
                        </OutsideClickHandler>
                    </div>
                )
            }
        </>
    );
};

export default Cart;