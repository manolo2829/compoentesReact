import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.scss';

const Item = ({text, to, svg, open}) => {
  return (
    <NavLink className={open ? 'linkOpen' : 'normal'} to={to}>
      <div>{svg}</div>
      {open ? <p>{text}</p> : null }
    </NavLink>
  )
}

export default Item