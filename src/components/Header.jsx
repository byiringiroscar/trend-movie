import './header.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Nlogo.png';
import logoLg from '../assets/logo.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('addmovie');
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="mobile-logo" src={logo} alt="logo" />
          <img className="desktop-logo" src={logoLg} alt="netflix" />
        </Link>
        <ul>
          <li>
            <Link to="/addmovie" onClick={() => handleClick('addmovie')} className={`${activeLink === 'addmovie' ? 'active' : ''}`}>ADD MOVIE</Link>
          </li>
          <li>
            <Link to="/signin" onClick={() => handleClick('sigin')} className={`${activeLink === 'sigin' ? 'active' : ''}`}>SIGN IN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
