import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../assets/girl-in-hoodie.jpeg';
import photo2 from '../assets/mom-pool.jpeg';
import photo3 from '../assets/kids-beach.jpeg';
import photo4 from '../assets/side-pool.jpeg';


const Home = () => {
    return(
        <div 
        // className='carousel-photo' 
        >
            {/* <img alt='girl in hoodie' src={photo1} /> */}
                <Carousel>
                <div>
                    <img src={photo1} />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </div>
                <div>
                    <img src={photo2} />
                </div>
                <div>
                    <img src={photo3} />
                </div>
                <div>
                    <img src={photo4} />
                </div>
                </Carousel>;
        </div> 
    )
}

export default Home;