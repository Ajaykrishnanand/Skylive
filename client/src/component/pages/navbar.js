import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Path from "../routes/path";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar   border-white border-b-2 fixed bg-base-300">
            <div className="flex-none">
              <button
                className="btn btn-circle swap swap-rotate"
                onClick={() => {
                  setVisible(!visible);
                  console.log("hello");
                }}
              >
                {/* <!-- this hidden checkbox controls the state --> */}
                <input type="checkbox" />

                {/* <!-- hamburger icon --> */}
                <svg
                  className={` ${visible && "swap-on"} fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* <!-- close icon --> */}
                <svg
                  className={` ${visible || "swap-on"} fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </button>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="nav-link "
                to="/"
              >
                SKYLINK
              </Link>
            </div>
            <div className="form-control  flex-1 pr-[610px]">
              <input
                type="text"
                placeholder="Search"
                className="input input-primary "
              />
            </div>
            <div className="flex-none  lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a>
                    <Login />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {visible == true && (
          <div className="drawer-side   pt-[90px] ">
            <label htmlFor="my-drawer-3" className=""></label>
            <ul className="menu bg-base-150 fixed border-r-2 border-white h-full w-80 ">
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-xl"
                  to="/user"
                >
                  Profile
                </Link>
              </li>
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-xl"
                  to="/user"
                >
                  Channel
                </Link>
              </li>
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-xl"
                  to="/user"
                >
                  SWAP
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
