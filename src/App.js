import React, { useState } from "react";
import "./App.css";

import digitalCamFront from "./digitalCamFrontEdited.png";
import digitalCamBack from "./digitalCamBack.jpg";
import tamagotchiImg from "./tamagotchiEdited.png";
import folder from "./folder.png";
import techStack from "./techStack.png";
import teachingPost from "./teachingPost.png";
import techProjects from "./techProjects.pdf";
import backDigiCam from "./backDigiCam.png";
import contactInfo from "./portfolioContactInfo.mp4";
import thanksVideo from './thankYou.mp4';
import uxui from './UIUXdev.png'

function App() {
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => setShowBack(!showBack);

  return (
    <div className="container">
      <h1 className="homepage-heading">.𖥔 ݁ Yasmin's tech portfolio ˖ ♡</h1>

      <div className="folder-bar">
        {[
          { href: "#projects", label: "Projects" },
          { href: "#techstack", label: "Tech_Stack & design" },
          { href: "#teaching", label: "Teaching" },
          { href: "#extras", label: "Extras" },
          { href: "#contact", label: "Contact_Me" },
        ].map((item, index) => (
          <div className="folder-icon" key={index}>
            <a href={item.href}>
              <img src={folder} alt={item.label} />
              <p>{item.label}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="camera-wrapper">
        <div className="camera-container" onClick={handleClick}>
          {!showBack ? (
            <img
              src={digitalCamFront}
              alt="Digital Camera Front"
              className="camera-img"
            />
          ) : (
            <img
              src={backDigiCam}
              alt="Digital Camera Back"
              className="camera-back"
            />
          )}
        </div>
      </div>

      <section id="projects">
        <h2>Dev Projects 📱</h2>
        <p>Explore my <a href="https://github.com/YazCodes?tab=repositories">GITHUB</a> projects & README's ✨</p>
        <iframe
          src={`${techProjects}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`}
          title="Tech Projects"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      </section>

      <section id="techstack">
        <h2>My Tech Stack 📚</h2>
        <img src={techStack} alt="Images of my tech stack" />
      </section>

      <section id="teaching">
        <h2>Tech Programming Teacher 👩🏽‍🏫</h2>
        <img src={teachingPost} alt="Teaching blog post" />
         <img src={uxui} alt="UX/UI post" />
      </section>

      <section id="extras">
        <h2>Extras</h2>
        <div className="tamagotchi-extras">
          <img src={tamagotchiImg} alt="Tamagotchi" className="tamagotchi-extras-img" />
          <div className="tamagotchi-extras-screen">
            <h1>Other technologies/interests I've been looking into</h1>

            <h3>BSC Tech Podcast Episode ⭐</h3>
            <a
              href="https://www.bcs.org/articles-opinion-and-research/women-in-software-development/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 Women in software development
            </a>

            <h3>✨ Digital design ✨</h3>
            <p>
              I have been looking into Blender, Krita & Canva in creating digital
              designs
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
         <h2>Contact Me! 📧 </h2>
        <video width="500" 
         controls loop 
          autoPlay 
          muted 
          playsInline
        >
          <source src={contactInfo} type="video/mp4" />
        </video>
      </section>

      <section id="Thankyou">
         <h2>Thanks! </h2>
        <video width="800" 
          controls loop 
          autoPlay 
          muted 
          playsInline
        >
          <source src={thanksVideo} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}

export default App;
