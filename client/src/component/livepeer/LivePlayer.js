import { Player } from "@livepeer/react";
import btnscss from "./player.module.scss";
import { Link } from "react-router-dom";

import { useHref, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { accContext } from "../context/ApplicationContext";
import axios from "axios";
function PlayerComponent() {
  const ctx = useContext(accContext);

  const [videodata, setVideodata] = useState({});
  const [channel, setChannel] = useState([]);
  const [joinflag, setJoinflag] = useState(true);
  const [subscribeflag, setsubscribeflag] = useState(true);

  const { playerID, id } = useParams();
  const accountAddress = ctx.sharedState.acclogin.accountAddress;
  console.log(playerID);
  const PosterImage = () => {
    return (
      <div>
        <img src={videodata.thumbnail} />
      </div>
    );
  };
  async function Checksubscription() {
    const data = {
      myaddress: accountAddress,
      channelAdress: id,
    };
    console.log(data);
    const datais = await axios.post(
      "https://skylive.onrender.com/Subscribe/check",
      data
    );
    console.log(datais);
    setsubscribeflag(!datais.data.flag);
    setJoinflag(!datais.data.join);
  }

  async function checkalldetails() {
    const data = {
      playerid: playerID,
    };
    try {
      const datais = await axios.post("https://skylive.onrender.com/Lives/id", data);
      setVideodata(datais.data[0]);
      console.log(datais.data[0]);
      const thisdata = {
        adress: id,
      };
      const channaldata = await axios.post(
        "https://skylive.onrender.com/Creaters/adress",
        thisdata
      );
      setChannel(channaldata.data[0]);
      setTimeout(() => {
        Checksubscription();
      }, 100);

      console.log(channaldata.data[0]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handaleJoin() {
    try {
      if (joinflag) {
        const data = {
          myaddress: accountAddress,
          channelAdress: id,
          flag: true,
        };
        await ctx.sharedState.createNewFlow(channel.address, "100");
        const check = await axios.post(
          "https://skylive.onrender.com/Subscribe/join",
          data
        );
        setJoinflag(false);
        console.log(check);
      } else {
        const data = {
          myaddress: accountAddress,
          channelAdress: id,
          flag: false,
        };
        await ctx.sharedState.deleteExistingFlow(id);
        const check = await axios.post(
          "https://skylive.onrender.com/Subscribe/join",
          data
        );
        setJoinflag(true);
        console.log(check);
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function handlesubscribe() {
    const data = {
      channelname: channel.channelname,
      channelprofile: channel.channelprofile,
      channelAdress: channel.address,
      myaddress: accountAddress,
    };
    try {
      if (subscribeflag) {
        const datais = await axios.post(
          "https://skylive.onrender.com/Subscribe",
          data
        );
        setsubscribeflag(false);
        console.log(datais);
      } else {
        alert("unsubscribing");
        const data = {
          myaddress: accountAddress,
          channelAdress: id,
        };
        const datais = await axios.post(
          "https://skylive.onrender.com/Subscribe/unsubscribe",
          data
        );
        setsubscribeflag(true);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    checkalldetails();
  }, [playerID]);
  return (
    // <div>wcfordhohi</div>
    <div className=" grid grid-cols-9 component 2xl:ml-[19rem] ml-[60px] mt-24 2xl:w-[80rem]  w-[60rem] h-[26rem]  2xl:h-full 2xl:pt-auto ">
      {" "}
      <div className="  col-span-6 ">
        <Player
          title={videodata.title}
          playbackId={playerID}
          poster={<PosterImage />}
          theme={{
            borderStyles: {
              containerBorderStyle: "hidden",
            },
            colors: {
              accent: "#ebcdf7",
            },
            space: {
              controlsBottomMarginX: "10px",
              controlsBottomMarginY: "5px",
              controlsTopMarginX: "15px",
              controlsTopMarginY: "10px",
            },
            radii: {
              containerBorderRadius: "0px",
            },
          }}
        />
        <div className="flex pt-4 pl-[2px] ">{videodata.title} </div>
        <div className="flex justify-evenly  mt-10  bg-base-200 rounded-box">
          <div className="flex  flex-1">
            <div className="avatar mt-2 ml-2 mb-2   ">
              <div className="w-24 h-24 rounded-full">
                <img src={channel.channelprofile} />
              </div>
            </div>
            <Link to={"/creater/" + channel.address}>
              {" "}
              <div className="mr-4 mt-9 ml-7">{channel.channelname}</div>
            </Link>

            <button
              className={btnscss.btn}
              onClick={() => {
                handlesubscribe();
              }}
            >
              {subscribeflag ? " subscribe" : " unsubscribe"}
            </button>

            <button
              className={btnscss.btn}
              onClick={() => {
                handaleJoin();
              }}
            >
              {" "}
              {joinflag ? "join" : " joined"}{" "}
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
        {joinflag && (
          <div>
            ads
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              className=" h-96 w-auto "
            ></img>
          </div>
        )}
      </div>{" "}
    </div>
  );
}

export default PlayerComponent;
