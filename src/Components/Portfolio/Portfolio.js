import React from 'react'
import './Portfolio.css'
import IMG1 from "../../Assets/portfolio1.jpg";
import IMG2 from "../../Assets/portfolio2.jpg";
import IMG3 from "../../Assets/portfolio3.jpg";
import IMG4 from "../../Assets/portfolio4.jpg";
import IMG5 from "../../Assets/portfolio5.png";
import IMG6 from "../../Assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial VIsualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for Data Design Web Apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining Tasks and Tracking Progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts Templates & Infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({ id,image,title, github, demo }) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>
     
    </section>
  )
}

export default Portfolio
