import React from 'react'
import brand from '../assets/© 2022 Coral , Inc..png';
import './component-styles/Footer.css';
import cards from '../assets/icons_payment 1.png';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import fb from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import link from '../assets/linkedin.png';
function Footer() {
  return (
    <div>
        <div className='main-footer'>
            <ul>
                <li> <img src={logo}></img></li>
                <br></br>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </li>
                <br></br>
                <li> <div className='socials'> 
                <img src={fb}></img> 
                <img src={twitter}></img>
                <img src={link}></img>
                <img src={insta}></img>
                </div></li>
            </ul>
            <ul>
                <li className='list-heading'> CATALOG</li>
                <br></br>
                <li>Necklaces</li>
                <li>Hoodies</li>
                <li>Jewelry Box</li>
                <li>T-Shirt</li>
                <li>Jacket</li>
            </ul>

            <ul>
                <li className='list-heading'>ABOUT US</li>
                <br></br>
                <li>Our Producers</li>
                <li>Sitemap</li>
                <li>FAQ</li>
                <li>About us</li>
                <li>Terms & Condistions</li>
            </ul>

            <ul>
                <li className='list-heading'>CUSTOMER SERVICES</li>
                <br></br>
                <li>Contact us</li>
                <li>Track your order</li>
                <li>Product Care & Repair</li>
                <li>Book an appointment</li>
                <li>Shipping & Returns</li>

            </ul>

            <div className='bottom-footer'>
                <img  className='bottom-footer-img brand' src={brand}></img>
                <img className = 'bottom-footer-img' src={cards}></img>
                 <p>Scroll To Top ⬆</p> 
            </div>
        </div>
    </div>
  )
}

export default Footer