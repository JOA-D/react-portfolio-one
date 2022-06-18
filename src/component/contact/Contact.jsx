import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7huan7r', 'template_702o7ub', form.current, 'npPwAC33zx_AynUpn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contaact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <div className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>jamalo.dirawi@gmail.com</h5>
            <a href="mailto:jamalo.dirawi@gmail.com" target="_blank">Send A Message</a>
          </div>
          <div className="contact_option">
            <BsInstagram className='contact_option-icon' />
            <h4>Instagram</h4>
            <h5>jamalomarderawi</h5>
            <a href="https://www.instagram.com/jamalomarderawi/" target="_blank">Send A Message</a>
          </div>
          <div className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+972597628459</h5>
            <a href="https://wa.me/00972597628459" target="_blank">Send A Message</a>
          </div>

        </div>
        {/* End Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Messege</button>
        </form>
      </div>


    </section>
  )
}

export default Contact