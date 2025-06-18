import About from "@/pages/about/about";
import Home from "@/pages/home/home";
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRouter;
