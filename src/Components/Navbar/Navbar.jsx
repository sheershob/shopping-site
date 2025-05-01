import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'

const Navbar = () => {

  const [menu, setMenu] = useState("Home")

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='site logo'/>
          <p>Smile Cart</p>
      </div>
      <div className='nav-items'>
        <ul className='nav-menu'>
          <li onClick={() => setMenu("Home")}> <Link style={{textDecoration:'None'}} to = '/'>Home</Link> {menu === "Home" ? <hr/> : <></>}</li>
          <li onClick={() => setMenu("men")}> <Link style={{textDecoration:'None'}} to = '/men'>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
          <li onClick={() => setMenu("women")}> <Link style={{textDecoration:'None'}} to = '/women'>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
          <li onClick={() => setMenu("kids")}> <Link style={{textDecoration:'None'}} to = 'kids'>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className='cart'>
          <Link to = '/cart'>
            <img src={cartIcon} alt="cartIcon" />
          </Link>
            <div className="cart-count">
              0
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
