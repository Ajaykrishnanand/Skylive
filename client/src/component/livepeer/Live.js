import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { accContext } from "../context/ApplicationContext";
function LiveStreaming() {
  const [obsflag, setObsflag] = useState(false);
  const [cameraflag, setCameraflag] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="flex items-center  ">
        <form
          className="form-control       grid col-span-2 2xl:h-[80rem] h-[33rem] w-[50rem] border-dashed border-[6px] rounded-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem]  "
          // onSubmit={formSubmitHandler}
          encType="multipart/form-data"
        >
          <button
            className="btn btn-ghost"
            onClick={() => {
              navigate("/camera");
              alert("your livestream is going to be record");
            }}
            style={{ width: "190px" }}
          >
            click here for going live using your WebCam
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => {
              navigate("/obs");
              alert("your livestream is going to be record");
            }}
            style={{ width: "190px" }}
          >
            click here for going live using OBS
          </button>
        </form>
      </div>
    </>
  );
}

export default LiveStreaming;
