import React from 'react'
import {NavLink} from 'react-router-dom'

const Lamborgini = ({reyes}) => {
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[1].imagen} alt="" />
        <p>{reyes[1].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Lamborgini