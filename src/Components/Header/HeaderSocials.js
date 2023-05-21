import React from 'react'
// import AiFillLinkedin from 'react-icons.Ai';
import {FaLinkedin } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/anmol-srivastava-b54044258" target='blank'><FaLinkedin/></a>
      <a href="https://github.com/Bruhhh78"target='blank'><FaGithub/></a>
      <a href="https://twitter.com/anmol4467?t=CEAibU6zGNg9QnlZnyxAEQ&s=03" target='blank'><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials
