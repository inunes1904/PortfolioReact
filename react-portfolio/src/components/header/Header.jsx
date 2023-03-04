import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/IvoPortfolio.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ivo Nunes</h1>
        <div className="h5 text-light">FullStack Developer</div>
        <CTA/>
        <HeaderSocials />
        <div className="me">
          <img className='img__me' src={ME} alt="Ivo" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header