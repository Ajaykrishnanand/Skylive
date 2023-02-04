import { useContext, useState } from "react";
import { accContext } from "../context/useContext";
import {ethers} from "ethers"
const Login = () => {
  const ctx = useContext(accContext);
  const accountAddress= ctx.sharedState.acclogin.accountAddress;
  const connectHendler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ctx.dataState.addData(provider, signer, accounts[0]);
  };

  return (
    <>
      <button
        onClick={connectHendler}
        style={{ marginRight: "20px", marginLeft: "20px" }}
        exact
        className=" btn btn-outline"
      >
        {accountAddress
          ? `${accountAddress.substr(0, 5)}...${accountAddress.substr(37, 42)}`
          : "connect"}
      </button>
    </>
  );
};
export default Login;
