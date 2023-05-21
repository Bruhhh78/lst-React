import React from 'react'
import './Footer.css'
import {FaLinkedin } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
 <footer>
  <a href="/" className='footer__logo'>ANMOL</a>

  <ul className='permalinks'>
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <div className="footer__socials">
    <a href="https://m.me/www.facebook.com/profile.php?id=100074227323519&mibextid=ZbWKwL"><FaFacebook/></a>
    <a href="https://twitter.com/anmol4467?t=CEAibU6zGNg9QnlZnyxAEQ&s=03"><FaTwitter/></a>
    <a href="https://www.linkedin.com/in/anmol-srivastava-b54044258"><FaLinkedin/></a>
  </div>

<div className="footer__copyright">
   <small>&copy;Anmol Srivastava. All rights reserved.</small>
</div>

 </footer>
  )
}

export default Footer
