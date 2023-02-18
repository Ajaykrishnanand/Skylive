import { Player } from "@livepeer/react";
function PlayerComponent() {
  return (
    <div className="flex items-center component 2xl:ml-[24rem] 2xl:h-[48rem] ml-50 mt-24 2xl:w-[18rem]  w-[27rem] h-[16rem]   rounded-xl 2xl:pt-auto ">
      {" "}
      <Player
        title="Agent 327: Operation Barbershop"
        playbackId="3ae7tk0dacukbinb"
        aspectRatio="9to16"
        // poster="/images/blender-poster.png"
      />
    </div>
  );
}

export default PlayerComponent;
