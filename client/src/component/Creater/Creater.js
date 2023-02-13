import BecomeCreater from "./BecomeCreater";
import axios from "axios";
import Dashbord from "./Dashbord";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { accContext } from "../context/ApplicationContext";
function Creater() {
  const [flag, setFlag] = useState(false);
  const ctx = useContext(accContext);
  const navigate = useNavigate();

  const adress = ctx.sharedState.acclogin.accountAddress;

  async function check(adress) {
    try {
      const data = await axios.post(
        "http://localhost:8081/Creaters/adress",
        adress
      );
      console.log(data.data.length);
      if (data.data.length > 0) {
        setFlag(true);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    check(ctx.sharedState.acclogin.accountAddress);
  }, [ctx.sharedState.acclogin.accountAddress]);
  return <>{flag ? <Dashbord /> : navigate("/becomeCreater")}</>;
}

export default Creater;
