import { Player } from "@livepeer/react";
import btnscss from "./player.module.scss";

import { useHref, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function PlayerComponent() {
  const [videodata, setVideodata] = useState({});
  const [channel, setChannel] = useState([]);
  const { playerID } = useParams();
  console.log(playerID);
  const PosterImage = () => {
    return (
      <div>
        <img src={videodata.thumbnail} />
      </div>
    );
  };

  async function checkalldetails() {
    const data = {
      playerid: playerID,
    };
    try {
      const datais = await axios.post("http://localhost:8081/Videos/id", data);
      setVideodata(datais.data[0]);
      console.log(datais.data[0]);
      const thisdata = {
        adress: datais.data[0].address,
      };
      const channaldata = await axios.post(
        "http://localhost:8081/Creaters/adress",
        thisdata
      );
      setChannel(channaldata.data[0]);
      console.log(channaldata.data[0]);
    } catch (e) {
      console.log(e);
    }
  }

  function handlesubscribe() {}
  useEffect(() => {
    checkalldetails();
  }, [playerID]);
  return (
    <div className=" grid grid-cols-9 component 2xl:ml-[19rem] ml-[60px] mt-24 2xl:w-[80rem]  w-[60rem] h-[26rem]  2xl:h-full 2xl:pt-auto ">
      {" "}
      <div className="  col-span-6 ">
        <Player
          title={videodata.title}
          playbackId={playerID}
          poster={<PosterImage />}
        />
        <div className="flex pt-4 pl-[2px] ">{videodata.title} </div>
        <div className="flex justify-evenly  mt-10  bg-base-200 rounded-box">
          <div className="flex  flex-1">
            <div className="avatar mt-2 ml-2 mb-2   ">
              <div className="w-24 h-24 rounded-full">
                <img src={channel.channelprofile} />
              </div>
            </div>
            <div className="mr-4 mt-9 ml-7">{channel.channelname}</div>
            <button
              className={btnscss.btn}
              onClick={() => {
                console.log("the subscribe buttton is clicked  ");
              }}
            >
              subscribe
            </button>

            <button
              className={btnscss.btn}
              onClick={() => {
                console.log("the join is  button clicked  ");
              }}
            >
              {" "}
              join{" "}
            </button>
          </div>

          <div className="mt-9 mr-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            uploaded at 2 days ago
          </div>
        </div>
        <div>
          <div
            tabIndex={0}
            className="collapse mt-10 collapse-arrow  border-base-300 bg-base-200 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              description ....
            </div>
            <div className="collapse-content">
              <p>{videodata.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 2xl:ml-10 ml-4 ">
        <div>ads</div>
        <img
          src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          className=" h-96 w-auto "
        ></img>
      </div>
    </div>
  );
}

export default PlayerComponent;
