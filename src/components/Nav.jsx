import { HiMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { useEffect, useState } from 'react';
import 'animate.css';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navAnimationOpen = 'fullscreen_nav animate__animated  animate__fadeInTopRight';

  const toggleNav = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  return (
    <div className='navigation'>
      <label htmlFor='navi-toggle' className='navigation_button'>
        <span className='navigation_icon' onClick={toggleNav}>
          {navOpen ? <VscChromeClose /> : <HiMenuAlt3 />}
        </span>
      </label>

      {navOpen && (
        <div className={navAnimationOpen}>
          <div className='fullscreen_nav_items'>
            <ul>
              <li>
                <a href='#' className='navigation_link'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='navigation_link'>
                  About us
                </a>
              </li>
              <li>
                <a href='#' className='navigation_link'>
                  Our tours
                </a>
              </li>
              <li>
                <a href='#' className='navigation_link'>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
