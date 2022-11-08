import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpgc328', 'template_0baqgbh', form.current, 'N9tfnZJaqtyepEISM')
     e.target.reset();
  };
  return (
    <section id="contact">
      <h5> ¿Hablemos?</h5>
      <h2> Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>joseluiscariqueo@gmail.com</h5>
            <a href="mailto:joseluiscariqueo@gmail.com" target="_blank" rel="noreferrer">Envía un correo</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Kada</h5>
            <a href="https://m.me/kada69" target="_blank" rel="noreferrer">Contactame por facebook</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+56944438799</h5>
            <a href="https://api.whatsapp.com/send?phone=56944438799" target="_blank" rel="noreferrer">Envíame un mensaje</a>
          </article>
        </div>
        {/* fin de contacto*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Tu nombre completo" required />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea name="message" rows="7" placeholder="Tu Mensaje" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar</button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
