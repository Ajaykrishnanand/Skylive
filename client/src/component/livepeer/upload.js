import { useState, useRef, useContext } from "react";
import upload from "./upload.png";
import * as tus from "tus-js-client";
import { accContext } from "../context/ApplicationContext";
import { ethers } from "ethers";
import axios from "axios";
function Main() {
  const ctx = useContext(accContext);
  const adress = ctx.sharedState.acclogin.accountAddress;
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [video, setVideo] = useState("");
  const thumbnailRef = useRef("");
  const TitleInputRef = useRef();
  const Channel = ctx.sharedState.channel;
  const profile = Channel[0].channelprofile;
  console.log(profile);
  const descriptionInputRef = useRef();
  const Uploadall = async (videos) => {
    const url = videos.substring(62);
    const data = {
      address: adress,
      description: descriptionInputRef.current.value,
      thumbnail: thumbnailRef.current.value,
      playerid: url,
      totalview: "0",
      Profile: profile,
      free: flag,
      fweoihf: "fwkjeojrfw",
      title: TitleInputRef.current.value,
    };
    console.log(data);
    console.log(data);
    try {
      const response = await axios.post("https://skylive.onrender.com/Videos", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const videoHandler = (event) => {
    setVideo(event.target.files[0]);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      "https://livepeer.studio/api/asset/request-upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${"55b8d283-5a19-4dc0-b6c6-3ac3f00dbd29"}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "tusClient",
        }),
      }
    );

    const { tusEndpoint } = await response.json();

    const upload = new tus.Upload(video, {
      endpoint: tusEndpoint,
      metadata: {
        filename: "tusClient",
        filetype: "video/mp4",
      },
      uploadSize: video.size,
      onError(err) {
        console.error("Error uploading file:", err);
      },
      onProgress(bytesUploaded, bytesTotal) {
        const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
        console.log("Uploaded " + percentage + "%");
      },
      onSuccess() {
        console.log("Upload finished:", upload.url);
        console.log("upload is", upload);
        Uploadall(upload.url);
        setIsLoading(false);
      },
    });
    const previousUploads = await upload.findPreviousUploads();
    if (previousUploads.length > 0) {
      upload.resumeFromPreviousUpload(previousUploads[0]);
    }
    upload.start();
    console.log("hlweoij");
  };
  function showname() {
    var name = document.getElementById("fileInput");
    alert("Selected file: " + name.files.item(0).name);
    alert("Selected file: " + name.files.item(0).size);
    alert("Selected file: " + name.files.item(0).type);
    console.log("got it");
  }
  return (
    <div className="flex items-center  ">
      <form
        className="form-control       grid col-span-2 2xl:h-[40rem] h-[33rem] w-[50rem] border-dashed border-[6px] rounded-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem]  "
        onSubmit={formSubmitHandler}
        encType="multipart/form-data"
      >
        <div className="flex justify-center">
          <img src={upload} className="h-[240px] w-[240px]"></img>
        </div>
        {/* <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-[30px] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={showname}
            />
          </label>
        </div> */}
        <div className="flex justify-between gap-10">
          <div>
            <div>
              <label className="label">
                <span className="label-text pl-2"> Video-Title</span>
              </label>
              <input
                type="text"
                className="input input-bordered  border-base-200 input-info w-full max-w-xs"
                placeholder="Name"
                ref={TitleInputRef}
                required
              />
              <hr></hr>
            </div>
            <div>
              <label className="label">
                <span className="label-text pl-2">Description</span>
              </label>
              <input
                type="text"
                className="input input-bordered border-base-200 input-info w-full max-w-xs"
                placeholder="Description"
                ref={descriptionInputRef}
                required
              />
              <hr></hr>
            </div>
          </div>
          <div>
            <div>
              <label className="label">
                <span className="label-text pl-2">Thumbnail</span>
              </label>
              <input
                type="text"
                className="input input-bordered border-base-200 input-info w-full max-w-xs"
                placeholder="Description"
                ref={thumbnailRef}
                required
              />
              <hr></hr>
            </div>
            <div>
              <label className="label">
                <span className="label-text pl-2 ">Video</span>
              </label>
              <input
                type="file"
                name="videoUrl"
                id="videoUrl"
                className="file-input file-input-bordered border-base-200 file-input-info w-full max-w-xs"
                onChange={videoHandler}
                required
              />
              <hr></hr>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`btn bg-white text-black border-base-200 ${
            isLoading && "loading"
          }`}
          style={{ marginTop: "7%" }}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default Main;
