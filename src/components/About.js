import React from "react";
import about from "../assets/About_Us.jpg";

export default function About(props) {
  return (
    <div className="main-body">
      <div className="main-container">
        <div className="main-container__column">
          <img alt="aboutphoto" src={about} className="main-image" />
          <div className='about-paragraphs' >
            <p>
              We are water people—beaches, lakes, rivers, or pools—our best
              memories always involve playing in the water. Our only problem
              came when it was time to get out: our kids would want to get dry
              and warm as quickly as possible to get back to playing. We would
              wrap them up tightly in towels only to watch them sit there
              stuck—unable to play, eat, or move. This is not how kids were
              designed, and this is where Kindhood was born.
            </p>
            <p>
              Our Kindhood poncho towels were designed to keep them moving. Made
              from a unique cotton/bamboo blend, our ponchos are engineered to
              be ultra-soft and comfortable, yet flexible and quick-drying.
              Whether your kids are building sand castles, collecting shells,
              running around, or just sitting and eating—our ponchos will keep
              them warm and protected.
            </p>
            <p>
              Our patterns were designed locally on the sunny beaches of
              Southern California where water is a part of everyday life. From
              beach to pool to bath, we know you’ll find so many conveniences as
              you use our ponchos. They were designed especially for you—the
              water-lovers, the carefree kids.
            </p>
            <div className='about-subheading' >
                <h3>
                    YOU KEEP MAKING MEMORIES, 
                </h3>
                <h3>
                    AND WE’LL KEEP YOU MOVING.
                </h3>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
