import React from 'react'
import './Services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <div className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </div>
        {/* END OF UI/UX DESIGN */}

        <div className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </div>
        {/* END OF Web Development */}

        <div className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </li>
          </ul>
        </div>
        {/* END OF Content Creation */}

      </div>
    </section>
  )
}

export default Services