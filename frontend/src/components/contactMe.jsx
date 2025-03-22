import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./projAd.css"; // Using the same CSS file for styling

const ContactMe = () => {
  const email = "satyamkum2020@gmail.com";
  const subject = "Hiring Inquiry";
  const body =
    "Hello Satyam,\n\nI would love to discuss a hiring opportunity with you.\n\nBest regards,\n[Your Name]";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        Let's connect! Reach out to me for collaboration, hiring, or just to say
        hello.
      </p>

      {/* Email Button */}
      <a href={mailtoLink} className="contact-button">
        <FaEnvelope /> Email Me
      </a>

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/satyam-srivastav-824a33288"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://www.instagram.com/satyam_life17?igsh=MWZwMjZreWlza3MyYQ==&utm_source=ig_contact_invite"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://github.com/satyam22i"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
