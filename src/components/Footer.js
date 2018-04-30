import React, { Component } from 'react';
import newsletter from '../assets/newsletter_graphic.png';
import facebook from '../assets/facebook_icon.png';
import pinterest from '../assets/pinterest_icon.png';
import insta from '../assets/instagram_icon.png';
import popsugar from '../assets/popsugar2_compact.png';
import mini from '../assets/ministylemag_compact.png';
import vogue from '../assets/britishvouge2_compact.png';
import smallfry from '../assets/SMALL-FRY-LOGO-04_compact.png';
import nursery from '../assets/DestinationNurserylogo_compact.png';
import babiekins from '../assets/babiekins2_compact.png';
import tatler from '../assets/tatler2_compact.png';
import axios from 'axios';

export default class Footer extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    render() {

        return(
            <div className='footer' >
                <div className='footer__as-seen-in-container' >
                    <div className='footer__as-seen-in-container--heading' >AS SEEN IN</div> 
                    <div className='footer__as-seen-in-container--images' >
                        <img  className='popsugar' alt='popsugar' id='pop' src={popsugar} />
                        <img  className='popsugar' alt='mini' src={mini} />
                        <img  className='popsugar' alt='vogue' id='pop' src={vogue} />
                        <img  className='popsugar' alt='smallfry' id='pop' src={smallfry} />
                        <img  className='popsugar' alt='nursery' id='pop' src={nursery} />
                        <img  className='popsugar' alt='babiekins' src={babiekins} />
                        <img  className='popsugar' alt='tatler' src={tatler} />
                    </div> 
                </div> 
                <div className='footer__grid' >
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
                        <div className='footer__second-grid-social-and-text' >
                            <img src={facebook} className='social-icon' alt='facebook-icon'/>
                            <span className=''> Facebook </span>
                        </div>
                        <div className='footer__second-grid-social-and-text' id='pinterest'>
                            <img src={pinterest} className='social-icon' alt='pinterest-icon'/>
                            <span className=''> Pinterest </span>
                        </div>
                        <div className='footer__second-grid-social-and-text'id='insta' >
                            <img src={insta} className='social-icon'  alt='insta-icon'/>
                            <span className=''> Instagram </span>
                        </div>
                    </div> 
                    <div className='footer__newsletter' >
                        <img className='footer__newsletter__image' alt='newsletter' src={newsletter}/>
                        <div className='footer__newletter__input-and-button-div' > 
                            <form id='contact-form' onSubmit={() => this.handleSubmit()} method='POST' > 
                                <input  type='email' name='email' action='send' className='footer__newsletter__input' />
                                <button type='submit' className='footer__newsletter__button'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div> 
                    <div>
                    </div> 
                </div> 
            </div> 
        )
    }

}