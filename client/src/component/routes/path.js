import { Routes, Route } from "react-router-dom";
import Creater from "../Creater/Creater";
import Upload from "../livepeer/upload";
import User from "../superfluid/User";
import Live from "../livepeer/Live";
import Player from "../livepeer/player";
import Uploadcard from "../pages/Uploadcard";
const Path = () => {
  return (
    <Routes>
      <Route exact path="/user" element={<User />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/creater" element={<Creater />} />
      <Route exact path="/uploadcard" element={<Uploadcard />} />
      <Route exact path="/live" element={<Live />} />
    </Routes>
  );
};

export default Path;
