import React from 'react'
import {NavLink} from 'react-router-dom'

const Porche = ({reyes}) => {
  return (
    <div className='auto'>
        <img className='imagen'  src={reyes[3].imagen} alt="" />
        <p>{reyes[3].nombre}</p>
        <NavLink to="/">Regresar</NavLink>
    </div>
  )
}

export default Porche