import { Auth, useAuth } from "@arcana/auth-react";
import { AuthProvider } from "@arcana/auth";
 import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider("b373797fae6275c96ac63108a0733bf78ac1863f");
const onLogin=()=>{
  // external wallet 
}

function App() {

  return (
    <ProvideAuth provider={provider}>
|

    <div>
    
        <div className="pt-40">
          <Auth externalWallet={true} theme={"dark"} className ="outline" onLogin={onLogin}/>
        </div>
   
    </div>
    </ProvideAuth>
  );
}

export default App;

