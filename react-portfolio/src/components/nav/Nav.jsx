import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineInfoCircle, AiOutlineMessage } from 'react-icons/ai'
import {GiBookshelf } from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

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
      <a href="#services"> 
        <RiServiceLine /> 
      </a>
      <a href="#contact"> <AiOutlineMessage /> </a>
    </nav>
  )
}

export default Nav