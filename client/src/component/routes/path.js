import { Routes, Route } from "react-router-dom";
import Dashbord from "../pages/Dashbord";
import Upload from "../livepeer/upload";
import User from "../superfluid/User";
import Live from "../livepeer/Live";
import Player from "../livepeer/player";
const Path = () => {
  return (
    <Routes>
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="/user" element={<User />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/live" element={<Live />} />
      <Route exact path="/player" element={<Player />} />
    </Routes>
  );
};

export default Path;
