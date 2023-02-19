import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";

import { accContext } from "../context/ApplicationContext";
function LiveStreaming() {
  const navigate = useNavigate();
  const ctx = useContext(accContext);
  const name = useRef("");
  const Discription = useRef("");
  const Thumbnail = useRef("");
  const [playbackId, setPlaybackId] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [flag, setFlag] = useState(false);
  const [freeflag, setFreeflag] = useState(false);
  const adress = ctx.sharedState.acclogin.accountAddress;
  const channel = ctx.sharedState.channel;
  console.log(channel);
  async function LiveStream() {
    const data = {
      name: name.current.value,
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

      const dataf = {
        address: adress,
        description: Discription.current.value,
        thumbnail: Thumbnail.current.value,
        playerid: ans.data.playbackId,
        title: name.current.value,
        totalview: "0",
        createrprofile: channel.channelprofile,
        free: freeflag,
      };

      const datais = await axios.post("http://localhost:8081/Lives", dataf);
      console.log(datais);
      setPlaybackId(ans.data.playbackId);
      setStreamKey(ans.data.streamKey);

      console.log(ans.data.streamKey);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {" "}
      <div className="flex items-center  ">
        <form
          className="form-control       grid col-span-2 2xl:h-[40rem] h-[33rem] w-[50rem] border-dashed border-[6px] rounded-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem]  "
          encType="multipart/form-data"
        >
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
                <div
                  className={`btn bg-white text-black border-base-200 `}
                  onClick={() => {
                    LiveStream();
                  }}
                  style={{ marginTop: "7%" }}
                >
                  generate Key
                </div>
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
          <button
            className="btn btn-ghost"
            onClick={() => {
              navigate("/liveplayer/" + playbackId + "/" + adress);
            }}
            style={{ width: "190px" }}
          >
            watch live
          </button>
        </form>
      </div>
    </>
  );
}

export default LiveStreaming;
