import React from 'react';
import logo from '../assets/main_logo.png';
import searchIcon from '../assets/search_icon.png';
import cartIcon from '../assets/cart_icon2.png';

export default function Navbar() {

    return(
        <div className='nav'>
            <img className='main_logo' src={logo} alt='main_logo'/>
            <div className='nav_container' > 
                <ul className='nav_itmes'>
                 <li>SHOP</li>
                 <li>LOOK BOOK</li>
                 <li>ABOUT US</li>
                 <li>CONTACT</li>
                 <li>FAQ</li>
                <img src={searchIcon} className='search_icon' alt='search icon' />
                <img src={cartIcon} className='cart_icon' alt='cart icon' />
                </ul>
            </div>
        </div> 
    )
}