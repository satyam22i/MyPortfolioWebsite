import React from "react";
import Header from "./header";
import "./style.css";
import satyamimg from "../images/satyam.jpg";

function Main() {
  function downloadResume() {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1Su5pg2R-Qs-Wd4QuG98OTFZO01h3MQBO/view?usp=sharing";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Resume Downloaded");
  }

  return (
    <div>
      <div className="Main-contener">
        <div className="contener">
          <div className="intro">
            <h1 className="intro-heading">
              Hi, I am Satyam, <br />
              Web Developer & Data Analytics.
            </h1>
            <p className="intro-paragraph">
              I am a MERN stack developer and a data analytics student at IIT
              Patna. Passionate about building scalable web applications and
              deriving insights from data to drive impactful decisions.
            </p>
          </div>
        </div>
        <div className="img-contener">
          <img className="img" src={satyamimg} alt="SatyamImg" />
        </div>
      </div>
      <button onClick={downloadResume} className="btn-contener">
        Download Resume
      </button>
    </div>
  );
}
export default Main;
