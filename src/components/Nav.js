import React from "react";
import "../css/nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="header">
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/acura"
      >
        Acura
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/Bwm"
      >
        Bwm
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/Ford"
      >
        Ford
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/Lamborgini"
      >
        Lamborgini
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/Porche"
      >
        Porche
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        id="nav"
        to="/Toyota"
      >
        Toyota
      </NavLink>
    </nav>
  );
};
