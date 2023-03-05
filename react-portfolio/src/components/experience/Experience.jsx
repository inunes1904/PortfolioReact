import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiJavascript, SiJquery, SiCsharp,SiMicrosoftsqlserver, SiOracle, SiDjango,
        SiReact, SiBootstrap,SiPython, SiFlask, SiMongodb,SiPostgresql} from 'react-icons/si'
import {FaJava, FaNodeJs} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Technical Skills</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>FrontEnd</h3>
        <div className="experience__content">
            <article className="experience__details">
              <h4><ImHtmlFive className='experience__details-icon'/> HTML</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article className="experience__details">
              <h4><SiCss3 className='experience__details-icon'/> CSS</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article className="experience__details">
              <h4><SiJavascript className='experience__details-icon'/> JavaScript</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article className="experience__details">
              <h4><SiJquery className='experience__details-icon'/> jQuery</h4>
              <small className='text-light text-pad'></small> 
            </article>
            <article className="experience__details">
              <h4><SiBootstrap className='experience__details-icon'/> Bootstrap</h4>
              <small className='text-light text-pad'></small> 
            </article>
            <article className="experience__details">
              <h4><SiReact className='experience__details-icon'/> React</h4>
              <small className='text-light text-pad'>Learning</small>
            </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>BackEnd</h3>
        <div className="experience__content">
            <article  className="experience__details">
              <h4><SiPython className='experience__details-icon'/> Python</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">
              <h4><SiCsharp className='experience__details-icon'/> C#</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">
              <h4><FaJava className='experience__details-icon'/> Java</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">
              <h4><FaNodeJs className='experience__details-icon'/> NodeJS</h4>
              <small className='text-light text-pad'>Learning</small>
            </article>
            <article  className="experience__details">         
              <h4><SiDjango className='experience__details-icon'/> Django</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">           
              <h4><SiFlask className='experience__details-icon'/> Flask</h4>
              <small className='text-light text-pad'></small>
            </article>
        </div>
      </div>
      <div className="experience__database">
        <h3>Databases</h3>
        <div className="experience__content">
            <article  className="experience__details">  
              <h4><SiMicrosoftsqlserver className='experience__details-icon'/> MS SQLServer</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">         
              <h4><SiPostgresql className='experience__details-icon'/> PostgreSQL</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">
              <h4><GrMysql className='experience__details-icon' /> MySQL</h4>
              <small className='text-light text-pad'></small>
            </article>
            <article  className="experience__details">
              <h4><SiMongodb className='experience__details-icon'/> MongoDB</h4>
              <small className='text-light text-pad'>Learning</small>
            </article>
            <article  className="experience__details">
              <h4><SiOracle className='experience__details-icon'/> Oracle</h4>
              <small className='text-light text-pad'></small>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience