import React from 'react';
import "./About.css"

export default function About(currentPage, handlePageChange) {
  return (
    <div className="about" id="coffee">
      <h1>About Page</h1>
      <div id="pictures">
      <img src="./img/profilepic.jpg" alt="profile" width="" height="200" />
      <img src="./img/powerlifting.jpg" alt="profile" width="" height="200" />
      </div>
      <div id="aboutText">
      <h1>My name is Kevin Fang </h1> 
      <h1>A Full-Stack Web developer from Toronto, Ontario. ✨</h1>
      <p>I’m currently performing Full-Stack Web Development using HTML, CSS and JavaScript, Node.js and their frameworks & libraries! 🌱</p> 
      <p>*Fun fact: Once a chemical Engineer, now a full-time Developer, and a part-time Powerlifter. ⚡ </p> 
      </div>
      <h1>Skills</h1>

      <div class="row">
      <div class="col-sm-3">
        <div id="frontend" class="card">
          <img src="./img/frontend.webp" class="card-img-top" alt="..." height="200" width="50" />
          <div class="card-body">
              <h5 class="card-title">Frontend Development Stack</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">JavaScript</li>
              <li class="list-group-item">CSS</li>
              <li class="list-group-item">React</li>
          </ul>    
        </div>
        </div>

        <div class="col-sm-3">
        <div id="backend" class="card">
        <img src="./img/backend.webp" class="card-img-top" alt="..." height="200" width="50" />
          <div class="card-body">
              <h5 class="card-title">Backend Development Stack</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Express.js</li>
              <li class="list-group-item">Node.js</li>
          </ul>
        </div>
        </div>

        <div class="col-sm-3">
        <div id="database" class="card">
        <img src="./img/database.png" class="card-img-top" alt="..." height="200" width="50" />
          <div class="card-body">
              <h5 class="card-title">Database & Storage</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">SQL</li>
              <li class="list-group-item">MongoDB</li>
              <li class="list-group-item">ORM & ODM (Sequelize, Mongoose)</li>
          </ul>
        </div>
        </div>

        <div class="col-sm-3">
        <div id="control" class="card">
        <img src="./img/control.png" class="card-img-top" alt="..." height="200" width="50" />
          <div class="card-body">
              <h5 class="card-title">Control & Tests</h5>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">Git</li>
              <li class="list-group-item">Jest</li>
              <li class="list-group-item">npm</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
