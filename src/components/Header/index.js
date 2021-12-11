import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <span> logo </span>
      <nav>
        <li><NavLink to="/" exact> inicio </NavLink></li>
        <li><NavLink to="auth/login" exact> ingresar </NavLink></li>
        <li><NavLink to="auth/register" exact> registrar </NavLink></li>
      </nav>
    </header>
  )
}

export default Header;
