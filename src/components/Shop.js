import React, { Component } from "react";
import mainImage from "../assets/main_img.jpg";

export default class Shop extends Component {
  render() {
    return (
      <div className='shop_body' >
        <div className="shop_container">
          <img className="main_image" alt="main_image" src={mainImage} />
          <p className="shop_heading">KIDS' HOODED PONCHO TOWELS</p>
          <p className="main_paragrpah">
            Kindhood kids’ cover ups take the boredom and complaints out of
            changing. Our posh hooded poncho towels for kids allow your little
            ones to play and move in comfort while transitioning from swimming
            or bath time to dry clothes. These kids’ cover ups are convenient to
            bring to the beach, the lake, and the pool. Each poncho features a
            perfectly sized pocket that’s just right for collecting sea shells
            or holding snacks. We also offer helpful hooded towels for infants.
            Our hooded poncho towels for kids are made from a blend of
            super-soft and quick-drying bamboo cotton fabric. Choose from an
            array of contemporary patterns.
          </p>
        </div>
      </div>
    );
  }
}
