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

      <div className="row">
      <div className="col-sm-3">
        <div id="frontend" className="card">
          <img src="./img/frontend.webp" className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Frontend Development Stack</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">React</li>
          </ul>
          </div>    
        </div>
        </div>

        <div className="col-sm-3">
        <div id="backend" className="card">
        <img src="./img/backend.webp" className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Backend Development Stack</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">Node.js</li>
          </ul>
          </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div id="database" className="card">
        <img src="./img/database.png" className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Database & Storage</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">ORM & ODM (Sequelize, Mongoose)</li>
          </ul>
          </div>
        </div>
        </div>

        <div className="col-sm-3">
        <div id="control" className="card">
        <img src="./img/control.png" className="card-img-top" alt="..." height="200" width="50" />
          <div className="card-body">
              <h5 className="card-title">Control & Tests</h5>
          </div>
          <div>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Jest</li>
              <li className="list-group-item">npm</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
