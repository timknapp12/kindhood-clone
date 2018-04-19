import React from "react";
// import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
// import Carousel from '@brainhubeu/react-carousel';
import BackgroundSlideshow from 'react-background-slideshow'
import Coverflow from 'react-coverflow';
import photo1 from "../assets/girl-in-hoodie.jpeg";
import photo2 from "../assets/mom-pool.jpeg";
import photo3 from "../assets/kids-beach.jpeg";
import photo4 from "../assets/side-pool.jpeg";

const Home = () => {
  return (
    <div className='home-body'
    // className='carousel-photo'
    >
      {/* <img alt='girl in hoodie' src={photo1} /> */}
      {/* <Carousel>
        <div>
          <img src={photo1} /> */}
          {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        {/* </div>
        <div>
          <img src={photo2} />
        </div>
        <div>
          <img src={photo3} />
        </div>
        <div>
          <img src={photo4} />
        </div>
      </Carousel>; */}


      {/* <CarouselProvider
        naturalSlideWidth={700}
        naturalSlideHeight={0}
        totalSlides={3}
        className=''
      >
        <Slider className="carousel-provider" >
          <Slide index={0}><img hasMasterSpinner={true} src={photo1} /></Slide>
          <Slide index={1}><img hasMasterSpinner={true} src={photo2} /></Slide>
          <Slide index={2}><img hasMasterSpinner={true} src={photo3} /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}

      {/* <Carousel className='react-carousel' >
        <div className='react-carousel__inner' >
            <img src={photo1} />
            <img src={photo2} />
            <img src={photo3} />
        </div> 
    </Carousel> */}
    
        {/* this one works great for automatic transitions between backgound photos */}
    {/* <div className='background-slideshow'>
        <BackgroundSlideshow images={[ photo1, photo2, photo3, photo4 ]} />
    </div>*/}
    </div>
  );
};

export default Home;
