import React, { useState, useEffect } from 'react';
import styles from "./TechStack.module.css";

const TechStack = () => {
  // Skills data
  const skillsData = {
    Languages: [
      { name: "C", percentage: 60, info: "Started with C to learn foundations of programming" },
      { name: "C++", percentage: 70, info: "Studied OOPS concepts and strengthened foundations" },
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
      { name: "SQL", percentage: 80, info: "Relational database design and queries" },
      { name: "MongoDB", percentage: 75, info: "NoSQL database with Node.js" },
    ],
    AIML: [
      { name: "Streamlit", percentage: 70, info: "Building interactive ML apps" },
      { name: "Scikit-learn", percentage: 65, info: "ML algorithms and pipelines" },
    ],
    Blockchain: [
      { name: "Theoretical Knowledge", percentage: 50, info: "Understanding blockchain principles" },
    ],
    Cloud: [
      { name: "AWS", percentage: 60, info: "Lab practice on cloud services" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [animate, setAnimate] = useState(false);

  // Trigger fade-in animation when category changes
  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>My Technical ToolBox</h1>

      {/* Buttons */}
      <div className={styles.buttons}>
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`${styles.glassButton} ${styles[category.toLowerCase()]}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills list */}
      </div>
  );
};

export default TechStack;
