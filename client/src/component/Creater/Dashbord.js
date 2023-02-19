import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { accContext } from "../context/ApplicationContext";
import Dashbtn from "./Dashbord.module.scss";
const Dashbord = () => {
  const [videoData, setVideoData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [aboutflag, setSboutflag] = useState(false);
  const ctx = useContext(accContext);
  const adress = ctx.sharedState.acclogin.accountAddress;
  const Channel = ctx.sharedState.channel;
  const CheckChannel = async () => {
    const data = {
      address: adress,
    };
    const dataforchannel = await axios.post(
      "https://skylive.onrender.com/Creaters/adress",
      data
    );
    console.log(dataforchannel);
    console.log(Channel);
    const videoList = await axios.post(
      "https://skylive.onrender.com/Videos/adress",
      data
    );
    console.log(videoList);
    await setVideoData(videoList.data);
    setTimeout(() => {
      console.log(videoData);
    }, 2000);
  };

  useEffect(() => {
    CheckChannel();
  }, [adress]);
  console.log(flag);
  return (
    <>
      <div>
        {Channel.map((videoData) => (
          <div className=" component 2xl:ml-36 w-[66rem] 2xl:w-[100rem]   mt-36 ml-20 overflow-hidden  ">
            {/* border-b-2   className=" pt-20  pl-40*/}
            <img
              src={videoData.channelbackground}
              className="w-full h-40"
            ></img>
            <div className=" flex ml-20   ">
              <div>
                <div className="avatar 2xl:ml-20  ml-10">
                  <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2">
                    <img src={videoData.channelprofile} />
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <p className="text-lg  pl-10 font-bold">
                  {videoData.channelname}
                </p>

                <p className="text-lg  pl-10 font-bold">@ {videoData.name}</p>
              </div>
            </div>

            <div className=" flex justify-evenly text-2xl ">
              <div
                className={Dashbtn.btn}
                onClick={() => {
                  if(aboutflag){
                    setSboutflag(false)
                  }
                  if (flag) {
                    setFlag(false);
                  } else {
                    setFlag(true);
                  }
                }}
              >
                videos
              </div>

              <Link
                style={{ marginRight: "20px" }}
                exact
                className={Dashbtn.btn}
                to="/live"
              >
                Go Live
              </Link>
              <Link
                style={{ marginRight: "20px" }}
                exact
                className={Dashbtn.btn}
                to="/upload"
              >
                Upload
              </Link>
              <div className="pl-10">
                <h4
                  className={Dashbtn.btn}
                  onClick={() => {
                    setFlag(false)
                    setSboutflag(!aboutflag);
                    setTimeout(() => {
                      console.log(aboutflag);
                    });
                    setFlag(false);
                  }}
                >
                  about
                </h4>
              </div>
            </div>
            <hr className=" flex  pt-20 " />
            <div className="border-r-2 pl-[80rem]"></div>
          </div>
        ))}
        <div className="grid col-span-2 2xl:pl-60  pl-20  grid-cols-3 2xl:grid-cols-5 place-content-center  divide-y  gap-4">
          {flag &&
            videoData.map((post) => (
              <Link to={"/player/" + post.playerid + "/" + post.address}>
                <div className=" p-8 	">
                  <div className="card card-compact w-60 h-60 shadow-2xl  ">
                    <figure>
                      <a href={post.thumbnail}>
                        <img src={post.thumbnail} onClick={post.thumbnail} />
                      </a>
                    </figure>
                    <div className="card-body h-24 ">
                      <div className="flex justify-between">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-full">
                            <img src={Channel[0].channelprofile} />
                          </div>
                        </div>

                        <div>
                          <p className="card-title text-lg ">{post.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        {/* about */}
        <div>
          {aboutflag && (
            <div className="flex  justify-center">
              <div className=" border-2 border-dashed border-base-200 rounded-3xl h-[25rem] w-[50rem] flex justify-evenly">
                <div>
                  <div className="ml-20">
                    <div className={Dashbtn.gradientt}>
                      about : {Channel[0].about}
                    </div>
                    <div className={Dashbtn.gradientt}>
                      instagram : {Channel[0].ig}
                    </div>
                    <div className={Dashbtn.gradientt}>
                      facebook : {Channel[0].fb}
                    </div>
                    <div className={Dashbtn.gradientt}>
                      tweetr: {Channel[0].tweetr}
                    </div>
                    <div className={Dashbtn.gradientt}>
                      personal websight : {Channel[0].prsonalWebsight}
                    </div>
                    <div className={Dashbtn.gradientt}>
                      others : {Channel[0].others}
                    </div>
                  </div>
                  <div className="ml-[30rem] ">
                    {" "}
                    <div className={Dashbtn.gradientt}>
                      channel created at : {Channel[0].createdAt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Dashbord;
