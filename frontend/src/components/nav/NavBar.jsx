import { useState } from 'react';
import styles from './Navbar.module.css';
import { NavLink, useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const contNav = () => {
        navigate('/contact');
        setIsMenuOpen(false); // Close menu when navigating
    }

    const homeNav = () => {
        navigate('/');
        setIsMenuOpen(false); // Close menu when navigating
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={styles.navbar}>
            {/* Hamburger menu button - only shows on mobile */}
            <button className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            {/* Navigation links - visibility controlled by CSS */}

            <p onClick={homeNav} className={styles.name}>PDOTCODE</p>

            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/project'} onClick={() => setIsMenuOpen(false)}>
                    <li>Project</li>
                </NavLink>
                <NavLink to={'/service'} onClick={() => setIsMenuOpen(false)}>
                    <li>Service</li>
                </NavLink>
                <NavLink to={'/about'} onClick={() => setIsMenuOpen(false)}>
                    <li>About</li>
                </NavLink>
            </ul>

            <button
                onClick={contNav}
                className={styles.contactButton}>
                Contact
            </button>
        </nav>
    );
}

export default Navbar;