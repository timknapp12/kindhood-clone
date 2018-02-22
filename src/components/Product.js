import React, {Component} from 'react';
import {displayProduct} from './services';
import axios from 'axios';

export default class Product extends Component {
    // constructor(props){
    //     super(props);

        state = {
            product: {name: 'hi'}
        }
    // }
    // displayProductOne(id) {
    //     return axios.get('/api/products/:id').then(res => res.data)
    // }

    componentDidMount = () => {
        console.log(this.props.match.params.id)
        console.log(this.state.product)
        displayProduct(this.props.match.params.id)
      .then(product => this.setState({product}));
      axios.get(`/api/products/${this.props.match.params.id}`).then((res) => {
          this.setState({res})
      })
    }    
  

    render(){

        return(
            <div>
                <div> 
                    <img src={this.state.product.image1} alt='image1'/>
                    <div>
                        <img src={this.state.product.image2} alt='image2'/>
                        <img src={this.state.product.image3} alt='image3'/>
                        <img src={this.state.product.image4} alt='image4'/>
                        <img src={this.state.product.image5} alt='image5'/>
                    </div> 
                </div>
                <div>
                    <h2>{this.state.product.product_name}</h2>
                    <h4>{this.state.product.product_price}</h4>
                </div> 
            </div> 
        )
    }
}