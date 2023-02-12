import { createContext, useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";

import { daiABI } from "./ABI";

import { ethers } from "ethers";

export const accContext = createContext({});

const Wrapper = (props) => {
  const [acclogin, setAcclogin] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
  });
  const [sidebar, setSidebar] = useState(false);

  function setData(provider, signer, accountAddress) {
    setAcclogin((prevState) => {
      return {
        provider,
        signer,
        accountAddress,
      };
    });
  }

  //where the Superfluid logic takes place
  async function upgradeTokens(amount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const superSigner = sf.createSigner({ signer: signer });

    console.log(signer);
    // console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");

    console.log(daix);

    try {
      // const ans = await daix.balanceOf({
      //   account: "0x861715cD400524D279Df4240a99f3C0E22b1c562",
      //   providerOrSigner: ethers.providers.Provider | ethers.Signer,
      // });
      //
      console.log(ethers.utils.parseEther(amount.toString()));
      const upgradeOperation = await daix.upgrade({
        amount: amount,
      });

      console.log("Upgrading...");

      await upgradeOperation.exec(signer);

      console.log(
        `Congrats - you've just upgraded your tokens to an Index!
         Network: Goerli
         Super Token: DAIx
         Amount: ${amount}         
      `
      );

      console.log(
        `Congrats - you've just distributed to your index!
    `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  async function DAIxamount() {}
  //where the Superfluid logic takes place
  async function downgradeTokens(amount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const superSigner = sf.createSigner({ signer: signer });

    console.log(signer);
    console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");

    console.log(daix);
    console.log(ethers.utils.parseEther(amount.toString()));
    try {
      const downgradeOperation = daix.downgrade({
        amount: ethers.utils.parseEther(amount.toString()),
      });

      console.log("downgrading...");

      await downgradeOperation.exec(signer);

      console.log(
        `Congrats - you've just downgraded your tokens
         Network: Goerli
         Super Token: DAIx
         Amount: ${amount}         
      `
      );

      console.log(
        `Congrats - you've just downgraded
    `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  async function approveTokens(amount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const superSigner = sf.createSigner({ signer: signer });

    console.log(signer);
    const myadress = await superSigner.getAddress();

    //fDAI on goerli: you can find network addresses here: https://docs.superfluid.finance/superfluid/developers/networks
    //note that this abi is the one found here: https://goerli.etherscan.io/address/0x88271d333C72e51516B67f5567c728E702b3eeE8
    const DAI = new ethers.Contract(
      "0x88271d333C72e51516B67f5567c728E702b3eeE8",
      daiABI,
      signer
    );
    try {
      console.log("approving DAI spend");
      await DAI.approve(
        myadress,
        ethers.utils.parseEther(amount.toString())
      ).then(function (tx) {
        console.log(
          `Congrats, you just approved your DAI spend. You can see this tx at https://kovan.etherscan.io/tx/${tx.hash}`
        );
      });
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  const sharedState = {
    setData,
    acclogin,
    sidebar,
    setSidebar,
    upgradeTokens,
    approveTokens,
    downgradeTokens,
  };

  console.log(acclogin);
  return (
    <accContext.Provider value={{ sharedState }}>
      {props.children}
    </accContext.Provider>
  );
};
export default Wrapper;
