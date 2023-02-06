import { Routes, Route } from "react-router-dom";
import Dashbord from "../pages/Dashbord";

import User from "../superfluid/User";

const Path = () => {
  return (
    <Routes>
      <Route exact path="/dashbord" element={<Dashbord />} />
      <Route exact path="user" element={<User />} />
    </Routes>
  );
};

export default Path;