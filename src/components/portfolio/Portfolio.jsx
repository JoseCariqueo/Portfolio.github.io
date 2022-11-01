import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portafolio1.png'
import IMG2 from '../../assets/portafolio2.png'
import IMG3 from '../../assets/portafolio3.png'
import IMG4 from '../../assets/portafolio4.png'
import IMG5 from '../../assets/portafolio5.png'
import IMG6 from '../../assets/portafolio6.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
  {
    id:2,
    image: IMG2,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
  {
    id:3,
    image: IMG3,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
  {
    id:4,
    image: IMG4,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
  {
    id:5,
    image: IMG5,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
  {
    id:6,
    image: IMG6,
    title: 'ComboBreaker en progreso',
    github: 'https://www.github.com',
    demo: 'https://www.facebook.com/kada69'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente </h5>
      <h2> Portfolio </h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id}className='portfolio__item'>
        <div className="portfolio__item-image"></div>
        <img src={image} alt={title} />
        <h3> {title}</h3>
        <div className='portfolio__item-cta'>
          <a href= {github} className='btn'target='_blank' rel="noreferrer">github</a>
        <a href= {demo} className='btn btn-primary' target='_blank' rel="noreferrer">live demo</a>
        </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio