import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import Path from "./component/routes/path";
import Navbar from "./component/pages/navbar";
import Upload from "./component/livepeer/upload";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import Wrapper, { accContext } from "./component/context/useContext";
import Sidebar from "./component/pages/Sidebar";
import { useContext } from "react";
const provider = new AuthProvider("b373797fae6275c96ac63108a0733bf78ac1863f");
const onLogin = () => {};

const client = createReactClient({
  provider: studioProvider({ apiKey: "300b138b-5f81-4e7f-9426-fa5b898d4374" }),
});
function App() {
  const ctx = useContext(accContext);
  const sidebar = ctx.sharedState.sidebar;
  if (sidebar) {
  }
  return (
    <Wrapper>
      <div className=" flex   ">
        <LivepeerConfig client={client}>
          {" "}
          <div>
            <Navbar />
          </div>
          <div className="mr-2 flex justify-start">
            <Sidebar />
          </div>
          <div className="ml-3  flex justify-center">
            {" "}
            <Path />
          </div>
        </LivepeerConfig>

        {/* <div className="flex-1  pt-[90px] pl-72  "> */}
        {/* pt-[90px] pl-72 */}
        {/* </div> */}
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
