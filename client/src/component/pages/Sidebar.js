import { useContext } from "react";
import { accContext } from "../context/ApplicationContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ctx = useContext(accContext);
  const visible = ctx.sharedState.sidebar;
  const setVisible = ctx.sharedState.setSidebar;

  console.log(visible);
  return (
    <>
      {visible && (
        <div className=" flex drawer-side 2xl:w-min  2xl:mr-[10rem] mr-[8rem] w-[110px] mt-[90px]  ">
          <label htmlFor="my-drawer-3" className=" "></label>

          <ul className="menu bg-transparant fixed border-r-2 h-full rounded-xl  border-base-200 w-80 pt-20 ">
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/shorts"
              >
                Shorts
              </Link>
            </li>

            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-1 ring-white mt-4 rounded-xl"
                to="/player"
                onClick={setVisible}
              >
                Player
              </Link>
            </li>

            <li className="p-1">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-2 ring-white mt-4 rounded-xl"
                to="/user"
                onClick={setVisible}
              >
                SWAP
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
                Channel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Sidebar;
