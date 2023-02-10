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
import Uploadcard from "./component/pages/Uploadcard";
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
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

<svg
  className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
  viewBox="0 0 1155 678"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
    fillOpacity=".3"
    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
  />
  <defs>
    <linearGradient
      id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
      x1="1155.49"
      x2="-78.208"
      y1=".177"
      y2="474.645"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#9089FC" />
      <stop offset={1} stopColor="#FF80B5" />
    </linearGradient>
  </defs>
</svg>
</div>
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
