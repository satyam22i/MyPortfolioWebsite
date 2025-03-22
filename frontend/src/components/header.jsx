import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Blogs from "./Blogs";
import FeaturedWorks from "./content";
import MySkills from "./skill";

const Header = () => {
  return (
    <nav className="header" aria-label="Main Navigation">
      <ul className="header-content">
        <li className="list-item">
          <Link to="/content">Works</Link>
        </li>
        <li className="list-item">
          <Link to="/blogs">Blog</Link>
        </li>
        <li className="list-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-item">
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

