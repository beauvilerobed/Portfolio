import React from 'react';
import '../App.css';
import { Link } from "react-scroll";
 
function NavBar(props) {
  return (
        <div className="w3-half w3-black w3-container w3-center" style={{height: "700px"}}>
            <div className="w3-padding-64">
            <h1><strong>Robed Beauvile</strong></h1>
            <div id="container" className="container-fluid"></div>
            <h3><strong>Welcome!</strong></h3>
            </div>
            <div className="w3-padding-64 w3-animate-top">
              <Link
                to='about'
                spy={true}
                smooth={true}
                duration={500}
                className='w3-button w3-black w3-block w3-hover-light-grey w3-padding-16'
              >
                About Me
              </Link>

              <Link
                to='work'
                spy={true}
                smooth={true}
                duration={500}
                className='w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16'
              >
                Projects
              </Link>

              <Link
                to='extracurricular'
                spy={true}
                smooth={true}
                duration={500}
                className='w3-button w3-black w3-block w3-hover-brown w3-padding-16'
              >
                Extracurricular
              </Link>

              <Link
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className='w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16'
              >
                Contact
              </Link>

              <Link
                to='resume'
                spy={true}
                smooth={true}
                duration={500}
                className='w3-button w3-black w3-block w3-hover-light-grey w3-padding-16'
              >
                Resume
              </Link>
        </div>
          <div>
              <div>
                <p>
                  <span className="contact-links w3-button w3-hover-light-grey"><a href="https://github.com/beauvilerobed">Github</a></span>
                  <span className="contact-links w3-button w3-hover-light-grey"><a href="https://www.linkedin.com/in/robed-beauvil/">Linkedin</a></span>
                  <span className="contact-links w3-button w3-hover-light-grey"><a href="mailto: robedbeauvile001@gmail.com">Gmail</a></span>
                </p>
              </div>
          </div>
    </div>
  )
}
 
export default NavBar;