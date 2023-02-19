import { useContext } from "react";
import { accContext } from "../context/ApplicationContext";
import { Link } from "react-router-dom";
import cosbtn from "./Sidebar.module.scss";
const Sidebar = () => {
  const ctx = useContext(accContext);
  const visible = ctx.sharedState.sidebar;
  const setVisible = ctx.sharedState.setSidebar;

  console.log(visible);
  return (
    <>
      {visible && (
        <div className=" flex drawer-side 2xl:w-min  2xl:mr-[10rem] mr-[8rem] w-[110px] 2xl:mt-[90px] mt-[60px]  ">
          <label htmlFor="my-drawer-3" className=" "></label>

          <ul className="menu bg-transparant fixed border-r-2 h-full rounded-xl  border-base-200 w-80 pt-20 ">
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/"
              >
                <div className={cosbtn.gradientt}>Home</div>
              </Link>
            </li>
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/shorts"
              >
                <div className={cosbtn.gradientt}>Shorts</div>
              </Link>
            </li>

            {/* <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-1 ring-white mt-4 rounded-xl"
                to="/player"
                onClick={setVisible}
              >
                <div className={cosbtn.gradientt}>Player</div>
              </Link>
            </li> */}

            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/user"
                onClick={setVisible}
              >
                <div className={cosbtn.gradientt}>Swap</div>
              </Link>
            </li>
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 mt-4 ring-white rounded-xl"
                to="/creater"
                onClick={setVisible}
              >
                <div className={cosbtn.gradientt}>Channel</div>
              </Link>
            </li>
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 mt-4 ring-white rounded-xl"
                to="/subscribers"
                onClick={setVisible}
              >
                <div className={cosbtn.gradientt}>total following</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Sidebar;
