import React from 'react';
import logo from '../assets/logo.png';
import './component-styles/Header.css';
import search from '../assets/search.png';
import account from '../assets/account.png';
import cart from '../assets/shopping.png';
function Header() {
  return (
    <div className='header'>
        <div className='main-header'>
            <img src={search}></img>
            <img className = 'logo'src={logo}></img>
            <div className='main-header-right'>
              
                <img src={account}></img>
              <p>Account</p>
             
              <img src={cart}></img>
              <p>Shopping</p>
            </div>

          
        </div>
        <hr></hr>
        <div className='bottom-header'>
                <p>Jewelry & Accessories</p>
                <p>Clothing & Shoes</p>
                <p>Home & Living</p>
                <p>Wedding & Party</p>
                <p>Toys & Entertainment</p>
                <p>Art & Collectibles</p>
                <p>Craft Supplies & Tools</p>
            </div>
    </div>
  )
}

export default Header