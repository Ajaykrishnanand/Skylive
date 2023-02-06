import React, { useState, useEffect, useRef, useContext } from "react";

import { accContext } from "../context/useContext";
const SuperTokens = () => {
  const ctx = useContext(accContext);
  const [approveflag, setApproveflag] = useState(false);
  const amount = useRef("0");
  //where the Superfluid logic takes place
  async function upgradeTokens(token) {
    await ctx.sharedState.upgradeTokens(token);
  }
  async function approveTokens(token) {
    await ctx.sharedState.approveTokens(token);
    setApproveflag(true);
  }
  async function downgradeTokens(token) {
    await ctx.sharedState.downgradeTokens(token);
  }
  useEffect(() => {
    console.log(amount.current.value);
  }, []);
  var [gradeFlag, setGradeFlag] = useState(false);
  return (
    <div className="flex items-center pl-[32rem]  ">
      <div className="card card-compact w-96  bg-base-100 shadow-xl">
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
            <div className="flex justify-around">
              {" "}
              <div className=" text-emerald-400 breadcrumbs ">
                <ul>
                  <li>
                    <a>{gradeFlag ? "DAI" : "DAIx"}</a>
                  </li>
                  <li>
                    <a>{gradeFlag ? "DAIx" : "DAI"}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="input flex justify-center">
              <input
                type="text"
                ref={amount}
                placeholder="enter amount"
                className="input input-primary"
              />
            </div>
            <div className="pt-3 flex justify-center">
              {" "}
              <button
                className={`btn ${
                  approveflag ? "btn-success" : "btn-accent"
                } btn-wide `}
                onClick={() => {
                  approveTokens(amount.current.value);
                }}
              >
                {approveflag ? " Approved  " : "NOT Approved yet"}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            {" "}
            <button
              className="btn btn-wide btn-primary "
              onClick={() => {
                if (gradeFlag) {
                  console.log(amount.current.value);
                  upgradeTokens(amount.current.value);
                } else {
                  console.log(amount.current.value);
                  downgradeTokens(amount.current.value);
                }
              }}
            >
              {gradeFlag ? "upgarade" : "downgrade"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperTokens;
