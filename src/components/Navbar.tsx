import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="navbody">
      <div className="navcontainer">
        <Link to="/">
           <img src={logo} alt="Logo" /> 
        </Link>
        <div>
          <div className="linkwrapper">
            <Link to="/">Inicio</Link>
            <Link to="/Menus">Menus</Link>
            <Link to="/Reservas">Reservar</Link>
            <Link to="/Empregados">Empregados</Link>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Nav;