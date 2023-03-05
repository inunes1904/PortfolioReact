import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiJavascript, SiJquery, SiCsharp,SiMicrosoftsqlserver, SiOracle,
        SiReact, SiBootstrap,SiPython, SiFlask, SiMongodb,SiPostgresql} from 'react-icons/si'
import {FaJava, FaNodeJs} from 'react-icons/fa'
import {DiDjango} from 'react-icons/di'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>My Skills</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>FrontEnd Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive/>
              <SiCss3/>
              <SiJavascript/>
              <SiJquery/>
              <SiBootstrap/>
              <SiReact/>
            </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>BackEnd Development</h3>
        <div className="experience__content">
            <article  className="experience__details">
              <SiPython/>
              <SiCsharp/>
              <FaJava/>
              <FaNodeJs/>
              <DiDjango/>
              <SiFlask/>
            </article>
        </div>
      </div>
      <div className="experience__database">
        <h3>Databases</h3>
        <div className="experience__content">
            <article  className="experience__details">
              <SiMicrosoftsqlserver/>
              <SiPostgresql/>
              <GrMysql/>
              <SiMongodb/>
              <SiOracle/>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience