import React from 'react'
import {NavLink} from 'react-router-dom'

const Ford = ({reyes}) => {
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[2].imagen} alt="" />
        <p>{reyes[2].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Ford