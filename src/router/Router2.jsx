import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Contenido1 from '../components/Contenido1'
import Contenido2 from '../components/Contenido2'
import Contenido3 from '../components/Contenido3'
import NavBar from '../navbar/NavBar'

const Router2 = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='contenido1' element={<Contenido1/>}/>
        <Route path='contenido2' element={<Contenido2/>}/>
        <Route path='contenido3' element={<Contenido3/>}/>
        <Route path='/' element={<Navigate to='contenido1'/>}/>
    </Routes>
    </>
  )
}

export default Router2