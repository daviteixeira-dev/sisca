import React from "react";
import App from "../../App";
import "./Navbar.css";

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
          <a href={App}>Engrenagem</a>
        </li>
        <li>
          <a href={App}>Davi Teixeira</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
