import React from 'react';
import newsletter from '../assets/newsletter_graphic.png';


export default function Footer() {


    return(
        <div className='footer' >
            <div className='footer__first-grid' >
                <span className=''> Contact Us </span>
                <span className=''> Sizing Guide </span>
                <span className=''> Care Instructions </span>
                <span className=''> Order Status </span>
                <span className=''> Exchanges & Returns </span>
                <br/>
                <br/>
                <br/>
                <span className='footer__final-grid'>© 2018 Kindhood | Keep Kindness Moving</span>
            </div> 
            <div className='footer__second-grid' >
                <span className=''> Facebook </span>
                <span className=''> Pinterest </span>
                <span className=''> Instagram </span>
            </div> 
            <div className='footer__newsletter' >
                <img className='footer__newsletter__image' alt='newsletter' src={newsletter}/>
                <div className='footer__newletter__input-and-button-div' > 
                    <input className='footer__newsletter__input' />
                    <button type='text' className='footer__newsletter__button'>SUBSCRIBE</button>
                </div>
            </div> 
            <div>
            </div> 
        </div> 
    )
}