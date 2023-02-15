import { useEffect, useRef } from "react";
import LiveButton from "./cameralive.module.scss"
import { Client } from "@livepeer/webrtmp-sdk";

function App() {
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

  return (
    <>
      <div className="App flex place-items-center ">
        <div className="2xl:ml-[650px] mt-[5rem]  ml-[90px] ">
        
       
        <video className="App-video rounded-xl " ref={videoEl} />
         <div className="flex justify-evenly pt-10"> 
        <input
          className="App-input border-3  rounded-full"
          ref={inputEl}
          type="text"
          placeholder=" Put your stream-Key here"
          />
        <hr/>
        <button className={LiveButton.btn} onClick={onButtonClick}>
          Start
        </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
