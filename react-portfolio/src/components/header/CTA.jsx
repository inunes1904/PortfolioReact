import React from 'react'
import CV from '../../assets/IvoCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Chat with me</a>
    </div>
  )
}

export default CTA