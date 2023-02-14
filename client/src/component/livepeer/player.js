import { Player } from "@livepeer/react";
import "./player.module.css"
function PlayerComponent() {
  return (
  
    <div className=" grid grid-cols-9 component 2xl:ml-[19rem] ml-[60px] mt-24 2xl:w-[80rem]  w-[60rem] h-[26rem]  2xl:h-full 2xl:pt-auto ">
      {" "}
      <div className="  col-span-6 ">
      <Player
        title="Agent 327: Operation Barbershop"
        playbackId="6d7el73r1y12chxr"
        // poster="/images/blender-poster.png"
      
      />
      <div className="flex justify-center">video name </div>
      <div className="flex justify-evenly  pt-20  bg-base-200 rounded-box">
        <div className="flex justify-between flex-1">
          <div className="avatar   ">
            <div className="w-24 h-24 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex-1">channel name</div>
        </div>

        <div>uploaded at 2 days ago</div>
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
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
      </div>
      <div className="col-span-3 2xl:ml-10 ml-4 ">
       <div>ads</div>
        <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" className=" h-96 w-auto "></img>
      </div>
    </div>
  );
}

export default PlayerComponent;
