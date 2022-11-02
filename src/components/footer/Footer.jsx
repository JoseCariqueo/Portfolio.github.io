import React from 'react'
import './Footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Jose C</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">Sobre mi</a></li>
      <li><a href="#experience">Experiencia</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#portfolio">Portafolio</a></li>
      <li><a href="#testimonials">Recomendaciones</a></li>
      <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/josecariqueo" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="htpps://dribbble.com" about='_blank'><FiDribbble/></a>
        <a href="https://twitter.com/kada_bass" target='_blank' rel="noreferrer"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; José Cariqueo</small>
      </div>

    </footer>
  )
}

export default Footer