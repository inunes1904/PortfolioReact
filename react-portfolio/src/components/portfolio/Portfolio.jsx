import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my Recent Work</h5>
      <h2>Portfolio</h2>
    
      <div className="container portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project Title" />
          </div>
          <h3>Ecommerce App</h3>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" className="btn">GitHub</a>
            <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div> 
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Project Title" />
          </div>
          <h3>Authentication & Authorization</h3>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" className="btn">GitHub</a>
            <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div> 
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Project Title" />
          </div>
          <h3>GSC Corporation</h3>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" className="btn">GitHub</a>
            <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div> 
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Project Title" />
          </div>
          <h3>GSC Music</h3>
          <div className="portfolio__item-cta">
            <a href="#" target="_blank" className="btn">GitHub</a>
            <a href="#" target="_blank" className="btn btn-primary">Live Demo</a>
          </div> 
        </article>


      </div>
   
    </section>
  )
}

export default Portfolio