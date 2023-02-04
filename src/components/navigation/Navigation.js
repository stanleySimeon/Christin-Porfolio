import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/Christin-Bertin-Resume.pdf';

function Navigation() {
  const [active, setActive] = useState('home');

  const handleClick = (name) => {
    setActive(name);

    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('toggle-button');
    menu.classList.add('hidden');
    toggleButton.classList.remove('hidden');
  };

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setActive('home');
    } else if (window.scrollY > 0 && window.scrollY < 700) {
      setActive('home');
    } else if (window.scrollY >= 700 && window.scrollY < 1024) {
      setActive('about');
    } else if (window.scrollY >= 1024 && window.scrollY < 1800) {
      setActive('projects');
    } else if (window.scrollY >= 1800 && window.scrollY < 2400) {
      setActive('blogs');
    } else if (window.scrollY >= 2400 && window.scrollY < 3200) {
      setActive('services');
    } else {
      setActive('contact');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    const toggleButton = document.getElementById('toggle-button');
    menu.classList.toggle('hidden');
    toggleButton.classList.toggle('hidden');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#menu') && !e.target.closest('#toggle-button')) {
        menu.classList.add('hidden');
        toggleButton.classList.remove('hidden');
      }
    });
  };

  return (
    <nav id="navigation" className="w-full h-12 md:h-20 flex justify-between items-center fixed py-2 sm:py-8 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 bg-christin-secondary md:bg-christin-white z-50">
      <span className="flex cursor-pointer user-select-none">
        <Link to="home" spy smooth duration={150} offset={-70} onClick={() => handleClick('home')} className="">
          <span className="text-christin text-xl sm:text-2xl font-bold">
            CHRI
            <span className="text-christin-white md:text-christin-secondary">STIN</span>
          </span>
        </Link>
      </span>
      <FontAwesomeIcon icon={faBars} className="md:hidden text-2xl text-christin-white rounded-none" id="toggle-button" onClick={toggleMenu} />
      <ul className="navbar w-full sm:w-1/2 hidden md:flex absolute top-0 left-0 md:left-0 right-0 sm:left-1/2 sm:right-0 px-3 sm:px-8 md:px-0 h-screen md:h-auto md:relative md:w-auto text-christin-white md:text-christin bg-christin bg-opacity-95 md:bg-transparent" id="menu">
        <span className="flex flex-col justify-center items-center pb-6 mt-4 md:hidden sm:border-none border-b border-christin-white">
          <span className="w-full flex justify-end items-center">
            <FontAwesomeIcon icon={faTimes} className="md:hidden text-3xl text-christin-white rounded-none" id="toggle-button" onClick={toggleMenu} />
          </span>
          <span className="text-christin-white text-2xl font-bold sm:hidden mt-8 sm:mt-0">
            CHRI
            <span className="text-christin-secondary">STIN</span>
          </span>
        </span>
        <span className="w-full font-montserrat md:text-xs lg:text-sm xl:text-md flex flex-col md:flex-row justify-center md:justify-end items-center sm:items-start md:items-center sm:pl-8 space-y-8 md:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 whitespace-nowrap cursor-pointer py-12 md:py-0">
          <li>
            <Link
              to="about"
              spy
              smooth
              offset={-70}
              duration={200}
              onClick={() => handleClick('about')}
              className={active === 'about' ? 'active' : ''}
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              to="activities"
              spy
              smooth
              offset={-70}
              duration={150}
              onClick={() => handleClick('projects')}
              className={active === 'projects' ? 'active' : ''}
            >
              ACTIVITIES
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy
              smooth
              offset={-70}
              duration={150}
              onClick={() => handleClick('blogs')}
              className={active === 'blogs' ? 'active' : ''}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="accomplishments"
              spy
              smooth
              offset={-70}
              duration={150}
              onClick={() => handleClick('services')}
              className={active === 'services' ? 'active' : ''}
            >
              ACCOMPLISHMENTS
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy
              smooth
              offset={-70}
              duration={150}
              onClick={() => handleClick('contacts')}
              className={active === 'contacts' ? 'active' : ''}
            >
              CONTACTS
            </Link>
          </li>
          <li className="resume-btn py-2 px-4 text-christin-white rounded-sm">
            <a
              target="_blank"
              href={Resume}
              rel="noreferrer"
            >
              GET MY RESUME
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
}

export default Navigation;
