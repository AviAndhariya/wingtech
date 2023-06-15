// All the components and Routes will handled from here

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { About } from "../Components/About";
import { Parent } from "../Components/Parent";
import CounterApp from "../Components/Class";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Parent" element={<Parent />} />
      <Route path="/About" element={<About />} />
      {/* for class component */}
      <Route path="/class" element={<CounterApp />} />

    </Routes>
  );
};
