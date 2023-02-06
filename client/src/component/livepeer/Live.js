import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
function LiveStreaming() {
  const [name, setName] = useState("");
  const [playbackId, setPlaybackId] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [flag, setFlag] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);

    console.log("value is:", event.target.value);
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
          authorization: `Bearer ${"4402a176-ddeb-4ecc-bfd6-ea9be0466f11"}`,
        },
      });
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
      <div
        className="flex items-center pl-[32rem]"
        style={{ margin: "15% 32%" }}
      >
        <div>
          <input
            className="input w-full max-w-xs"
            id={"my-input"}
            type={"text"}
            value={name}
            style={{ width: "400" }}
            placeholder={"Type here"}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <button
          className="btn btn-ghost"
          onClick={LiveStream}
          style={{ width: "200px" }}
        >
          Generate Stream Key
        </button>
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
      </div>
      <Link
        style={{ marginRight: "20px" }}
        exact
        className="nav-link btn-ghost"
        to={"/player/nothing/" + playbackId}
      >
        Watch Your live stream
      </Link>
      <div>{`StreamKEY =>    ${streamKey}      `}</div>
      {` Stream Server => srt://rtmp.livepeer.com:2935?streamid=${streamKey}`}
    </>
  );
}

export default LiveStreaming;
