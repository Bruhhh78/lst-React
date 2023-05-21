import React from 'react'
import './Experience.css'
import { VscVerifiedFilled } from 'react-icons/vsc'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontent Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon'/>
              <div>
                <h4>MySQl</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <VscVerifiedFilled className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Experience
