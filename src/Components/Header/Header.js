import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../Assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
<header>
  <div className="container header___container">
    <h5>Hello I'm</h5>
    <h1>Anmol Srivastava</h1>
    <h5 className='text-light'>Fullstack Developer</h5>
    <CTA/>
    <HeaderSocials/>

    <div className='me'>
      <img src={Me} alt="me" style={{borderRadius: "4rem "}}/>
    </div>
   
   <a href="#contact" className='scroll__down'>Scroll Down</a>

  </div>
</header>
  )
}

export default Header
