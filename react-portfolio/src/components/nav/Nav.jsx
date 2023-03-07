import React from 'react'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineMessage } from 'react-icons/ai'
import {GiBookshelf } from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
import {SiPolywork} from 'react-icons/si'
import './nav.css'

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} 
        className={activeNav === '#' ? 'active' : ''} > 
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=> setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}> 
          <AiOutlineInfoCircle /> 
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}>  
          <GiBookshelf /> 
      </a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}> 
      <SiPolywork /> 
      </a>
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')}
      className={activeNav === '#testimonials' ? 'active' : ''}>   
        <RiServiceLine /> 
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}> 
      <AiOutlineMessage /> 
      </a>
    </nav>
  )
}

export default Nav