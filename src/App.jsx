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

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achieve />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/techstack" element={<TechStack />} />
        </Routes>
      
    </>
  )
}

export default App
