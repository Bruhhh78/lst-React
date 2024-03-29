import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import {AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


const Nav = () => {
  const [activenav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="https://bruhhh78.github.io/lst-React" onClick={() => setActiveNav('https://bruhhh78.github.io/lst-React')} className={activenav === 'https://bruhhh78.github.io/lst-React/' ? 'active' : ''}>< AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activenav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activenav === '#experience' ? 'active' : ''}><BiBook  /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activenav === '#services' ? 'active' : ''}><RiServiceLine  /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activenav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
