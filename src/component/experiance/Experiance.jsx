import React from 'react'
import './Experiance.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>

      <div className='container experiance_container'>
        <div className="experiance_frontend">
          <h3>Frontend Development</h3>
          <div className="experiance_content">
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>HTML</h4>
              <small className='text-light'>Experianced</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>CSS</h4>
              <small className='text-light'>Intermediiate</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediiate</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>Bootstrap</h4>
              <small className='text-light'>Experianced</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>React</h4>
              <small className='text-light'>Experianced</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name_name">
              <h4>Anguler</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
          </div>
        </div>

        <div className="experiance_backend">
          <h3>Backend Development</h3>
          <div className="experiance_content">
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>MySQL</h4>
              <small className='text-light'>Intermediiate</small>
              </div>
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>PHP</h4>
              <small className='text-light'>Intermediiate</small>
              </div>              
            </div>
            <div className="experiance_details">
                <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
              <h4>Laravel</h4>
              <small className='text-light'>Intermediiate</small>
              </div>  
            </div>
            <div className="experiance_details">
              <BsFillPatchCheckFill className="experiance_icon" />
              <div className="experiance_icon_name">
                <h4>Node JS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experiance