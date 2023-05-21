import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import {emailjs} from '@emailjs/browser'

const Contact = () => {

// const sendEmail =(e) => {
//   e.preventDefault();

//   emailjs.sendForm('service_q8hwjc3','template_quq471g', form.current, 'huHG7eaL-7M1eh9UE')
//   e.target.reset()
// };


  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
     <div className="container__options">
     <article className='container__option'>
        <MdOutlineEmail className='contact__option_icon'/>
        <h4>Email</h4>
        <a href="mailto:anmolsrivastava678@gmail.com" target='blank'>Send A Message</a>
     </article>
     <article className='container__option'>
        <RiMessengerLine className='contact__option_icon'/>
        <h4>Messenger</h4>
        <a href="https://m.me/www.facebook.com/profile.php?id=100074227323519&mibextid=ZbWKwL"target='blank'>Send A Message</a>
     </article>
     <article className='container__option'>
        <BsWhatsapp className='contact__option_icon'/>
        <h4>WhatsApp</h4>
        <a href="https://api.whatsapp.com/send?phone= +917618975642 " target='blank'>Send A Message</a>
     </article>
     </div>
     {/* END OF CONTACT OPTION */}
     <form action=''>
       <input type="text" name='name' placeholder='Your Full Name' required />
       <input type="email" name='email' placeholder='Your Email' required/>
       <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
     </div>
    </section>
  )
}

export default Contact
