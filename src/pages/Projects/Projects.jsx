import React from "react";
import styles from "./Projects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaPlay, FaExternalLinkAlt } from "react-icons/fa";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const Projects = () => {
  const projectData = [
    {
      name: "LunaCare",
      image: "https://picsum.photos/seed/lunacare/600/400",
      desc: "Early menarche predictor and childcare services",
      tech: ["MongoDB", "React", "Node", "Express", "Python", "Flask"],
      demoVideo: "/videos/demo1.mp4",
      liveLink: "https://yourproject1.com",
    },
    {
      name: "Geetanjali",
      image: "https://picsum.photos/seed/geetanjali/600/400",
      desc: "Blogging and Reading website",
      tech: ["SpringBoot", "MySQL", "Java", "React"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "Pranika",
      image: "https://picsum.photos/seed/pranika/600/400",
      desc: "Pregnancy support website for new parents",
      tech: ["MongoDB", "React", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "Nyaya Saathi",
      image: "https://picsum.photos/seed/nyayasaathi/600/400",
      desc: "Legal aid website for citizens of every section",
      tech: ["MongoDB", "React", "Next", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "LifeLine Aid",
      image: "https://picsum.photos/seed/lifelineaid/600/400",
      desc: "First Aid help during times of crisis",
      tech: ["MongoDB", "React", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "ExpendWise",
      image: "https://picsum.photos/seed/expendwise/600/400",
      desc: "Expense Tracker website along with financial literature for young adults",
      tech: ["SpringBoot", "MySQL", "Java", "React"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <h1>My Projects</h1>
      <div className={styles.projectsContainer}>
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image} alt={project.name} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className={styles.techStack}>
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className={`${styles.techBadge} ${
                        styles[techItem.toLowerCase().replace(/\s+/g, "")]
                      }`}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                    <FaPlay /> Demo
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Projects;
