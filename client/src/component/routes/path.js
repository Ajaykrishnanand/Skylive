import { Routes, Route } from "react-router-dom";

import User from "../superfluid/User";

const Path = () => {
  return (
    <Routes>
      <Route exact path="/user" element={<User />} />
    </Routes>
  );
};

export default Path;
