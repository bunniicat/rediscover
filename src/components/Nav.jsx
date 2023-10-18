import { HiMenuAlt3 } from 'react-icons/hi';
import { GiFlowerPot } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import 'animate.css';

const links = [
  { linkName: 'Home', path: '/' },
  { linkName: 'About us', path: '/about' },
  { linkName: 'All events', path: '/events' },
  { linkName: 'Contact us', path: '/contact' },
];

const NavLink = ({ path, children, toggle }) => (
  <li>
    <Link to={path} className='navigation_link' onClick={toggle}>
      {children}
    </Link>
  </li>
);

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
      <div className='navBar'>
        <div className='navBar_logo'>
          <Link to='/'>
            <GiFlowerPot />
          </Link>
        </div>
        <label htmlFor='navi-toggle' className='navigation_button'>
          <span className='navigation_icon' onClick={toggleNav}>
            {navOpen ? <VscChromeClose /> : <HiMenuAlt3 />}
          </span>
        </label>
      </div>
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
              {links.map((link) => (
                <NavLink key={link.linkName} path={link.path} toggle={toggleNav}>
                  {link.linkName}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Nav;
