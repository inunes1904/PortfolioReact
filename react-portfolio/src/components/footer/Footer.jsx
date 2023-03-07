import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a className='footer__logo' href="#">Ivo Nunes</a>
      <ul className='permalinks'>
        <li className="li"> <a href="#">Home</a></li>
        <li className="li"> <a href="#about">About</a></li>
        <li className="li"> <a href="#experience">Skills</a></li>
        <li className="li"> <a href="#services">Soft Skills</a></li>
        <li className="li"> <a href="#portfolio">Portfolio</a></li>
        <li className="li"> <a href="#testimonials">Testimonials</a></li>
        <li className="li"> <a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
            <a href="https://www.linkedin.com/in/ivo-nunes-30ab1213a/" target="_blank"> 
            <FaLinkedinIn/>
            </a>    
            <a href="https://github.com/inunes1904" target="_blank">
            <FiGithub />
            </a>  
            <a href="https://www.codewars.com/users/inunes1904" target="_blank">
            <SiCodewars />
            </a>  
    </div>
    <div className="footer__copyright">
      <small>&copy; Ivo Nunes, all rights reserved.</small>
    </div>

    </footer>
  )
}

export default Footer