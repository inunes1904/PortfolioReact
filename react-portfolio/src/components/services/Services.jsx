import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Soft Skills</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>There they are</h3>
          </div>
          <ul className="service__list">
            <li><BsCheck className="service__list-icon"/> 
                <p>Time management</p>
            </li>
            <li><BsCheck className="service__list-icon"/>
              <p>Communication</p>
            </li>
            <li><BsCheck className="service__list-icon"/>
              <p>Adaptability</p>
            </li>
            <li><BsCheck className="service__list-icon"/>
              <p>Problem-solving</p>
            </li>
            <li><BsCheck className="service__list-icon"/>
              <p>Teamwork</p></li>
            <li><BsCheck className="service__list-icon"/>
              <p>Creativity</p></li>
            <li><BsCheck className="service__list-icon"/>
              <p>Leadership</p></li>
            <li><BsCheck className="service__list-icon"/>
              <p>Eager to learn</p></li>
          </ul>
        
        </article>
      </div>
    </section>
  )
}

export default Services