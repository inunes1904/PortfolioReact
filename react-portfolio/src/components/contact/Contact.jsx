import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('email-portfolio', 'template_6v509vg', form.current, 'GsY3AM3daZhOXooWe')
    e.target.reset();
  };
  return (
    <section id="contact" >
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>inunes1904@gmail.com</h5>
                <a target="_blank" href="mailto:inunes1904@gmail.com">Send Email</a>
            </article>
            <article className="contact__option">
              <ImWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+999999999</h5>
                <a  target="_blank" href="https://api.whatsapp.com/send?phone=351912168055">Send Message</a>
            </article>
        </div>
       
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" required name='name' placeholder='First and Last Names'/>
        <input type="email" name='email' placeholder='Your email' />
        <textarea name="message" rows="7" placeholder='Your message'></textarea>
        <button type="submit" className='btn btn-primary'>send</button>
       </form>
      </div>

    </section>
  )
}

export default Contact