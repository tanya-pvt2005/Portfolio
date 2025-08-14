import { Link } from "react-router-dom";
import {useState} from "react"
import styles from "./Navbar.module.css";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav className={styles.navbar}>
                {/* Logo section */}
                <div className={styles.logo}>
                    <Link to="/">Tanya Upadhyay</Link>
                </div>

                
                {/* Navigation links */}
                {/*First join 2 class names (first class always applied for styling, if menuIsOpen then add styles.active class else no extra class "" i.e. empty) we use ternary operator here */}
                <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/achievements">Achievements</Link>
                        </li>
                        <li>
                            <Link to="/highlights">Highlights</Link>
                        </li>
                        <li>
                            <Link to="/techstack">Tech Stack</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Hmaburger button - mobile friendly interface */}
                <div className = {`${styles.hamburger} ${menuOpen ? styles.open:""}`} onClick={()=>setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
