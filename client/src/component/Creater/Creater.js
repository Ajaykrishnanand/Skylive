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

  // const adress = ctx.sharedState.acclogin.accountAddress;

  async function check(adress) {
    const datais = {
      adress: adress,
    };
    try {
      const data = await axios.post(
        "http://localhost:8081/Creaters/adress",
        datais
      );

      if (data.data.length > 0) {
        ctx.sharedState.setChannel(data.data);
        console.log(ctx.sharedState.channel);
        setFlag(true);
      } else {
        navigate("/becomeCreater");
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
