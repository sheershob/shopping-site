import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Smile Cart</p>

      </div>
      <ul className='footer-links'>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Company</li>
        <li>Products</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <AiFillInstagram />
        </div>
        <div className="footer-icons-container">
            <AiFillFacebook />
        </div>
        <div className="footer-icons-container">
            <AiFillTwitterCircle />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
