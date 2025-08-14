import React from 'react';
import styles from "./TechStack.module.css";
import { useState } from 'react';

const TechStack = () => {

  // we don't need a database
  const skillsData = {
    Languages: [
      { name: "C", percent: 60, info: "Started with C to learn foundations of programming" },
      { name: "C++", percent: 70, info: "Studied OOPS concepts and strengthened foundations" },
      { name: "Python", percentage: 70, info: "Basic python for ML" },
      { name: "Java", percentage: 75, info: "DSA and developement in JAVA" },
      { name: "JavaScript", percentage: 90, info: "Frontend & Node.js" },
    ],
    Frontend: [
      { name: "React", percentage: 75, info: "Building SPAs with React." },
      { name: "CSS", percentage: 85, info: "Styling & animations." },
      { name: "HTML", percentage: 95, info: "Markup & semantics." },
      { name: "JavaScript", percentage: 90, info: "Frontend & Node.js" },
    ],
    Backend: [
      { name: "Node.js", percentage: 85, info: "REST APIs and server logic." },
      { name: "Express", percentage: 80, info: "Web framework for Node.js" },
    ],
    Database: [
      { name: "SQL", percent: 80, info: "Relational database design and queries" },
      { name: "MongoDB", percent: 75, info: "NoSQL database with Node.js" },
    ],
    AIML: [
      { name: "Streamlit", percent: 70, info: "Building interactive ML apps" },
      { name: "Scikit-learn", percent: 65, info: "ML algorithms and pipelines" },
    ],
    Blockchain: [
      { name: "Theoretical Knowledge", percent: 50, info: "Understanding blockchain principles" },
    ],
    Cloud: [
      { name: "AWS", percent: 60, info: "Lab practice on cloud services" },
    ],

  }

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>My Technical ToolBox</h1>

      <div className={styles.buttons}>
        <button className={`${styles.glassButton} ${styles.languages}`} onClick={() => setSelectedCategory('Languages')}> Languages</button>
        <button className={`${styles.glassButton} ${styles.frontend}`} onClick={() => setSelectedCategory('Frontend')}>Frontend</button>
        <button className={`${styles.glassButton} ${styles.backend}`} onClick={() => setSelectedCategory('Backend')}>Backend</button>
        <button className={`${styles.glassButton} ${styles.database}`} onClick={() => setSelectedCategory('Database')}>Database</button>
        <button className={`${styles.glassButton} ${styles.aiml}`} onClick={() => setSelectedCategory('AIML')}>AI/ML</button>
        <button className={`${styles.glassButton} ${styles.blockchain}`} onClick={() => setSelectedCategory('Blockchain')}>Blockchain</button>
        <button className={`${styles.glassButton} ${styles.cloud}`} onClick={() => setSelectedCategory('Cloud')}>Cloud</button>
      </div>

      {/* 
      <div className={styles.info}>
        <div className={styles.name}></div>
        <div className={styles.percentage}></div>
        <div className={styles.info}></div> */}
      {/* </div> */}

      {/* if a vategory button is clicked, show skills for that category */}

      {/* shorthand for conditional rendering : if condition is true then return in()*/}
      {selectedCategory && (
        <div className={styles.skillsList}>

          {/* loop through each list inside chosen category */}
          {skillsData[selectedCategory].map((skill, idx)=>(

          // each skill gets own container
          <div key={idx} className={styles.skillItem}>
            {/* Skill name (like "JavaScript", "React", etc.) */}
            <div className={styles.name}>{skill.name}</div>
            {/* Progress bar showing percentage of skill level */}
            <br></br>
            <div className={styles.percentageBar}>
              <div
                className={styles.filledBar}
                style={{ width: `${skill.percentage}%` }} // This sets the length of the bar
              ></div>
             
            </div>
             <br></br>
            {/* Small description about the skill */}
            <div className={styles.info}>{skill.info}</div>
          </div>

         ) )}
        </div>
      )}

    </div>
  );
};

export default TechStack;
