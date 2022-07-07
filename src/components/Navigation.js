import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            //  TODO: Add a comment explaining what this logic is doing
  
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing
  
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>
      </ul>
    );
  }
  
  export default Navigation;
  