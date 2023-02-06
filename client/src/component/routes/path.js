import { Routes, Route } from "react-router-dom";
import Dashbord from "../pages/Dashbord";
import PostCard from "../pages/PostCard";

import User from "../superfluid/User";

const Path = () => {
  return (
    <Routes>
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="/user" element={<User />} />
      <Route exact path="/dashbord/videos" element={<PostCard/>} />
    </Routes>
  );
};

export default Path;
