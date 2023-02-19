import { useState, useContext, useEffect } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Path from "../routes/path";
import { accContext } from "../context/ApplicationContext";

import { ethers } from "ethers"

const Navbar = () => {
  const ctx = useContext(accContext);
  // const visible = ctx.sharedState.sidebar;
  // const setVisible = ctx.sharedState.setSidebar;
  // console.log(ctx.sharedState.sidebar);
  useEffect(() => {
    console.log(ctx.sharedState.sidebar);
  }, [ctx.sharedState.sidebar]);

  //  this is the login function
  const accountAddress = ctx.sharedState.acclogin.accountAddress;
  const connectHendler = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ctx.sharedState.setData(provider, signer, accounts[0]);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(accountAddress);

  return (
    <>
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
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar flex justify-between  bg-transparent fixed ">
            <div>
              <div className="flex-none">
                <button
                  className="btn btn-circle swap swap-rotate"
                  onClick={() => {
                    ctx.sharedState.setSidebar(!ctx.sharedState.sidebar);
                    //   console.log(ctx.sharedState.sidebar);
                  }}
                >
                  {/* <!-- this hidden checkbox controls the state --> */}
                  {/* <input type="checkbox" /> */}

                  {/* <!-- hamburger icon --> */}
                  <svg
                    className={` ${
                      ctx.sharedState.sidebar && "swap-on"
                    } fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* <!-- close icon --> */}
                  <svg
                    className={` ${
                      ctx.sharedState.sidebar || "swap-on"
                    } fill-current`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </button>
              </div>

              <div className=" px-2 mx-2">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="nav-link font-bold text-3xl "
                  to="/"
                >
                  Skylive.tv
                </Link>
              </div>
            </div>
            <div className="form-control    ">
            <Link to="/search">
              <input 
                type="text"
                placeholder="Search"
                className="input bg-transparant border-white  w-[40rem] border-2 rounded-full   "

              />
              </Link>
            </div>
            <div className="  lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <button
                    onClick={connectHendler}
                    style={{ marginRight: "20px", marginLeft: "20px" }}
                    exact
                    className=" btn bg-transparent rounded-full"
                  >
                    {accountAddress
                      ? `${accountAddress.substr(
                          0,
                          5
                        )}...${accountAddress.substr(37, 42)}`
                      : "connect"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
