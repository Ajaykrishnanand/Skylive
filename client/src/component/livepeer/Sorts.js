import { Player } from "@livepeer/react";
function PlayerComponent() {
  return (
    <div className="flex items-center component 2xl:ml-[24rem] ml-52 mt-24 2xl:w-[60rem]  w-[50rem] h-[20rem]  2xl:h-[30rem] 2xl:pt-auto ">
      {" "}
      <Player
        title="Agent 327: Operation Barbershop"
        playbackId="f0489vcaky7qtbxr"
       
        // poster="/images/blender-poster.png"
      />
    </div>
  );
}

export default PlayerComponent;
