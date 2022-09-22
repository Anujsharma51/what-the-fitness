import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../pages/Banner";
import GymDeatils from "../pages/GymDeatils";
import GymSection from "../pages/GymSection";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Banner />

            <GymSection />
          </>
        }
      ></Route>
      <Route path="GymDeatils/:id" element={<GymDeatils />}></Route>
    </Routes>
  );
};

export default AllRoutes;
