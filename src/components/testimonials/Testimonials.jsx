import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpeg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpeg";
import AVTR5 from "../../assets/avatar5.jpeg";

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Diego Molina",
    position: "Network Engineer",
    review: 'José Luis corresponde a un profesional con una marcada orientación a la obtención de resultados. Dado su perfil de investigación y proactividad, se desenvuelve de manera excelente tanto en Soporte como en lo que es su fuerte (desarrollo y programación), donde cumple con todos los resultados y metas en los tiempos establecidos. Posee una forma de trabajar metódica y documentada lo cual permite realizar seguimiento de manera fácil y expedita de los avances en proyectos. Sin duda un gran elemento capaz de desenvolverse en cualquier entorno TI.'
  },
  {
    avatar: AVTR2,
    name: "Guillermo Romero",
    position: "Level 2 support",
    review: 'José es una persona que logra motivarte a ser la mejor versión de ti, haciendo énfasis en que te prepares y estudies para ser la mejor versión profesional que puedas llegar a ser, adicionalmente tiene voluntad de enseñarte acerca del conocimiento que posee y que aprende con el tiempo es muy sencillo trabajar con él porque es una persona genuina y desenvuelta a la hora de emprender tareas rutinarias o nuevos desafíos, gracias a él he incursionado en cursos y aprendizajes que me han ayudado a crecer como profesional.'
  },
  {
    avatar: AVTR3,
    name: "Cristian Silva",
    position: "Senior network administrator",
    review: 'José es un trabajador muy profesional, prolijo y comprometido con las labores que desempeña, busca la mejor solución, considerando el costo beneficio. es una persona confiable y comprometida con la organización y su equipo de trabajo'
  },
  {
    avatar: AVTR4,
    name: "Robert Calderon",
    position: "Frontend developer",
    review: 'Tuve la oportunidad de trabajar con José en el área de desarrollo de kyndryl, José se destaca por ser un gran profesional del área, muy proactivo y comprometido con sus labores, creativo en dar nuevas ideas y nuevos puntos de vista en los proyectos en los cuales trabajamos, siempre teniendo las ganas de aprender nuevas tecnologías y herramientas donde constantemente estaba predispuesto a compartir sus conocimientos y lo que iba aprendiendo.'
  },
  {
    avatar: AVTR5,
    name: "Francisca Benavides",
    position: "Backend developer",
    review: 'José Luis es un profesional con mucha inquietud en aprender, es autodidacta, siempre se ve muy interesado en obtener nuevos conocimientos y compartirlos con sus pares. En más de una ocasión ha obtenido información de cursos y aprendizajes necesarios para el desarrollo de un profesional que está iniciando en Ti y no duda en enviarlos y motivarte a hacerlos. Es una persona muy comprometida en todo lo que hace y un excelente compañero de equipo. Además de trabajar con el, fuimos compañeros de carrera y cada vez que realizamos trabajos en equipo, puedo decir con certeza que siempre se esforzó en hacer un trabajo mas allá de solo cumplir ya que se esmeraba en los detalles y la innovación constante.'
   
  }
]

const Testimonials = () => {

  return (
    <section id="testimonials">
      <h5> Experiencia con compañeros de trabajo</h5>
      <h2> Recomendaciones desde Linkedin</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name,position, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="avatar 1" />
          </div>
          <h5 className='job__name'>{name}</h5>
          <h6 className='job__position'>{position}</h6>
          <small className='job__review'>
          {review}
          </small>
        </SwiperSlide>
            )
          })
        }
        
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
