import { useEffect, useRef, useState, useContext } from "react";
import LiveButton from "./cameralive.module.scss";
import { Client } from "@livepeer/webrtmp-sdk";
import axios from "axios";
import { accContext } from "../context/ApplicationContext";
function App() {
  const inputEl = useRef(null);
  const videoEl = useRef(null);
  const stream = useRef(null);
  const ctx = useContext(accContext);
  const name = useRef("");
  const Discription = useRef("");
  const Thumbnail = useRef("");
  const [playbackId, setPlaybackId] = useState("");
  const channel = ctx.sharedState.channel;
  const [streamKey, setStreamKey] = useState("");
  const [flag, setFlag] = useState(false);
  const [freeflag, setFreeflag] = useState(false);
  const adress = ctx.sharedState.acclogin.accountAddress;

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
  const UploadLiveStream = async () => {
    const data = {
      address: adress,
      description: Discription.current.value,
      thumbnail: Thumbnail.current.value,
      playerid: playbackId,
      title: name.current.value,
      totalview: "0",
      createrprofile: channel[0].channelprofile,
      free: freeflag,
    };
    console.log(data);
    try {
      const datais = await axios.post(
        "https://skylive.onrender.com/Lives",
        data
      );
    } catch (e) {
      console.log(e);
    }
  };
  async function handlestart() {
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
    console.log(flag);
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
      await UploadLiveStream();
    } catch (e) {
      console.log(e);
    }
  }

  const onButtonClick = async () => {};

  return (
    <>
      <div className="App flex place-items-center ">
        <div className={LiveButton.back}>
          <div className="2xl:ml-[650px] mt-[5rem] border-[7px] border-dotted bg-base-200 rounded-lg ml-[90px] ">
            <video className="App-video rounded-xl " ref={videoEl} />
            <div className="flex justify-evenly pt-10">
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
              </div>
              <div className="form-control pt-5">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary "
                    onClick={() => {
                      setFreeflag(!freeflag);
                      console.log(freeflag + "hofwehfoaefhoh");
                    }}
                  />{" "}
                  <span className="label-text text-primary ">
                    Check this box if you want to do private live stream
                  </span>
                </label>
              </div>
              <div className="form-control pt-5">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary "
                    onClick={() => {
                      setFlag(!flag);
                    }}
                  />{" "}
                  <span className="label-text">
                    Check this box if you want to record your Live stream
                  </span>
                </label>
              </div>

              <button
                className={`btn bg-white text-black border-base-200 `}
                onClick={handlestart}
                style={{ marginTop: "7%" }}
              >
                start your live stream
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
