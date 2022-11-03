import React from 'react'
import './Experience.css'

import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5} from 'react-icons/ai'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {DiPhotoshop} from 'react-icons/di'


const Experience = () => {
  return (
    <section id='experience'> 
    <h5> ¿Que habilidades tengo? </h5>
    <h2> Tecnologias que uso </h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Skills</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiFillHtml5 className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <h6 className='text-light'> +1 año de experiencia</h6>
            </div>
          </article>
          <article className='experience__details'>
            <FaCss3Alt className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
            <h6 className='text-light'> +1 año de experiencia</h6>
           </div>
          </article>
          <article className='experience__details'>
            <IoLogoJavascript className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <h6 className='text-light'> +1 año de experiencia </h6>
            </div>
          </article>
          <article className='experience__details'>
            <FaReact className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <h6 className='text-light'> 6 meses de experiencia</h6>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillBootstrapFill className='experience__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <h6 className='text-light'> +1 año de experiencia</h6>
            </div>
          </article>
          <article className='experience__details'>
            <DiPhotoshop className='experience__details-icon'/>
            <div>
            <h4>Photoshop</h4>
            <h6 className='text-light'> +1 año de experiencia</h6>
            </div>
          </article>
        </div>
      </div>
      
        {/*fin del frontend */}


     {/*
     <div className="experience__backend">
      <h3>Backend Develpoment</h3>
      <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
        </div>

      </div>
      */ }
    </div>

    </section>
  )
}

export default Experience