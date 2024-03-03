import  { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="brand">CertMaster</div>
        <div className={'menu-icon' + (menuActive ? ' active' : '')} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={'nav-menu' + (menuActive ? ' active' : '')}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li className="login-btn">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
