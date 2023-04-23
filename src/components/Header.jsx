import './header.scss';
import logo from '../assets/Nlogo.png';
import logoLg from '../assets/logo.png';

const Header = () => (
  <header>
    <nav>
      <a href="/">
        <img className="mobile-logo" src={logo} alt="logo" />
        <img className="desktop-logo" src={logoLg} alt="netflix" />
      </a>
      <ul>
        <li>
          <a className="active" href="/">ADD MOVIE</a>
        </li>
        <li>
          <a href="/">SIGN IN</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
