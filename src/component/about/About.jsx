import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about_content">
        <div className="about_cards">
          <div className="about_card">
            <FaAward className='about_icon' />
            <h5>Experiance</h5>
            <small>1+ Years Working</small>
          </div>

          <div className="about_card">
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>10+ Worldwide</small>
          </div>

          <div className="about_card">
            <VscFolderLibrary className='about_icon' />
            <h5>Projects</h5>
            <small>15+ Completed</small>
          </div>
            
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam commodi optio corporis, dolor possimus dolorum. Aperiam pariatur excepturi ipsa ipsam expedita? Esse quos eum, autem officiis vel exercitationem voluptatem obcaecati.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About