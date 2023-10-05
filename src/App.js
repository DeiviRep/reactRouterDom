// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Acura from "./components/Acura";
import Bwm from "./components/Bwm";
import Ford from "./components/Ford";
import Lamborgini from "./components/Lamborgini";
import Porche from "./components/Porche";
import Toyota from "./components/Toyota";
import Error404 from "./components/Error404";
import { Nav } from "./components/Nav";

import m1 from "./img/1.webp";
import m2 from "./img/2.jpg";
import m3 from "./img/3.jpg";
import m4 from "./img/4.jpg";
import m5 from "./img/5.jpg";
import m6 from "./img/6.jpg";

const reyes = [
  {
    nombre: "Bwm",
    color: "#155b7f",
    precio: 178,
    imagen: m1,
  },
  {
    nombre: "Lamborgini",
    color: "#b9b9b9",
    precio: 169,
    imagen: m2,
  },
  {
    nombre: "Ford",
    color: "#1f554f",
    precio: 81,
    imagen: m3,
  },
  {
    nombre: "Porche",
    color: "#d0beaa",
    precio: 126,
    imagen: m4,
  },
  {
    nombre: "Acura",
    color: "#31512c",
    precio: 141,
    imagen: m5,
  },
  {
    nombre: "Toyota",
    color: "#505445",
    precio: 69,
    imagen: m6,
  },
];

function App() {
  return (
    <>
      <BrowserRouter className="cajaNav">
        <Nav />
        <Routes>
          <Route path="/" element={<Home reyes={reyes} />} />
          <Route path="/acura" element={<Acura reyes={reyes} />} />
          <Route path="/bwm" element={<Bwm reyes={reyes} />} />
          <Route path="/ford" element={<Ford reyes={reyes} />} />
          <Route path="/lamborgini" element={<Lamborgini reyes={reyes} />} />
          <Route path="/porche" element={<Porche reyes={reyes} />} />
          <Route path="/toyota" element={<Toyota reyes={reyes} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
