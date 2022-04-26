import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
