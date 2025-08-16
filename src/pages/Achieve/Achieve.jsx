import React from "react";
import styles from "./Achieve.module.css";
import trophee from "../../assets/trophee.png"

const Achieve = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}></h2>

      <div className={styles.wrapper}>
        {/* Left side */}
        <div className={styles.side}>
          <div className={`${styles.box} ${styles.offsetTop}`}>Achievement 1</div>
          <div className={styles.box}>Achievement 2</div>
          <div className={styles.box}>Achievement 3</div>
          <div className={`${styles.box} ${styles.offsetBottom}`}>Achievement 4</div>
        </div>

        {/* Circle */}
        <div className={styles.circle}>
          <img src = {trophee} height ='500'></img>
        </div>

        {/* Right side */}
        <div className={styles.side}>
          <div className={`${styles.box} ${styles.offsetTop}`}>Achievement 5</div>
          <div className={styles.box}>Achievement 6</div>
          <div className={styles.box}>Achievement 7</div>
          <div className={`${styles.box} ${styles.offsetBottom}`}>Achievement 8</div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
