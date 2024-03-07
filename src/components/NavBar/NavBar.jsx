import React, { useState } from 'react';

import styles from './Navbar.module.css';
import hamburgermenu from '../../../assets/hamburgermenu.png';
import closemenu from '../../../assets/closemenu.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={menuOpen ? closemenu : hamburgermenu}
            alt='menu-button'
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Skills'>Skills</a>
            </li>
            <li>
              <a href='#Projects'>Projects</a>
            </li>
            <li>
              <a href='#Contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
