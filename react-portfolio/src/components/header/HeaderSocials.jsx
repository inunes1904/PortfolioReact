import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
  )
}

export default HeaderSocials