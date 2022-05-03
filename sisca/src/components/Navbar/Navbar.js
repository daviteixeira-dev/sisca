import React from "react";
import App from "../../App";
import "./Navbar.css";
import { FaRegSun, FaAngleDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="menu">
      <a className="branding" href={App}>
        SISCA <span>Beta</span>
      </a>
      <ul>
        <li>
          <a href={App}>Gerenciar</a>
        </li>
        <li>
          <a href={App}>Histórico</a>
        </li>
        <li>
          <a href={App}><FaRegSun /></a>
        </li>
        <li>
          <a href={App} className="user">Davi Teixeira <FaAngleDown /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
