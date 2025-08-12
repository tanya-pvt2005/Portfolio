import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import tanya from "./assets/tanya.jpg"
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-center">
          <div className="left">
            <h1>I'm <span className="gradient-text">Tanya</span> Upadhyay</h1>
            {/* <p>I am a Computer Science student with a knack for building clean, functional, and user-friendly digital experiences.</p> */}
          </div>
          <div className="right">
            <div className="half-capsule">
              <img src = {tanya}></img>
            </div>
          </div>
        </div>


      </div>

      
      {/* <section id="home" className="section">Home Section</section>
      <section id="about" className="section">About Section</section>
      <section id="projects" className="section">Projects Section</section>
      <section id="resume" className="section">Resume Section</section>
      <section id="contact" className="section">Contact Section</section> */}
    </>
  );
}
