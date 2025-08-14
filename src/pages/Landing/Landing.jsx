import React from 'react'
import girl from "../../assets/girl.png"
import Navbar from '../../components/Navbar'
import styles from "./Landing.module.css"
const Landing = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <h2>Hi, I'm</h2>
          <div className={styles.mainHeading}>Tanya Upadhyay</div>
          <div className={styles.subHeading}>CSE Undergrad | Web Developer | Leader | Learner</div>
          <div className={styles.buttons}>
            <button>My work</button>
            <button>Resume</button>
          </div>

        </div>
        <div className={styles.mainRight}>
          <img src={girl} height="500"></img>
        </div>
      </div>
    </div>
  )
}

export default Landing
