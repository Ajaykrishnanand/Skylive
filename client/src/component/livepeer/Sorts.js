import { Player } from "@livepeer/react";
function PlayerComponent() {
  return (
    <div className="flex items-center component ml-[24rem] h-[48rem]  mt-24 2xl:w-[18rem]  w-[27rem]   rounded-xl pt-auto ">
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
