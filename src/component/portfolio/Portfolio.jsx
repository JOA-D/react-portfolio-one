import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// Don't use the images in production

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio  item title 1',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio  item title 2',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio  item title 3',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio  item title 4',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio  item title 5',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio  item title 6',
    github: "https://github.com/JOA-D",
    demo:"https://joa-d.github.io/Portfolio-GSG/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container portfolio_conatiner">
        {
            data.map(({id, image, title, github, demo}) => {
              return (
                <div key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo}
                  className='btn btn-light' target='_blank'>Live Demo</a>
                </div>
              </div>
              )
            })
        }
      </div>
    </section>
  )
}

export default Portfolio