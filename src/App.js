import React, { useState } from 'react';
import './App.css';
import digitalCamFront from './digitalCamFrontEdited.png';
import digitalCamBack from './digitalCamBack.jpg';
import teacherProfile from './youcode.png'
import tamagotchiImg from './tamagotchiEdited.png'
import folder from './folder.png'
import teaching1 from './codingteachingphoto1.png'
import teaching2 from './codingteachingphoto2.png'

function App() {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className="container">
      <h1 className="homepage-heading"> .𖥔 ݁  Yasmin's tech portfolio ˖ ♡</h1>

  <div className="folder-bar">
  <div className="folder-icon">
    <a href="#projects">
      <img src={folder} alt="Projects" />
      <p>Projects</p>
    </a>
  </div>
  <div className="folder-icon">
    <a href="#techstack">
      <img src={folder} alt="Tech Stack" />
      <p>Tech_Stack</p>
    </a>
  </div>
  <div className="folder-icon">
    <a href="#teaching">
      <img src={folder} alt="Teaching" />
      <p>Teaching</p>
    </a>
  </div>
  <div className="folder-icon">
    <a href="#extras">
      <img src={folder} alt="Extras" />
      <p>Extras</p>
    </a>
  </div>
</div>

    <div className="camera-wrapper">
    <div className="camera-container" onClick={handleClick}>
  <img
    src={showBack ? digitalCamBack : digitalCamFront}
    alt="Digital Camera"
    className="camera-img"
  />
  {showBack && (
    <div className="camera-screen">
      <p className="about-text">
        Hi I'm Yasmin 💻✨ A creative software developer, MSc AI & 3 YOE
      </p>
      <p className="about-text">
        I teach coding to kids in Japan 🇯🇵 and remotely
      </p>
      <p className="about-text">
        I also love building fun interactive projects
      </p>
      <p className="about-text">My tech stack:</p>
      <ul className="about-text no-underline-list">
        <li>JavaScript</li>
        <li>TypeScript fundamentals</li>
        <li>Python</li>
        <li>React & React Native</li>
        <li>Testing: Cypress, Cucumber & Jest</li>
        <li>Robotics</li>
        <li>Scratch</li>
      </ul>
      <p className="about-text">Scroll down for more about me!</p>
    </div>
  )}
</div>


      <section id="projects" className="block apps">
        <h2>App Development Projects📱</h2>
        <p>Explore my projects & README's ✨</p>
        <ul>
        <li><a href="https://github.com/YazCodes/Y2K_stylist_chatbot" target="_blank">🤖 Y2K chatbot</a></li>
          <li><a href="https://github.com/YazCodes/coffeeLottieApp" target="_blank">☕ Coffee Lottie</a></li>
          <li><a href="https://github.com/YazCodes/codingDogApp" target="_blank">🐰 Coding Pet - Kids coding learning app </a></li>
          <li><a href="https://github.com/YazCodes/codingDogApp" target="_blank">🌎 Last Minute - Travel Language Learning</a></li>
          <li><a href="https://github.com/YazCodes/GetGemmedApp" target="_blank">🦷 Get Gemmed - Tooth gem app </a></li>
        </ul>
      </section>

      <section id="techstack" className="block tamagotchi">
      <h2>My Tech Stack📚</h2>
        <div className="tamagotchi-container">
          <img src={tamagotchiImg} alt="Tamagotchi" className="tamagotchi-img" />
          <div className="tamagotchi-screen">
            <h3>♡ My Tech Stack ♡</h3>
            <ul className="tamagotchi-skills">
              <li>💾 JavaScript <span>(fully fed!)</span></li>
              <li>🧃 TypeScript <span>(hydrated!)</span></li>
              <li>🧁 Python <span>(happy & healthy)</span></li>
              <li>🍓 React & React Native <span>(energised!)</span></li>
              <li>✨ Testing: Jest & Cypress <span>(sparkly clean!)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="teaching" className="block teaching">
        <h2>Tech Programming Teacher 👩🏽‍🏫</h2>
        <p>As well as a developer, I am also a coding instructor for children in Tokyo 🇯🇵 and have experience working for different coding organsations in Japan</p>
        <p>I am currently teaching Introduction to AI, Scratch programming and Python fundermentals via game play and project creation.</p>
        <p>I want children to learn coding can be creative and i encourage this in my classes</p>
        <p>My aim is to create a fun, postive and safe learning environment to help kids learn core problem solving skills they can use in both tech and careers outside of tech </p>
        <img src={teaching1} alt="Tech teacher profile picture" width="200" height="350"></img>
        <img src={teacherProfile} alt="Tech teacher profile picture" width="200" height="350"></img>
        <img src={teaching2} alt="Tech teacher profile picture" width="500" height="350"></img>
        <p>Additionally i have experince in the UK 🇬🇧 teaching JavaScript to adults and mentoring school girls who are interested in a tech career </p>
        <p>Read my blog posts on teaching children to code 💡</p>
        <a href="https://yourblog.com/post-1" target="_blank">👾 My journey into teaching code in Japan</a><br />
        <a href="https://yourblog.com/post-2" target="_blank">📚 How I teach kids to actually understand their code</a>
      </section>

      <section id="extras" className="block blender">
        <h2>Extra's</h2>
        <h3> BSC Tech Podcast Episode ⭐</h3>
        <a href="https://www.bcs.org/articles-opinion-and-research/women-in-software-development/" target="_blank">💻 Women in software development</a><br />

        <h3>Blender Journey</h3>
        <p>Follow my 3D art and animation learning process 🎨</p>
        <p>✨ Coming soon ✨</p>
      </section>
    </div>
  </div>
  );
}

export default App;
