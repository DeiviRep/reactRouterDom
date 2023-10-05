import React from 'react'
import {NavLink} from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Acura = ({reyes}) => {
    // const dato = useParams()
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[4].imagen} alt="" />
        <p>{reyes[4].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Acura