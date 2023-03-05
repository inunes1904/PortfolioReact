import React from 'react'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineMessage } from 'react-icons/ai'
import {GiBookshelf } from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
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
      <a href="#services" onClick={()=> setActiveNav('#services')}
      className={activeNav === '#services' ? 'active' : ''}>   
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