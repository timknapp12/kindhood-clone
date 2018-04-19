import React, { Component } from "react";
import BackgroundSlideshow from "react-background-slideshow";
import Carousel from 'nuka-carousel';
import photo1 from "../assets/girl-in-hoodie.jpeg";
import photo2 from "../assets/mom-pool.jpeg";
import photo3 from "../assets/kids-beach.jpeg";
import photo4 from "../assets/side-pool.jpeg";

export default class Home extends Component {

    state = {
        photos: [photo1, photo2, photo3, photo4]
    }

        

  render() {
    const photos = this.state.photos.map((photo, i) => {
        return(
            <div key={i} >
                <img src={photo} />
            </div> 
        )
    })

    return (
      <div className="home-body">
        <Carousel 
        autoplay={true}
        wrapAround = {true}
        autoplayInterval={4000}
        className="slick">
            {photos}
        </Carousel>

        {/* this one works great for automatic transitions between backgound photos from 'react-background-slideshow' */}
        {/* <div className='background-slideshow'>
            <BackgroundSlideshow images={[ photo1, photo2, photo3, photo4 ]} />
        </div>*/}
      </div>
    );
  }
}
