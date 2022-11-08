import React from 'react'
import './Services.css'
import azure from '../../assets/azure.png'
import coaching from '../../assets/coaching.png'
import cloud from '../../assets/cloud.png'
import fast from '../../assets/fast.png'
import restless from '../../assets/restless.png'
import site from '../../assets/site.png'
import empathetic from '../../assets/empathetic.png'
import agile from '../../assets/agile.png'



const Services = () => {
  return (
    <section id='services'>
      <h5>Me gusta estar en constante estudio</h5>
      <h2>Certificados y Badgets</h2>
      <div className="container services__container">
      <a href="https://www.credly.com/badges/e9a75590-f74d-4ae4-86ae-3d9f72aa5f04">
      <div className="badges">
      <img src={azure} alt='azure'/>
      </div>
      </a>
      <a href="https://www.credly.com/earner/earned/badge/540b3028-2229-42d1-b28b-cc148e14172c">
      <div className="badges">
      <img src={coaching} alt='coaching'  />
      </div>
      </a>
      
      <a href="https://www.credly.com/earner/earned/badge/5327f424-2b6d-45a1-8013-3dcc42653fcf">
      <div className="badges">
      <img src={cloud} alt='cloud'  />
      </div>
      </a>

      <a href="https://www.credly.com/earner/earned/badge/7325c172-437e-4912-bc64-b4f633c7391e">
      <div className="badges">
      <img src={fast} alt='fast'  />
      </div>
      </a>
      <a href="https://www.credly.com/earner/earned/badge/366bc4d1-0699-45da-a45e-3e01d95e01ee">
      <div className="badges">
      <img src={restless} alt='restless'  />
      </div>
      </a>
      <a href="https://www.credly.com/earner/earned/badge/0841e426-3ee2-4d99-9f86-6a399c983c9a">
      <div className="badges">
      <img src={site} alt='site'  />
      </div>
      </a>
      <a href="https://www.credly.com/earner/earned/badge/f660248b-c5cc-4391-8a49-fab6639309dc">
      <div className="badges">
      <img src={empathetic} alt='empathetic'  />
      </div>
      </a>
      <a href="https://www.credly.com/earner/earned/badge/df87076d-97dc-401b-b8f9-1c564fdb9872">
      <div className="badges">
      <img src={agile} alt='agile'  />
      </div>
      </a>
      
      </div>
    </section>
  )
}

export default Services