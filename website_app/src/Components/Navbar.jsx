import  { useState } from 'react'
import {close, logo,menu} from '../assets'
import {navLink} from '../constants'



const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="David" />


    </nav>
  )
}

export default Navbar