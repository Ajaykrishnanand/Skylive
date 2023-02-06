import { Player } from "@livepeer/react";
function PlayerComponent() {
  return (
    <div className="flex items-center pl-[32rem] ">
      {" "}
      <Player
        title="Agent 327: Operation Barbershop"
        playbackId="6d7el73r1y12chxr"
        // poster="/images/blender-poster.png"
      />
    </div>
  );
}

export default PlayerComponent;
