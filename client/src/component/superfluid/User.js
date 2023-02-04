import React, { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";

import { daiABI } from "./ABI";

import { ethers } from "ethers";

let account;

alert("hello");
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
  console.log(await superSigner.getAddress());
  const daix = await sf.loadSuperToken("fDAIx");

  console.log(daix);

  try {
    const upgradeOperation = daix.upgrade({
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

  try {
    const downgradeOperation = daix.downgrade({
      amount: amount,
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
  console.log(await superSigner.getAddress());

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
      "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
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

const SuperTokens = () => {
  var [gradeFlag, setGradeFlag] = useState(false);
  return (
    <div className="flex place-content-center pt-20 ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-start">
            <button
              className={`btn ${gradeFlag || "btn-outline"} btn-primary`}
              onClick={() => setGradeFlag(true)}
            >
              Upgrade
            </button>
            <button
              className={`btn ${gradeFlag && "btn-outline"} btn-primary`}
              onClick={() => setGradeFlag(false)}
            >
              Downgrade
            </button>
          </div>
          {/* input start from here */}

          <div className="form-control">
            <label className="label">
              <span className="label-text-primary">
                {" "}
                current {gradeFlag ? "matic" : "maticx"} balace is :
              </span>
            </label>{" "}
            <div className="input-group pb-2">
              <input
                type="text"
                placeholder="0.01"
                className="input input-primary"
              />
              <button className="btn btn-primary">
                {gradeFlag ? "matic" : "maticx"}
              </button>
            </div>
            <div className="flex justify-center pb-2">to</div>
            <div className="input-group">
              <input
                type="text"
                placeholder="0.01"
                className="input input-primary"
              />
              <button className="btn btn-primary">
                {gradeFlag ? "maticx" : "matic"}
              </button>
            </div>
          </div>

          <button className="btn btn-primary pt-3">
            {gradeFlag ? "upgarade" : "downgrade"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperTokens;
