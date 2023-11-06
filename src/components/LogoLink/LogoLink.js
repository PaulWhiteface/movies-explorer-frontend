import { NavLink } from 'react-router-dom';
import './LogoLink.css';
import logo from '../../images/logo.svg';

function LogoLink () {
  return (
    <NavLink to="/" className="header__logo">
      <img src={logo} alt="логотип" />
    </NavLink>
  );
} 

export default LogoLink;