import React from 'react'
import {BsLinkedin,BsGithub,BsCodeSquare} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ivo-nunes-30ab1213a/" target="_blank"> 
            <BsLinkedin/>
            </a>    
            <a href="https://github.com/inunes1904" target="_blank">
            <BsGithub />
            </a>  
            <a href="https://www.codewars.com/users/inunes1904" target="_blank">
            <BsCodeSquare />
            </a>  
    </div>
  )
}

export default HeaderSocials