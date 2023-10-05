import React from 'react'
import {NavLink} from 'react-router-dom'

const Bwm = ({reyes}) => {
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[0].imagen} alt="" />
        <p>{reyes[0].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Bwm