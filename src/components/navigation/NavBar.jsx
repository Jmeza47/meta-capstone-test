import React, { useRef, useState, useEffect } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Logo -svg.png';

function NavBar() {
  const [header, setHeader] = useState('transperent');

  const scrolEvent = () => {
    if (window.scrollY < 80) {
      return setHeader('transperent');
    } else if (window.scrollY > 80) {
      return setHeader('header');
    }
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrolEvent);
    return () => window.removeEventListener('scroll', scrolEvent);
  }, []);

  return (
    <header className={header}>
      <a href='' className='logo'>
        <img src={logo} alt='' />
      </a>
      <nav ref={navRef}>
        <a href='/#'>Home</a>
        <a href=''>About</a>
        <a href=''>Menu</a>
        <a href=''>Reservations</a>
        <a href=''>Order Online</a>
        <a href=''>Login</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
