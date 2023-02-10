import { Routes, Route } from "react-router-dom";
import Dashbord from "../Creater/Dashbord";
import Upload from "../livepeer/upload";
import User from "../superfluid/User";
import Live from "../livepeer/Live";
import BecomeCreater from "../Creater/BecomeCreater";
import Player from "../livepeer/player";
import Uploadcard from "../pages/Uploadcard";
const Path = () => {
  return (
    <Routes>
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="/user" element={<User />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/creater" element={<BecomeCreater />} />
      <Route exact path="/uploadcard" element={<Uploadcard/>} />
      <Route exact path="/live" element={<Live />} />
    </Routes>
  );
};

export default Path;
