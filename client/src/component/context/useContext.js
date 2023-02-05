import { createContext, useState } from "react";

 

export const accContext = createContext({});

   
const Wrapper = (props) => {
  ;
  const [acclogin, setAcclogin] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
  });
  const [sidebar,setSidebar] = useState(false);
 
  function setData(provider, signer, accountAddress) {
    setAcclogin((prevState) => {
      return {
        provider,
        signer,
        accountAddress,
      };
    });
  }
  const sharedState = {
 
    setData,
    acclogin,
    sidebar,
    setSidebar
   

  };

  console.log(acclogin);
  return (
    <accContext.Provider value={{ sharedState }}>
      {props.children}
    </accContext.Provider>
  );
};
export default Wrapper;


