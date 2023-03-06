import React from "react";
import "./about.css";
import ME from "../../assets/me-about_500X_500.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { RiGameFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img  src={ME} className="about-img" alt="About Image" srcset="" />
            </div>
        </div>
     
      
      <div className="about__content">

        <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Experience</h5>
              <small>Less than 2 years</small>
            </article>

            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>Education</h5>
              <small>
                Degree in Systems Management and Computing
              </small>
            </article>

            <article className="about__card">
              <RiGameFill className="about__icon" />
              <h5>Hobbies</h5>
              <small>Code, Read, Learn, Gym & Football</small>
            </article>
          </div>

          <p>
            I am a proactive and very self-sufficient individual, who enjoys
            interacting as a team member. My organization skills allow me to
            work independently and I always approach my work with a strong sense
            of urgency and accuracy. My perseverance and motivation skills allow
            me to identify and solve problems as well as to work under pressure.
            My flexibility helps me to easily adapt to multicultural
            environments and to organizational needs.
          </p>
      
          <a href="#contact" className="btn btn-primary">Let's Chat</a>
        </div>
      </div>
      
    </section>
  );
};

export default About;
