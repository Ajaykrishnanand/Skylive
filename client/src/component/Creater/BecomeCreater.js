import { useState, useRef, useContext } from "react";
import creater from "./creater.png";
import * as tus from "tus-js-client";
import axios from "axios";
import { ethers } from "ethers";
import { accContext } from "../context/ApplicationContext";
import { useNavigate } from "react-router";
function Main() {
  const ctx = useContext(accContext);
  const navigate = useNavigate();
  const adress = ctx.sharedState.acclogin.accountAddress;
  const Name = useRef();
  const About = useRef();
  const ChannelName = useRef();
  const profilePicture = useRef();
  const BackgroundImage = useRef();

  const uploaddata = async () => {
    const data = {
      channelname: ChannelName.current.value,
      name: Name.current.value,
      about: About.current.value,

      channelprofile: profilePicture.current.value,
      channelbackground: BackgroundImage.current.value,
      address: adress,
      numberOfSubscribers: "0",
    };

    alert(data.name);

    try {
      const datais = await axios.post("http://localhost:8081/Creaters", data);

      navigate("/creater");

      console.log(datais);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <div className="flex items-center  ">
      <form
        className="form-control      grid col-span-2 2xl:h-[40rem] h-[30rem] w-[50rem] border-dashed border-[6px] rounded-bl-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem] "
        // onSubmit={}
        encType="multipart/form-data"
      >
        {" "}
        <p> you are not a creater become a creater</p>
        <div className="flex justify-between gap-10">
          <img
            src={creater}
            className="2xl:h-80 h-48 w-72 mt-20 2xl:w-80"
          ></img>
          <div>
            {/* <label className="label pl-4">
              <span className="label-text">Name</span>
            </label> */}
            <input
              type="text"
              className="input  border-base-400 border-4 w-full max-w-xs  "
              placeholder="Name"
              ref={Name}
              required
            />
            <hr></hr>
            <label className="label ml-2  mt-7">
              {/* <span className="label-text text-[15px] text-base-500">
                Back-ground image
              </span> */}
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="Back-ground Image Link"
              ref={BackgroundImage}
              required
            />
            <hr />
            {/* <label className="label ml-2  mt-7">
              <span className="label-text text-[15px]   text-base-500">Channel logo</span>
            </label>
            <input
              type="file"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="Chanel logo"
              ref={channellogo}
              required
              
            />
            <hr/> */}
            {/* <label className="label">
              <span className="label-text">about</span>
            </label> */}
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs  mt-7"
              placeholder="About"
              ref={About}
              required
            />
            <hr />
            {/* <label className="label">
              <span className="label-text">Channel Name</span>
            </label> */}
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs  mt-7"
              placeholder="Channel Name"
              ref={ChannelName}
              required
            />
            <hr />
            <label className="label">
              {/* <span className="label-text  text-[15px]   text-base-500 ml-2 mt-7">
                Profile picture
              </span> */}
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs "
              placeholder="Profile Picture Link"
              ref={profilePicture}
              required
            />

            <hr />
          </div>
        </div>
        <div></div>
        <button
          type="submit"
          className={`btn bg-white text-black border-base-200 `}
          // isLoading && "loading"
          // style={{ marginTop: "7%" }}
          onClick={() => {
            uploaddata();
          }}
        >
          {/* {isLoading ? "Uploading..." : "Upload"} */}
          upload
        </button>
      </form>
    </div>
  );
}

export default Main;
