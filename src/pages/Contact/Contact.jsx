import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div>
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

          <div className={styles.contactInfo}>
            <h3>Contact Info</h3>
            <p>Email: <span>tanya.pvt2005@gmail.com</span></p>
            <p>LinkedIn: <span></span></p>
            <p>Location: <span>India</span></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
