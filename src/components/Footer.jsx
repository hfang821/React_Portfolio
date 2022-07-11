import React from 'react'
import "./Footer.css"
import gitLogo from "./img/GitHub-Logo.png";
import linkedlnLogo from "./img/Linkedln.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/hfang821">
      <img src={gitLogo}  className="card-img-top" alt="Github" id="git" style={{height:"40px"}} />
      </a>

      <a href="https://www.linkedin.com/in/haoyufang">
      <img src={linkedlnLogo}  className="card-img-top" alt="LinkedIn" id="linkedln" style={{height:"40px"}} />
      </a>
      
    </div>

  )
}
