import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
const Home = ({ reyes }) => {
  const imagenes = reyes.map((e) => (
    <div key={e.nombre} className="autos" style={{background:e.color}}>
      <NavLink to={e.nombre}>
        <img className="imagen" src={e.imagen} alt="" />
      </NavLink>
    </div>
  ));
  return (
    <>
      <h1>Home</h1>
      <div className="cajaContent">{imagenes}</div>
    </>
  );
};

export default Home;
