import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'> 
    <h5> Que habilidades tengo? </h5>
    <h2>Mi experiencia</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Develpoment</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
            <small className='text-light'> Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        {/*fin del frontend */}


      <h3>Backend Develpoment</h3>
      <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className=''/>
            <div>
            <h4>Python</h4>
            <small className='text-light'> Experienced</small>
            </div>
          </article>
        </div>

      </div>
    </div>

    </section>
  )
}

export default Experience