import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [animation, setAnimation] = useState(true);
  const setAnimationState = (state) => setAnimation(state);
  const [navbtns, setNav] = useState(false);

  const [login, setlogin] = useState(false);
  const [signup, setsignup] = useState(false);
  const [forgot, setforgot] = useState(false);
  const [reset, setreset] = useState(false);

  const [logchk,setlogchk] = useState(false);
  const [logPop,setlogPop] = useState(false);
  const [regPop,setregPop] = useState(false);
  const [logout,setlogoutpop] = useState(false);

  const [searchtag,setsearchtag] = useState(false);
  const [addtag,setaddtag] = useState(false);
  const [code,setcode] = useState('');

useEffect(() => {
  setTimeout(() => {
    setlogPop(false);
  }, 1000);
}, [logPop]);
useEffect(() => {
  setTimeout(() => {
    setlogoutpop(false);
  }, 1000);
}, [logout]);
useEffect(() => {
  setTimeout(() => {
    setregPop(false);
  }, 2000);
}, [regPop]);

  return (
    <AppContext.Provider
      value={{
        login,setlogin,
        logchk,setlogchk,
        signup,setsignup,
        navbtns,setNav,
        forgot,setforgot,
        reset,setreset,
        animation,setAnimationState,
        logPop,setlogPop,
        regPop,setregPop,
        logout,setlogoutpop,
        searchtag,setsearchtag,
        addtag,setaddtag,
        code,setcode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };