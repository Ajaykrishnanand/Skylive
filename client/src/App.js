import React from "react";
import { Auth } from "@arcana/auth-react";

function App() {
  const [theme, setTheme] = React.useState("light");
  const [externalWallet, showExternalWallet] = React.useState(false);
  return (
    <>

         <Auth externalWallet={externalWallet} theme={theme} />
    </>
      
  );
}

export default App;
