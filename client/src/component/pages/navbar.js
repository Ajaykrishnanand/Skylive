
import { Link } from "react-router-dom";
import Path from "../routes/path";
import { accContext } from "../context/useContext";
import { useContext } from "react";
import Login from "./Login";
const Navbar = () => {

    const ctx = useContext(accContext);
    const visible = ctx.sharedState.sidebar;
    const setVisible = ctx.sharedState.setSidebar;
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar flex justify-between border-white border-b-2 fixed bg-base-200">

      
            <div className="flex-none">
            <div className=" ">
              <button
                className="btn btn-circle swap swap-rotate"
                onClick={() => {
                  setVisible(!visible);
            
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
              <input
                type="text"
                placeholder="Search"
                className="input input-primary   w-[40rem] border-2 rounded-full   "
              />
            </div>
            <div className="  lg:block">
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
        </div>

       
     
    </>
  );
};
export default Navbar;

