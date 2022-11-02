import React from 'react'
import './Header.css'
import CTA from './CTA'
import YO from '../../assets/ekisde.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>José Cariqueo</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <CTA></CTA>
        <HeaderSocials/>
      
        <div className='me'>
        <img src={YO} alt="José Cariqueo" className="header__img" />
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>

    </header>
  )
}

export default Header