import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useRef, useContext, useEffect } from "react";
import { Client } from "@livepeer/webrtmp-sdk";
import { accContext } from "../context/ApplicationContext";
function LiveStreaming() {
  const ctx = useContext(accContext);
  const name = useRef("");
  const Discription = useRef("");
  const Thumbnail = useRef("");
  const [playbackId, setPlaybackId] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [flag, setFlag] = useState(false);
  const [freeflag, setFreeflag] = useState(false);
  const adress = ctx.sharedState.acclogin.accountAddress;
  const inputEl = useRef(null);
  const videoEl = useRef(null);
  const stream = useRef(null);

  useEffect(() => {
    (async () => {
      videoEl.current.volume = 0;

      stream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      videoEl.current.srcObject = stream.current;
      videoEl.current.play();
    })();
  });

  const onButtonClick = async () => {
    const streamKey = inputEl.current.value;

    if (!stream.current) {
      alert("Video stream was not started.");
    }

    if (!streamKey) {
      alert("Invalid streamKey.");
      return;
    }

    const client = new Client();

    const session = client.cast(stream.current, streamKey);

    session.on("open", () => {
      console.log("Stream started.");
      alert("Stream started; visit Livepeer Dashboard.");
    });

    session.on("close", () => {
      console.log("Stream stopped.");
    });

    session.on("error", (err) => {
      console.log("Stream error.", err.message);
    });
  };

  const UploadLiveStream = async () => {
    const data = {
      adress,
      streamKey,
      playbackId,
      Thumbnail,
      Discription,
      free: freeflag,
    };
    console.log(data);
    try {
      const datais = await axios.post("http://localhost:8081/Lives", data);
    } catch (e) {
      console.log(e);
    }
  };
  async function LiveStream() {
    const data = {
      name: name,
      record: flag,
      profiles: [
        {
          name: "720p",
          bitrate: 2000000,
          fps: 0,
          width: 1280,
          height: 720,
        },
        {
          name: "480p",
          bitrate: 1000000,
          fps: 0,
          width: 854,
          height: 480,
        },
        {
          name: "360p",
          bitrate: 500000,
          fps: 0,
          width: 640,
          height: 360,
        },
      ],
    };
    try {
      const ans = await axios.post("https://livepeer.studio/api/stream", data, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${"55b8d283-5a19-4dc0-b6c6-3ac3f00dbd29"}`,
        },
      });
      console.log(ans.data);
      setPlaybackId(ans.data.playbackId);
      setStreamKey(ans.data.streamKey);
      setTimeout(() => {
        UploadLiveStream();
      }, 3000);

      console.log(ans.data.streamKey);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {false && (
        <div className="App">
          <input
            className="App-input"
            ref={inputEl}
            type="text"
            placeholder="streamKey"
          />
          <video className="App-video" ref={videoEl} />
          <button className="App-button" onClick={onButtonClick}>
            Start
          </button>
        </div>
      )}{" "}
      {true && (
        <div className="flex items-center  ">
          <form
            className="form-control       grid col-span-2 2xl:h-[40rem] h-[33rem] w-[50rem] border-dashed border-[6px] rounded-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem]  "
            // onSubmit={formSubmitHandler}
            encType="multipart/form-data"
          >
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
                //    onChange={showname}
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
                    ref={name}
                    required
                  />
                  <hr></hr>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text pl-2">Discription</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered border-base-200 input-info w-full max-w-xs"
                    placeholder="Discription"
                    ref={Discription}
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
                    placeholder="Thumbnail"
                    ref={Thumbnail}
                    required
                  />
                  <hr></hr>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text pl-2 ">Video</span>
                  </label>
                  <button
                    className={`btn bg-white text-black border-base-200 `}
                    onClick={LiveStream}
                    style={{ marginTop: "7%" }}
                  >
                    generate Key
                  </button>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="form-control pt-5">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mr-2"
                  onClick={() => {
                    setFreeflag(!freeflag);
                    console.log(freeflag + "hofwehfoaefhoh");
                  }}
                />{" "}
                <span className="label-text">
                  Check this box if you want to reacord the live streem
                </span>
              </label>
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setFlag(true);
                alert("your livestream is going to be record");
              }}
              style={{ width: "190px" }}
            >
              click to record
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default LiveStreaming;

//import "./App.css";
