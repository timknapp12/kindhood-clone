import React from 'react';
import logo from '../assets/main_logo.png';
import searchIcon from '../assets/search_icon.png';
import cartIcon from '../assets/cart_icon2.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return(
        <div className='nav'>
            <img className='main_logo' src={logo} alt='main_logo'/>
            <div className='nav_container'> 
            <p className='disclaimer'>this is not a real website, just a clone for practice</p>
                <ul className='nav_itmes'>
                 <Link to='/'><li>SHOP</li></Link>
                 <Link to='lookbook'><li>LOOK BOOK</li></Link>
                 <Link to='/about'><li>ABOUT US</li></Link>
                 <Link to='contact'><li>CONTACT</li></Link>
                 <Link to='faq'><li>FAQ</li></Link>
                <img src={searchIcon} className='search_icon' alt='search icon' />
                <img src={cartIcon} className='cart_icon' alt='cart icon' />
                </ul>
            </div>
        </div> 
    )
}