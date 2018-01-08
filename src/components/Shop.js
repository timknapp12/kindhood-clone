import React, { Component } from 'react';
import mainImage from '../assets/main_img.jpg'

export default class Shop extends Component {



    render() {
        return(
            <div className='shop_container' >
                <img className='main_image' alt='main_image' src={mainImage}/>
            </div> 
        )
    }
}