import React from 'react'
import './About.css'
import levi from '../../assets/levi.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {ImFolderOpen} from 'react-icons/im'
const About = () => {
  return (
    <section id='about'>
      <h5> Tienes que saber</h5>
      <h2>Sobre Mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
    <div className="about__me-image">
      <img src={levi} alt='About Image'  />
    </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small> 3+ años haciendo nada</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small> 1+ con suerte</small>
            </article>
            <article className='about__card'>
              <ImFolderOpen className='about__icon'/>
              <h5>Proyectos</h5>
              <small> 3 a medio completar</small>
            </article>
          </div>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas enim error, neque quos provident sint maiores. Provident odio aliquid asperiores quidem aut praesentium placeat, quibusdam odit voluptas dolore reiciendis?</p>
      <a href='#contact' className='btn btn-primary'> Hablemos uwu? </a>
        </div>
      </div>

    </section>
  )
}

export default About