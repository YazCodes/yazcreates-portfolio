import React, { useState } from "react";
import "./App.css";

import digitalCamFront from "./assets/digitalCamFrontEdited.png";
import tamagotchiImg from "./assets/tamagotchiEdited.png";
import folder from "./assets/folder.png";
import techStack from "./assets/techStack.png";
import teachingPost from "./assets/teachingPost.png";
import techProjects from "./assets/techProjects.pdf";
import backDigiCam from "./assets/backDigiCam.png";
import contactInfo from "./assets/portfolioContactInfo.mp4";
import thanksVideo from './assets/thankYou.mp4';
import uxui from './assets/UIUXdev.png'
import codingMusic from './assets/codingMusic.png'
import mediaPost from './assets/yaz social media.png'
import mediaAnalytics from './assets/tiktokpost.png'
import polaroid from './assets/polaroid.png'

import DressUpGame from "./components/dressUpGame";

function App() {
  const [showBack, setShowBack] = useState(false);
  const handleClick = () => setShowBack(!showBack);

  return (
    <div className="container">
      <h1 className="homepage-heading">.𖥔 ݁ Yasmin's portfolio ˖ ♡</h1>
      <h3>Hi! i'm a creative technologist i blend tech, creative design and fashion to build innovative, interactive, and artistic digital experiences for everyone ♡.</h3>

      <div className="folder-bar">
        {[
          { href: "#projects", label: "Tech Projects" },
          { href: "#coding", label: "Coding & UI/UX Design" },
          { href: "#content creation", label: "Content Creation" },
          { href: "#fashion", label: "Fashion" },
          { href: "#contact", label: "Contact Me" },
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
              src={polaroid}
              alt="Digital Camera Back"
              className="camera-back"
            />
          )}
        </div>
      </div>

      <div>
        <h1>Early 2000's throwback</h1>
        <p>Click <a href="https://github.com/YazCodes?tab=repositories">here</a> to see how i coded this game :) </p>
        <p>I created some of the outfits using <a href="=https://krita.org/en/">Krita</a></p>
        <DressUpGame />
      </div>

      <section id="projects">
        <h2>Tech Projects 📱</h2>
        <p>Explore my <a href="https://github.com/YazCodes?tab=repositories">GITHUB</a> projects & README's ✨</p>
        <iframe
          src={`${techProjects}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`}
          title="Tech Projects"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
        <img src={codingMusic} alt="Info about me coding music" />
      </section>

      <section id="coding & desing">
        <h2>Coding & design 📚</h2>
        <img src={techStack} alt="Images of my tech stack" />
        <img src={uxui} alt="UX/UI post" />
      </section>

      <section id="content creation">
        <h2>Content Creation</h2>
        <img src={mediaPost} alt="Info about my social media" />
        <img src={mediaAnalytics} alt="Analytics details" />
        
      </section>

      <section id="fashion">
        <h2>Fashion</h2>
        <div className="tamagotchi-extras">
          <img src={tamagotchiImg} alt="Tamagotchi" className="tamagotchi-extras-img" />
          <div className="tamagotchi-extras-screen">
            <h1>Coming soooon! ⭐</h1>
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
