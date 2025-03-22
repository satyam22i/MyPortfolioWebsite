import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import "./style.css";
import Admin from "./admin";
import AdminProjectUpload from "./adminproject";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <hr className="divider" />
      <div className="social-icons">
        <a
          href="https://www.facebook.com/share/1B2c5mdHwB/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://www.instagram.com/satyam_life17?igsh=MWZwMjZreWlza3MyYQ==&utm_source=ig_contact_invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://github.com/satyam22i"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/satyam-srivastav-824a33288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <p className="copyright">
        ©satyam {new Date().getFullYear()} All rights reserved
      </p>

      {/* Visible admin button */}
      <div className="admin-button-container">
        <button className="admin-buttons" onClick={() => navigate("/admin")}>
          Admin Panel
        </button>
        <button
          className="admin-buttons"
          onClick={() => navigate("/adminproject")}
        >
          Admin Panel II
        </button>
      </div>
    </footer>
  );
};

export default Footer;
