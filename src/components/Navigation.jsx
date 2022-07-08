import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs" id="list" style={{ display: "flex", justifyContent: "space-between"}}>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </button>
        </li>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </button>
        </li>
        <li className="listName">
        <button type="button" class="btn btn-outline-primary btn-lg">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </button>
        </li>
      </ul>
    );
  }
  
  export default Navigation;
  