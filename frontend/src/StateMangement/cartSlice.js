import { createSlice } from '@reduxjs/toolkit';

  
const cartinitialState = {
    isCartOpen: false,
    isCheckoutOpen :false,
    cartItems: [],
    shippingDetails:{},
    cartTotal:"",
    url:"https://fidofinder-tau.vercel.app/?vercelToolbarCode=O-fJpWYXivrRhAL",
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: cartinitialState, 
    reducers: {
        toggleCart(state, action) { state.isCartOpen = action.payload},
        toggleCheckout(state, action) {state.isCheckoutOpen = action.payload},
        setshippingDetails(state, action) {state.shippingDetails = action.payload},
        setcartTotal(state, action) {state.cartTotal = action.payload},
        addItem(state, action) {
            const newItemId = action.payload._id;
            const existingItem = state.cartItems.find(item => item._id === newItemId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push(action.payload);
            }
        },


        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
        },


        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }

    }
});

const authinitialState = {
  navbtns:false,
  login:false,
  signup:false,
  forgot:false,
  reset:false,
  logchk:false,
  logPop:false,
  logout:false,
  regPop:false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState: authinitialState,
    reducers: {
        setNav(state, action) { state.navbtns = action.payload},
        setlogin(state, action) { state.login = action.payload},
        setsignup(state, action) { state.signup = action.payload},
        setforgot(state, action) { state.forgot = action.payload},
        setreset(state, action) { state.reset = action.payload},
        setlogchk(state, action) { state.logchk = action.payload},
        setlogPop(state, action) { state.logPop = action.payload},
        setlogoutpop(state, action) { state.logout = action.payload},
        setregPop(state, action) { state.regPop = action.payload},

    }
});

const pawinititalState = {
    petDetails:{},
    petData:{},
    searchtag:false,
    addtag:false,
    code:"",
}
const pawSlice = createSlice({
    name:'pawtag',
    initialState:pawinititalState,
    reducers:{
        setpetData(state,action) {state.petData = action.payload},
        setpetDetails(state,action) {state.petDetails = action.payload},
        setsearchtag(state, action) { state.searchtag = action.payload},
        setaddtag(state, action) { state.addtag = action.payload},
        setcode(state, action) { state.code = action.payload},
    }
})


export const { toggleCart,toggleCheckout, addItem, removeItem, incrementItem, decrementItem ,setshippingDetails,setcartTotal} = cartSlice.actions;
export const {setlogin,setsignup,setforgot,setreset,setlogchk,setlogPop,setlogoutpop,setregPop,setNav} =authSlice.actions;
export const {setpetData,setpetDetails,setcode,setaddtag,setsearchtag}=pawSlice.actions;

export const cartReducer = cartSlice.reducer;
export const authReducer = authSlice.reducer;
export const pawReducer = pawSlice.reducer;
