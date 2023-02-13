import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { accContext } from "../context/ApplicationContext";
const Dashbord = () => {
  const [channeldata, setChannelData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const ctx = useContext(accContext);
  const adress = ctx.sharedState.acclogin.accountAddress;
  const CheckChannel = async () => {
    const data = {
      address: adress,
    };
    const dataforchannel = await axios.post(
      "http://localhost:8081/Creaters/adress",
      data
    );
    console.log(dataforchannel);
    setChannelData(dataforchannel.data);
    const videoList = await axios.post(
      "http://localhost:8081/Videos/adress",
      data
    );
    console.log(videoList);
    setVideoData(videoList.data);
    console.log(videoData);
  };

  useEffect(() => {
    CheckChannel();
  }, [adress]);

  return (
    <>
      <div className=" component 2xl:ml-36 w-[66rem] 2xl:w-[100rem] mt-36 ml-20  ">
        {/* border-b-2   className=" pt-20  pl-40*/}
        <img
          src="https://i.dummyjson.com/data/products/1/3.jpg"
          className="w-full h-40"
        ></img>
        <div className=" flex ml-20   ">
          <div>
            <div className="avatar 2xl:ml-20  ml-10">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.dummyjson.com/data/products/2/3.jpg" />
              </div>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-lg  pl-10 font-bold">channel name</p>

            <p className="text-lg  pl-10 font-bold">@username</p>
          </div>
        </div>

        <div className=" flex justify-evenly text-2xl ">
          <div className="   text-base-600  ">videos</div>

          <Link
            style={{ marginRight: "20px" }}
            exact
            className="ring-1 btn  ring-white rounded-xl"
            to="/live"
          >
            Go Live
          </Link>
          <Link
            style={{ marginRight: "20px" }}
            exact
            className="ring-1 btn ring-white rounded-xl"
            to="/upload"
          >
            Upload
          </Link>
          <div className="pl-10">
            <h3 className="  text-black  outline-0">about</h3>
          </div>
        </div>
        <hr className=" flex  pt-20 " />
        <div className="border-r-2 pl-[80rem]"></div>
      </div>
    </>
  );
};
export default Dashbord;
