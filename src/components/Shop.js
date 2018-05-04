import React, { Component } from "react";
import mainImage from "../assets/main_img.jpg";
// import axios from "axios";
import { displayProducts } from "./services";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  //using the new class properties proposal you no longer need a constructor function to initailize state- as I've done below:
  state = {
    user: "Bob",
    products: []
  };

  // displayProducts() {
  //   axios.get("/api/products").then(res => res.data);
  // }

  componentWillMount() {
    console.log(this.state.user);
    displayProducts().then(res => {
      this.setState({ products: res });
    });
    console.log(this.state.products);
  }

  render() {
    const products = this.state.products;
    const hyphen = `\u2014`;
    return (
      <div className="main-body">
        <div className="main-container">
          <div className="main-container__column">
            <img className="main-image" alt="main" src={mainImage} />
            <p className="shop-heading">KIDS' HOODED PONCHO TOWELS</p>
            <p className="main-paragrpah">
              Kindhood kids’ cover ups take the boredom and complaints out of
              changing. Our posh hooded poncho towels for kids allow your little
              ones to play and move in comfort while transitioning from swimming
              or bath time to dry clothes. These kids’ cover ups are convenient
              to bring to the beach, the lake, and the pool. Each poncho
              features a perfectly sized pocket that’s just right for collecting
              sea shells or holding snacks. We also offer helpful hooded towels
              for infants. Our hooded poncho towels for kids are made from a
              blend of super-soft and quick-drying bamboo cotton fabric. Choose
              from an array of contemporary patterns.
            </p>
          </div>
          <div className="products-section">
            {/* <Product
                displayProducts={displayProducts}/> */}
            {products.map(item => {
              return (
                <div
                  className="products-section__container"
                  key={item.product_id}
                >
                  <img
                    className="products-section__images"
                    src={item.product_image1}
                    alt="product"
                  />
                  <Link to={`/product/${item.product_id}`}>
                    <div className="product-section__name-and-price">
                      {item.product_name} {hyphen}
                      ${item.product_price}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
