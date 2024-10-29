// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";
// import classNames from "classnames";
// import Login from "../../Auth/Login";
// import Signup from "../../Auth/Signup";
// import ForgotPassword from "../../Auth/ForgotPassword";
// import Axios from "axios";
// import SearchPet from "../../petdata/SearchPet";
// import { useDispatch, useSelector } from 'react-redux';
// import {setlogin,setlogchk,setlogoutpop,setNav,setlogPop,setregPop} from '../../StateMangement/cartSlice';
// import { toggleCart } from '../../StateMangement/cartSlice';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);
//   const { navbtns } = useSelector((state) => state.auth);
//   const { login,logout,signup,forgot,regPop,logPop,logchk} = useSelector((state) => state.auth);
//   const {searchtag}  = useSelector((state) => state.pawtag);

//   const cartQuantity = cartItems.length;

//   let buttonClasses = classNames("navbtns", navbtns ? "set" : "");
//   const [formData, setformData] = useState({});
  
//   const handleLogout = () => {
//     Axios.post('http://localhost:4000/logout')
//         .then(response => {
//             if (response.data.status) {
//                 dispatch(setlogin(false)); // Update the login state
//                 dispatch(setlogchk(false)); // update the loggedin state
//                 dispatch(setlogoutpop(true));
//                 // localStorage.removeItem("token-info"); // Clear any token in local storage
//             } else {
//                 console.log('Logout failed');
//             }
//         })
//         .catch(error => {
//             console.error('Error during logout:', error);
//         });
// };

// useEffect(() => {
//   Axios.get(`http://localhost:4000/user-details`)
//     .then((response) => {
//       const formData = response.data.user;
//       setformData(formData);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setlogPop(false));
//     }, 1000);
//   }, [logPop]);
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setlogoutpop(false));
//     }, 1000);
//   }, [logout]);
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setregPop(false));
//     }, 2000);
//   }, [regPop]);
  
//   return (
//     <nav className="navbar">
//       <img id="logo" src={require('../../assets/logo.png')} alt="" />

//       <ul className={buttonClasses}>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Home"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Search"
//           >
//             Search
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="RegisterPet"
//           >
//             RegisterPet
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Help"
//           >
//             Help
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Working"
//           >
//             Working
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Aboutus"
//           >
//             About us
//           </Link>
//         </li>
//       </ul>

//  <div className="flex flex-row gap-4">
       
//  <div title="Cart" className="flex flex-row gap-5" onClick={() => dispatch(toggleCart(true)) }>
//        <span className="absolute ml-4 bg-blue-400 text-[white] rounded-full  pr-1 pl-1 text-[10px] z-50 font-bold">{cartQuantity}</span>
//        <img src={`${process.env.PUBLIC_URL}/images/online-shopping.png`}  className="relative z-0 w-[24px] max-h-[24px] " alt="bag-icon" />                       
//    </div>

//    {logchk ? (

//         <div>
//           {formData.username}{" "}
//           <i
//             class="fa fa-sign-out pl-[3px]"
//             aria-hidden="true"
//             onClick={handleLogout}
//           ></i>
//         </div>
//       ) : (
//           <button id="nav-button" onClick={() => dispatch(setlogin(true))}>
//             Sign in
//           </button>
//       )}
//  </div>
  
//       <img id="hamburger" onClick={()=>dispatch(setNav(true))} src={require("../../assets/menu-button.png")} alt="" />

//       {login && <Login />}
//       {signup && <Signup />}
//       {forgot && <ForgotPassword />}
//       {searchtag && <SearchPet/>}

//       {regPop && <div className="logPop"> Registered Succefully </div>}
//       {logPop && <div className="logPop"> Logged in Succefully </div>}
//       {logout && <div className="logPop"> Logged out Succefully </div>}
//     </nav>
//   );
// };
// export default Navbar;


// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";
// import classNames from "classnames";
// import Login from "../../Auth/Login";
// import Signup from "../../Auth/Signup";
// import ForgotPassword from "../../Auth/ForgotPassword";
// import Axios from "axios";
// import SearchPet from "../../petdata/SearchPet";
// import { useDispatch, useSelector } from 'react-redux';
// import {setlogin,setlogchk,setlogoutpop,setNav,setlogPop,setregPop} from '../../StateMangement/cartSlice';
// import { toggleCart } from '../../StateMangement/cartSlice';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { cartItems } = useSelector((state) => state.cart);
//   const { navbtns } = useSelector((state) => state.auth);
//   const { login,logout,signup,forgot,regPop,logPop,logchk} = useSelector((state) => state.auth);
//   const {searchtag}  = useSelector((state) => state.pawtag);

//   const cartQuantity = cartItems.length;

//   let buttonClasses = classNames("navbtns", navbtns ? "set" : "");
//   const [formData, setformData] = useState({});
  
//   const handleLogout = () => {
//     Axios.post('http://localhost:4000/logout')
//         .then(response => {
//             if (response.data.status) {
//                 dispatch(setlogin(false)); // Update the login state
//                 dispatch(setlogchk(false)); // update the loggedin state
//                 dispatch(setlogoutpop(true));
//                 // localStorage.removeItem("token-info"); // Clear any token in local storage
//             } else {
//                 console.log('Logout failed');
//             }
//         })
//         .catch(error => {
//             console.error('Error during logout:', error);
//         });
// };

// useEffect(() => {
//   Axios.get(`http://localhost:4000/user-details`)
//     .then((response) => {
//       const formData = response.data.user;
//       setformData(formData);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setlogPop(false));
//     }, 1000);
//   }, [logPop]);
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setlogoutpop(false));
//     }, 1000);
//   }, [logout]);
//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(setregPop(false));
//     }, 2000);
//   }, [regPop]);
  
//   return (
//     <nav className="navbar">
//       <img id="logo" src={require('../../assets/logo.png')} alt="" />

//       <div className="flex flex-col items-center">
//       <img id="hamburger" onClick={()=>dispatch(setNav(true))} src={require("../../assets/menu-button.png")} alt="" />
//       {
//         navbtns && <ul className="openham flex flex-row gap-5">
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Home"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Search"
//           >
//             Search
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="RegisterPet"
//           >
//             RegisterPet
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Help"
//           >
//             Help
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Working"
//           >
//             Working
//           </Link>
//         </li>
//         <li>
//           {" "}
//           <Link
//             id="text"
//             onClick={() => {
//               dispatch(setNav(false));
//             }}
//             activeClass="active"
//             smooth
//             spy
//             to="Aboutus"
//           >
//             About us
//           </Link>
//         </li>
//       </ul>
//       }
//       </div>

//  <div className="flex flex-row gap-4 h-[20px]">
       
//  <div title="Cart" className="flex flex-row gap-5" onClick={() => dispatch(toggleCart(true)) }>
//        <span className="absolute ml-4 bg-blue-400 text-[white] rounded-full  pr-1 pl-1 text-[10px] z-50 font-bold">{cartQuantity}</span>
//        <img src={`${process.env.PUBLIC_URL}/images/online-shopping.png`}  className="relative z-0 w-[24px] max-h-[24px] " alt="bag-icon" />                       
//  </div>

//  <button id="nav-button" onClick={() => dispatch(setlogin(true))}> Sign in </button>
//  </div>

// </nav>
//   );
// };
// export default Navbar;



import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import classNames from "classnames";
import Login from "../../Auth/Login";
import Signup from "../../Auth/Signup";
import ForgotPassword from "../../Auth/ForgotPassword";
import Axios from "axios";
import SearchPet from "../../petdata/SearchPet";
import { useDispatch, useSelector } from 'react-redux';
import {setlogin,setlogchk,setlogoutpop,setNav,setlogPop,setregPop} from '../../StateMangement/cartSlice';
import { toggleCart } from '../../StateMangement/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { navbtns } = useSelector((state) => state.auth);
  const { login,logout,signup,forgot,regPop,logPop,logchk} = useSelector((state) => state.auth);
  const {searchtag}  = useSelector((state) => state.pawtag);

  const cartQuantity = cartItems.length;

  let buttonClasses = classNames("navbtns", navbtns ? "set" : "");
  const [formData, setformData] = useState({});
  
  const handleLogout = () => {
    Axios.post('http://localhost:4000/logout')
        .then(response => {
            if (response.data.status) {
                dispatch(setlogin(false)); // Update the login state
                dispatch(setlogchk(false)); // update the loggedin state
                dispatch(setlogoutpop(true));
                // localStorage.removeItem("token-info"); // Clear any token in local storage
            } else {
                console.log('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
};

useEffect(() => {
  Axios.get(`http://localhost:4000/user-details`)
    .then((response) => {
      const formData = response.data.user;
      setformData(formData);
    })
    .catch((err) => {
      console.log(err);
    });
});
  useEffect(() => {
    setTimeout(() => {
      dispatch(setlogPop(false));
    }, 1000);
  }, [logPop]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setlogoutpop(false));
    }, 1000);
  }, [logout]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setregPop(false));
    }, 2000);
  }, [regPop]);
  
  return (
    <nav className="navbar">
      <img id="logo" src={require('../../assets/logo.png')} alt="" />

      <div className="flex flex-col items-center">
      <img id="hamburger" onClick={()=>dispatch(setNav(!navbtns))} src={require("../../assets/menu-button.png")} alt="" />
      {
        navbtns && <ul className="openham flex flex-row gap-5">
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Home"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Search"
          >
            Search
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="RegisterPet"
          >
            RegisterPet
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Help"
          >
            Help
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Working"
          >
            Working
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Aboutus"
          >
            About us
          </Link>
        </li>
      </ul>
      }
      <ul className="closeham flex flex-row mt-[17px] gap-5">
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Home"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Search"
          >
            Search
          </Link>
        </li>
        {/* <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="RegisterPet"
          >
            RegisterPet
          </Link>
        </li> */}
        {/* <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Help"
          >
            Help
          </Link>
        </li> */}
         <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Shop"
          >
            Shop
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Working"
          >
            Working
          </Link>
        </li>
        <li>
          {" "}
          <Link
            id="text"
            onClick={() => {
              dispatch(setNav(false));
            }}
            activeClass="active"
            smooth
            spy
            to="Aboutus"
          >
            Contact us
          </Link>
        </li>
      </ul>

      </div>

 <div className="flex flex-row mt-[17px] gap-4 h-[30px]  authbtn">
       
 <div title="Cart" className="flex flex-row gap-5" onClick={() => dispatch(toggleCart(true)) }>
       <span className="badge-q absolute ml-4 bg-blue-400 text-[white] rounded-full  pr-1 pl-1 text-[10px] z-50 font-bold">{cartQuantity}</span>
       <img src={`${process.env.PUBLIC_URL}/images/online-shopping.png`}  className="badge relative z-0 w-[24px] max-h-[24px] mt-[2px] " alt="bag-icon" />                       
 </div>
 {logchk ? (
        <div className="logoutbtn">
          {formData.username}{" "}
          <i
            class="fa fa-sign-out pl-[3px]"
            aria-hidden="true"
            onClick={handleLogout}
          ></i>
        </div>
      ) : (
           <button id="nav-button" className="py-0 px-2 text-[15px]" onClick={() => dispatch(setlogin(true))}> Sign in </button>
      )}
 </div>

       {login && <Login />}
      {signup && <Signup />}
       {forgot && <ForgotPassword />}
       {searchtag && <SearchPet/>}

      {regPop && <div className="logPop"> Registered Succefully </div>}
     {logPop && <div className="logPop"> Logged in Succefully </div>}
     {logout && <div className="logPop"> Logged out Succefully </div>}

</nav>
  );
};
export default Navbar;
