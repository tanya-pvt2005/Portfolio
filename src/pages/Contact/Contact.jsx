import React from 'react'
import styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaTree, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si"; // Special Gmail icon

const Contact = () => {
  return (

    <div className={styles.main}>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanya.pvt2005@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={24} /></a>
        </div>
        <div className={styles.box}>
          <a href="https://github.com/tanya-pvt2005" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
        <div className={styles.box}>
          <a href="https://www.linkedin.com/in/tanya-u-1554a4266/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className={styles.box}>
          <a href="https://linktr.ee/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTree size={24} />
          </a>
        </div>
        <div className={styles.box}>
          <a href="https://x.com/TanyaPvt05" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>

      <div className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>Have a question or want to work together? I'd love to hear from you.</p>

        <div className={styles.contactContainer}>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="icons"></div>

    </div>
  )
}

export default Contact
