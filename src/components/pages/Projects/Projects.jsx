import React from 'react';
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">

    <article id="calculator">
      <div id="pitch-logo">
        <h2><a href="https://utorteam13.github.io/Team13_Project1/" class="white-font">Latest Pitch</a></h2>
        <h4>HTML, CSS , JavaScript, DOM Manipulation</h4>
        </div>
    </article>


    <article id="atm">
      <div id="moat-logo">
        <h2><a href="https://github.com/utorteam11/MOAT" class="white-font">Moat</a></h2>
        <h4>JavaScript, Handlebars, Express.js, SQL, Sequelize(ORM)</h4>
      </div>   
    </article>

    <article id="social">
      <div id="social-logo">
        <h2><a href="https://github.com/hfang821/Social-Network-API-BE" class="white-font">Social-Network API</a></h2>
        <h4> JavaScriptMongoDB, JavaScript, Express.js, Mongoose(ODM)</h4>
      </div>   
    </article>

    </div>
  );
}