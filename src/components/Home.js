import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
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
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={0}
        totalSlides={3}
        className='carousel-provider'
      >
        <Slider>
          <Slide index={0}>I am the first Slide.<img src={photo1} /></Slide>
          <Slide index={1}>I am the second Slide. Why is this not working<img src={photo2} /></Slide>
          <Slide index={2}>I am the third Slide. <img src={photo3} /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default Home;
