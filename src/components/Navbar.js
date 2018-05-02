import React from 'react';
import logo from '../assets/main_logo.png';
import searchIcon from '../assets/search_icon2.png';
import cartIcon from '../assets/cart_icon3.png';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow_icon.svg';

export default function Navbar() {

    return(
        <div className='nav'>
            <Link to='home'><img className='main-logo' src={logo} alt='main-logo'/></Link>
            <div className='nav-container'> 
            <p className='disclaimer'>this is not a real website, just a clone for practice</p>
                <ul className='nav-itmes'>
                 <Link to='/'><li>SHOP</li></Link>
                 <Link to='/lookbook'><li>LOOK BOOK</li></Link>
                 <div  className='nav-itmes__about-li-container'> <li className='nav-itmes__about-li-container_text' >ABOUT US <img alt='arrow-icon' className='nav-items__arrow' src={arrow} />
                        <ul className='nav-items__about-dropdown' >
                        <Link to='/about'><li className=''>About Us</li></Link>
                            <Link to='/retail' ><li className=''>Retail Locations</li></Link>
                            <Link to='/press' ><li className=''>Press</li></Link>
                        </ul>
                    </li>
                </div>
                 <Link to='/contact'><li>CONTACT</li></Link>
                 <Link to='/faq'><li>FAQ</li></Link>
                <img src={searchIcon} className='search_icon' alt='search icon' />
                <img src={cartIcon} className='cart_icon' alt='cart icon' />
                </ul>
            </div>
        </div> 
    )
}