import React from 'react';
import "./About.css"

export default function About() {
  return (
    <div className="about" id="coffee">
      <h1>About Page</h1>
      <h2>Hello, my name is <a href="https://github.com/hfang821?tab=repositories" class="colored-font">Kevin Fang</a>.      
        Check out my page for my <a href="https://github.com/hfang821?tab=repositories" class="colored-font">latest projects</a>.  
        Or you can reach out to me directly through my <a href="#contact-myself" class="colored-font">Contact page</a>. </h2>
    </div>
  );
}
