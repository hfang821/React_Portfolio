import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/hfang821">
      <img src="./img/Github-Logo.png"  className="card-img-top" alt="Github" id="git" style={{height:"40px"}} />
      </a>

      <a href="https://www.linkedin.com/in/haoyufang">
      <img src="./img/Linkedln.png"  className="card-img-top" alt="LinkedIn" id="linkedln" style={{height:"40px"}} />
      </a>
      
    </div>

  )
}
