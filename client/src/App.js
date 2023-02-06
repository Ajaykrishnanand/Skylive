import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import Path from "./component/routes/path";
import Navbar from "./component/pages/navbar";
import Wrapper, { accContext } from "./component/context/useContext";
import Sidebar from "./component/pages/Sidebar";
import { useContext } from "react";
const provider = new AuthProvider("b373797fae6275c96ac63108a0733bf78ac1863f");
const onLogin = () => {

};

function App() {

  return (
    <Wrapper>
    <div className=" flex   ">
    <div >

      <Navbar />
    </div>
      <div className="flex justify-center">
    <Sidebar />

     <div className="flex-1  pt-[90px] pl-72  ">
     {/* pt-[90px] pl-72 */}
      <Path />
     </div>
      </div>

    </div>
    </Wrapper>
    // <ProvideAuth provider={provider}>
    //   |
    //   <div>
    //     <div className="pt-40">
    //       <Auth
    //         externalWallet={true}
    //         theme={"dark"}
    //         className="outline"
    //         onLogin={onLogin}
    //       />
    //     </div>
    //   </div>
    // </ProvideAuth>
  );
}

export default App;
