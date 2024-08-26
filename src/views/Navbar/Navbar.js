// Navbar.js

import "./Navbar.css"
import { TITLE } from "../../config/data";

function Navbar() {
  return (
    <div className="navbar">
        <span className="brand-Name">
       {TITLE}
         </span> 
         <div>
            <a href="/" className="navbar-link">Home</a>
            <a href="/about" className="navbar-link">About</a>
            <a href="/contact" className="navbar-link">Contact</a>
         </div>
    </div>
  )
}


// Use named exports
export { Navbar};