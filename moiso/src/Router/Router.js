import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Login from "../components/login";
import Home from "../components/home";
import Articel from "../components/articel";
import SignIn2 from "../components/signIn2";
import UploadArticel from "../components/upload_articel";
import Profile from "../components/profile";
import SignIn1 from "../components/signIn1";

const Router = () => {
  return (
    <Suspense fallback={<Home />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/articel" element={<Articel />} />
        <Route path="/signIn1" element={<SignIn1 />} />
        <Route path="/signIn2" element={<SignIn2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upLoadArticel" element={<UploadArticel />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
