import React from 'react'
import './About.css'
import  mee  from "../../Assets/mee.png";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
           <div className="about__me-image">
            <img src={mee} alt="img" style={{backgroundColor: '#3b3b62', height:'23rem'}}/>
           </div>
        </div>

        <div className="about__content">
         <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='aboout__icon'/>
            <h5>Experience</h5>
            <small>3+ years Working </small>
          </article>

          <article className='about__card'>
            <FaUsers className='aboout__icon'/>
            <h5>Clients</h5>
            <small>200+ Clients </small>
          </article>

          <article className='about__card'>
            <FaFolderOpen className='aboout__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed </small>
          </article>          
         </div>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed quam ratione maxime delectus dolorum quasi facere accusamus earum tempore, illum, consequatur illo animi numquam quo nostrum. Rerum, ut officiis!
         </p>

         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
