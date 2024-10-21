import { configureStore } from '@reduxjs/toolkit';
import {authReducer, cartReducer,pawReducer} from './cartSlice';


const rootReducer = {
    cart: cartReducer,
    auth: authReducer,
    pawtag:pawReducer,
};

const store = configureStore({
    reducer: rootReducer
});

export default store;