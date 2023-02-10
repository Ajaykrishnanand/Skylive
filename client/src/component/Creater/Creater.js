import BecomeCreater from "./BecomeCreater";
import axios from "axios";
import Dashbord from "./Dashbord";
import { useEffect, useState, useContext } from "react";
import Appcontext from "../context/ApplicationContext";
function Creater() {
  const ctx = useContext(Appcontext);
 // console.log(ctx.sharedState.acclogin.accountAddress);
  // async function check(adress) {
  //   const data = await axios.post(
  //     "http://localhost:8081/Creaters/adress",
  //     adress
  //   );
  // }
  // useEffect(() => {
  //   check(ctx.sharedState.acclogin.accountAddress);
  // });
  return <>{false ? <BecomeCreater /> : <Dashbord />}</>;
}

export default Creater;
