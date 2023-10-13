import { HiMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navClasses, setNavClasses] = useState('.hide');

  const toggleNav = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  function hideNav() {
    setNavClasses('hide');
    document.body.style.overflow = 'visible';
  }

  function showNav(node) {
    setNavClasses('block');
    document.body.style.overflow = 'hidden';
    node.style.opacity = 0;
  }

  function removeOpacity(node) {
    node.style.opacity = 1;
  }

  return (
    <div className='navigation'>
      <label htmlFor='navi-toggle' className='navigation_button'>
        <span className='navigation_icon' onClick={toggleNav}>
          {navOpen ? <VscChromeClose /> : <HiMenuAlt3 />}
        </span>
      </label>

      <CSSTransition
        in={navOpen}
        timeout={700}
        classNames={{ enterActive: 'animate__fadeInTopRight', exitActive: 'animate__fadeOutTopRight' }}
        unmountOnExit
        onEnter={showNav}
        onEntered={removeOpacity}
        onExited={hideNav}
        className={`animate__animated fullscreen_nav ${navClasses}`}
      >
        <div>
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
      </CSSTransition>
    </div>
  );
};

export default Nav;
