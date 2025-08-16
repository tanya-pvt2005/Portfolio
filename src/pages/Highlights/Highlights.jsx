import React from 'react'
import styles from "./Highlights.module.css"

const Highlights = () => {
  return (
    <div className={styles.main}>
    <div className={styles.highlightsGrid}>
      <div className={`${styles.highlight} ${styles.item1}`}></div>
      <div className={`${styles.highlight} ${styles.item2}`}></div>
      <div className={`${styles.highlight} ${styles.item3}`}></div>
      <div className={`${styles.highlight} ${styles.item4}`}></div>
      <div className={`${styles.highlight} ${styles.item5}`}></div>
      <div className={`${styles.highlight} ${styles.item6}`}></div>
   
    </div>
    </div>
  )
}

export default Highlights
