import { useState, useRef, useContext } from "react";
import creater from "./creater.png";
import * as tus from "tus-js-client";
import axios from "axios";
import { ethers } from "ethers";

function Main() {
  const Name = useRef();
  const About = useRef();
  const ChannelName = useRef();
  const profilePicture = useRef();
  const BackgroundImage = useRef();
  const account = "sdjfow";
  const uploaddata = async () => {
    const data = {
      name: Name,
      about: About,
      channelName: ChannelName,
      profilePicture: profilePicture,
      backgroundImage: BackgroundImage,
      account: account,
    };

    const datais = await axios.Post("", data);
    console.log(datais);
  };
  return (
    <div className="flex items-center  ">
      <form
        className="form-control       grid col-span-2 2xl:h-[40rem] h-[30rem] w-[50rem] border-dashed border-[6px] rounded-bl-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem] "
        // onSubmit={}
        encType="multipart/form-data"
      >
        {" "}
        <p> you are not a creater become a creater</p>
        <div className="flex justify-between gap-10">
          <img src={creater} className="2xl:h-80 h-48 w-72 2xl:w-80"></img>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered  border-base-200 input-info w-full max-w-xs"
              placeholder="Name"
              ref={Name}
              required
            />
            <label className="label">
              <span className="label-text">backgroundimage</span>
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="backgroundimage"
              ref={BackgroundImage}
              required
            />
            <label className="label">
              <span className="label-text">about</span>
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="about"
              ref={About}
              required
            />
            <label className="label">
              <span className="label-text">Channel Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="Channel Name"
              ref={ChannelName}
              required
            />
            <label className="label">
              <span className="label-text">profile picture</span>
            </label>
            <input
              type="text"
              className="input input-bordered border-base-200 input-info w-full max-w-xs"
              placeholder="profile picture"
              ref={profilePicture}
              required
            />
          </div>
        </div>
        <div></div>
        <button
          type="submit"
          className={`btn bg-white text-black border-base-200 `}
          // isLoading && "loading"
          style={{ marginTop: "7%" }}
          onClick={uploaddata}
        >
          {/* {isLoading ? "Uploading..." : "Upload"} */}
          upload
        </button>
      </form>
    </div>
  );
}

export default Main;
