import React,{ useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[menu,setMenu] =useState("shop");
  return (
    <div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt=""height={100}  />
    <p>MEDSCART</p>
    </div>
    <ul className="nav-menu">
    <li onClick={()=>{setMenu("Medicine")}}><Link style={{ textDecoration: 'none' }} to='/'>Medicine</Link>{menu==="Medicine"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Consult Doctor")}}><Link style={{ textDecoration: 'none' }} to='/Consult Doctor'>Consult Doctor</Link>{menu==="Consult Doctor"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Lab Tests")}}><Link style={{ textDecoration: 'none' }} to='/Lab Tests'>Lab Tests</Link>{menu==="Lab Tests"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Wellness")}}><Link style={{ textDecoration: 'none' }} to='/Wellness'>Wellness</Link>{menu==="Wellness"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <div className="nav-cart-count">1</div>
    </div>
    </div>
  )
}

export default Navbar
