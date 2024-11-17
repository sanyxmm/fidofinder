import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Foot/Footer";
import Home from './Pages/Home/Home';
import PetRegistration from "./Pages/PetRegistration/PetRegistration";
import Search from "./Pages/Search/Search";
import Help from "./Pages/Help/Help";
import Working from "./Pages/Working/Working";
import animation from './assets/animation-gif.gif';
import './App.css';
import Quote from "./Pages/Quote/Quote";
import {  BrowserRouter,Routes,Route, useSearchParams  } from "react-router-dom";
import Checkout from "./cart/Checkout/Checkout";
import Shopping from "./cart/Shopping/Shopping";
import ResetPassword from "./Auth/ResetPassword";
import SearchPet from "./petdata/SearchPet";
import { useDispatch } from "react-redux";
import { setsearchtag} from './StateMangement/cartSlice'


function CheckPetId() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const petId = searchParams.get('petId');

  useEffect(() => {
    if (petId) {
      dispatch(setsearchtag(true));
      console.log(`Pet ID found in URL: ${petId}`);
    }
  }, [petId, dispatch]);

  return null; // This component doesn't render anything
}


function App() {
  // loading animation
  const [anima, setanima] = useState(true);

  useEffect(() => {
    // Set loading animation to false after 3 seconds
    const timer = setTimeout(() => {
      setanima(false);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <CheckPetId />
    <Routes>
    <Route path ="/" element={      
       <div>
       <div className="App">{anima ?
         <div id="snuf"><img src={animation} width="300px" height="300px"></img></div>:
        <div>
          <Navbar/>
              <div id="Home"><Home/></div>
              <div id="RegisterPet"><PetRegistration/></div>
              <div id="Shop"><Shopping/></div>
             
              <div id="Search"><Search/></div>
              <Quote/>
              <div id="Working"><Working/></div>
              {/* <div id="Help"><Help/></div> */}
              <div id="Aboutus"><Footer/></div>
    
         </div>
           }
       </div>
     </div>
        }></Route>
             <Route path="/profile/:userId" element={<SearchPet/>} />
    <Route path ="/shipping" element={<Checkout/>}></Route>
    <Route path="/reset-password/:token" element={<ResetPassword/>}></Route>
    </Routes>    
      </BrowserRouter>
  );
}


export default App;
