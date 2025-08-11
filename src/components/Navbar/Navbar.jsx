import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        {/* Logo */}
        <div className={styles['navbar-logo']}>
          <a href="#home">TANYA</a>
        </div>

        {/* Hamburger icon (visible only on mobile) */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <div className={`${styles['navbar-links']} ${menuOpen ? styles.show : ''}`}>
          <a href="#home" className={styles['nav-link']} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className={styles['nav-link']} onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className={styles['nav-link']} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#resume" className={styles['nav-link']} onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" className={styles['nav-link']} onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
