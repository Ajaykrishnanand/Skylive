import { useContext } from "react"
import { accContext } from "../context/useContext"
import { Link } from "react-router-dom";

const Sidebar=()=>{
    const ctx = useContext(accContext);
    const visible = ctx.sharedState.sidebar;
    const setVisible = ctx.sharedState.setSidebar;
   
    return(
        <>
         
            {/* end of sidebar logo */}
             {visible == true && ( 
             <div className="">
             <div className=" flex   drawer-side ">
            <ul className="menu bg-base-200 fixed border-r-2 h-full pb-20  border-white w-80 ">
             <li>
             {/* w-min  pt-[90px] */}
            <label htmlFor="my-drawer-3" className=" "></label>
            {/* this is for sidebar logo */}
            <div className=" flex-none mb-20">
           
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
           
            
           
            
          
            
             </li>
              <li className="p-3">

                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-full"
                  to="/user"
                  onClick={setVisible}
                >
                  Profile
                </Link>
              </li>
              <hr/>
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-full"
                  to="/user"
                  onClick={setVisible}
                >
                  Channel
                </Link>
              </li>
              <hr/>
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-full"
                  to="/user"
                  onClick={setVisible}
                >
                  SWAP
                
                </Link>
             
              </li>
              <li className="p-3">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="ring-1 ring-white rounded-full"
                  to="/dashbord"
                  onClick={setVisible}
                >
                
                Channel
                </Link>
              </li>
            </ul>
            </div>
            </div>
             )}
      
           
       
     
        </>
    )
}
export default Sidebar;