import { useContext } from "react";
import { accContext } from "../context/useContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ctx = useContext(accContext);
  const visible = ctx.sharedState.sidebar;
  console.log(visible);
  return (
    <>
      {visible && (
        <div className=" flex drawer-side w-min  pt-[90px] ">
          <label htmlFor="my-drawer-3" className=" "></label>

          <ul className="menu bg-base-200 fixed border-r-2 h-full  border-white w-80 ">
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
                to="/upload"
              >
                Upload
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
            <li className="p-3">
              <Link
                style={{ marginRight: "20px" }}
                exact
                className="ring-1 ring-white rounded-xl"
                to="/dashbord"
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
