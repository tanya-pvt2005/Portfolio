import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'
import MouseParticles from 'react-mouse-particles'

import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from "./pages/About/About";
import Achieve from "./pages/Achieve/Achieve";
import Contact from "./pages/Contact/Contact";
import Highlights from "./pages/Highlights/Highlights";
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
function App() {
  const cobwebConfig = {
    num: 0.00001, // number of particles
    rps: 0.02, // rotation speed
    radius: [2, 3], // size of particles
    life: [2, 5],
    v: [0.3, 0.8], // speed
    tha: [-50, 50],
    alpha: [0.5, 0.1],
    color: ["#ffffff63", "#7b5fff", "#5fffb2", "#ffe75f"], // bright party colors
    cross: "dead",
    random: 15,
    g: 0,
    position: "all",
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI);
      // pick a random color from array
      const color = Array.isArray(particle.color)
        ? particle.color[Math.floor(Math.random() * particle.color.length)]
        : particle.color;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    },
  };

  return (
    <>
      <div className="appWrapper">
        <ParticlesBg config={cobwebConfig} type="custom" bg={true} />
         <MouseParticles g={10} v = {0.7} radius ={10} alpha = {0.4} color="random" cull="col,image-wrapper"/>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achieve />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      </div>


    </>
  )
}

export default App
