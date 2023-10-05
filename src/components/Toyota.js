import React from 'react'
import {NavLink} from 'react-router-dom'

const Toyota = ({reyes}) => {
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[5].imagen} alt="" />
        <p>{reyes[5].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Toyota