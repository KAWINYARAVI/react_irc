import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart from '../Assests/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () =>{
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt="" height={100}/>
            <p>MEDSCART</p>
         </div>
         <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>MEDICINE</Link>{menu==="MEDICINE"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>HEALTH CARE</Link>{menu==="CONSULT DOCTOR"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>LAB TEST</Link>{menu==="LAB TEST"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>WELLNESS</Link>{menu==="WELLNESS"?<hr/>:<></>}</li>
         </ul>
         <div className="nav-login-cart">
            <Link to='/Login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
        </div>
    )
}
export default Navbar;