import React from 'react'
import styles from './Projects.module.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaPlay, FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {

  //array for project data
  const projectData = [
    {
      name: "LunaCare",
      image: "/images/project1.png",
      desc: "Early menarche predictor and childcare services",
      tech: ["MongoDB", "React", "Node", "Express", "Python", "Flask"],
      demoVideo: "/videos/demo1.mp4",
      liveLink: "https://yourproject1.com"
    },
    {
      name: "Geetanjali",
      image: "/images/project2.png",
      desc: "Blogging and Reading website",
      tech: ["SpringBoot", "MySQL", "Java", "React"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "Pranika",
      image: "/images/project3.png",
      desc: "Pregnancy support website for new parents",
      tech: ["MongoDB", "React", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "Nyaya Saathi",
      image: "/images/project3.png",
      desc: "Legal aid website for citizens of every section",
      tech: ["MongoDB", "React", "Next", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "LifeLine Aid",
      image: "/images/project3.png",
      desc: "First Aid help during times of crisis",
      tech: ["MongoDB", "React", "Node", "Express"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    },
    {
      name: "ExpendWise",
      image: "/images/project3.png",
      desc: "Expense Tracker website along with financial literature for young adults",
      tech: ["SpringBoot", "MySQL", "Java", "React"],
      demoVideo: "/videos/demo2.mp4",
      liveLink: "https://yourproject2.com",
    }
  ]

  //arrows for next and previous
  const nextArrow = ({onClick})=>{
    <div className = {`${styles.arrow} ${styles.next}`} onClick = {onClick}>
      <FaArrowRight ></FaArrowRight >
    </div>
  }
  
   const prevArrow = ({onClick})=>{
    <div className = {`${styles.arrow} ${styles.prev}`} onClick = {onClick}>
      <FaArrowLeft />
    </div>
  }

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };



  return (
   <>
   
   </>
  )
}

export default Projects
