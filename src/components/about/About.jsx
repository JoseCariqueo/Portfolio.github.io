import React from 'react'
import './About.css'
import levi from '../../assets/AvatarJose.png'
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
              <small> 6 meses de trainee en Kyndryl Chile</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Idiomas</h5>
              <small> Español nativo </small>
              <small> Ingles B1 </small>
            </article>
            <article className='about__card'>
              <ImFolderOpen className='about__icon'/>
              <h5>Proyectos</h5>
              <small> 1 proyecto en proceso </small>
            </article>
          </div>
    <p> Titulado de Analista de Sistemas en IPP, mi práctica profesional fue de 6 meses en Kyndryl (ex IBM) en la cual fui parte de diferentes proyectos de desarrollo web, enfocado en el Front end. En mi práctica pude obtener diferentes certificaciones enfocadas en metodología agile. Actualmente cuento con 6 meses de experiencia en desarrollo
</p>
      <a href='#contact' className='btn btn-primary'> ¿Hablemos? </a>
        </div>
      </div>

    </section>
  )
}

export default About