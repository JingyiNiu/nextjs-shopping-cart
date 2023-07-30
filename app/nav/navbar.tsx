import React from 'react'
import NavCart from '../cart/nav-cart'

const NavBar = () => {


  return (
    <nav className="my-4 bg-gray-100">
      <div className="inside-container px-4 mx-auto flex justify-end">
        <NavCart/>
      </div>
    </nav>
  )
}

export default NavBar