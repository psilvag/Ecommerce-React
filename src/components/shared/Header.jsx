//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//==========IMORT CSS STYLES===========
import '../../styles/header/header.css'


const Header = () => {
  return (
    <div className='navbar-container'>
      <h1 className='navbar-title'><Link className='title' to='/'>e-commerce</Link></h1>
      <nav className='nav-list'>
        <ul className='list'>
          <li>
            <NavLink to='/login'>
              <i class="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/purchases'>
              <i class="fa-solid fa-store"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart'>
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink >
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header