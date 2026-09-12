import React from "react";
import Home from "../pages/home/Home";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/authentication/Login";
import Error from "../Error/Error";
function Root() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Root;
