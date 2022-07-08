import React from 'react';
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">

    <article id="calculator">
      <div id="pitch-logo">
        <h2><a href="https://utorteam13.github.io/Team13_Project1/" class="white-font">Latest Pitch</a></h2>
        <h4>HTML, CSS & JavaScript</h4>
        </div>
    </article>


    <article id="atm">
      <div id="moat-logo">
        <h2><a href="https://github.com/utorteam11/MOAT" class="white-font">Moat</a></h2>
        <h4>JavaScript, Handlebars, Express.js, Sequelize(ORM)</h4>
      </div>   
    </article>

    </div>
  );
}