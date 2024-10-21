import React from 'react';
import { Provider } from 'react-redux';
import store from '../../StateMangement/store';
import ShopSection from './ShopSection';
import CartSection from './CartSection';
const Shopping = () => {
  return (
  <>
    <Provider store={store}>
    <ShopSection/>
    <CartSection/>
  </Provider>
  </>
  )
}

export default Shopping
