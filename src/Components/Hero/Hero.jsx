import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>
            New Arriavals
        </h2>
        <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
            <p>Collections</p>
            <p>for everyone</p>
            <div className="latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
      </div>

      <div className="hero-right">
            <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
