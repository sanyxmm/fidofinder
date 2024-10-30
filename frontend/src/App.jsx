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
import {  BrowserRouter,Routes,Route  } from "react-router-dom";
import Checkout from "./cart/Checkout/Checkout";
import Shopping from "./cart/Shopping/Shopping";

function App() {
  // loading animation
  const [anima, setanima] = useState(false);

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
    <Routes>
    <Route path ="/FidoFinder" element={      
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
    <Route path ="/shipping" element={<Checkout/>}></Route>
    </Routes>    
      </BrowserRouter>
  );
}

export default App;