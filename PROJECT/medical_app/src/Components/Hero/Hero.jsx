import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () =>
{
    return(
        <div className='hero'>
          <div className="hero-left">
            <h2>Buy Medicines and Essentials</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>India's Most</p>
                    <img src={hand_icon} alt=""/>
                </div>
                <p>Trusted</p>
                <p>Pharmacy </p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
          </div>
          <div className="hero-right">
            <img src={hero_image} alt="" height={500} width={500}/>
          </div>
        </div>
    )
}
export default Hero;