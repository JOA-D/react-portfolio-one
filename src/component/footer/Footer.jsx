import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>JOAD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experiance</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonlials">Testimonlials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socilas">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://intagram.com" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Jamal Omar. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer