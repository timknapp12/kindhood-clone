import React, {Component} from 'react';
import axios from 'axios';

export default class Product extends Component {
    // constructor(props){
    //     super(props);

        state = {
            product: []
        }

    componentDidMount = () => {
        console.log(this.props.match.params.id)
        console.log(this.state.product)
      axios.get(`/api/products/${this.props.match.params.id}`).then((res) => {
          this.setState({product: res.data[0]})
      })
    }    
  

    render(){
        console.log(this.state.product)
        return(
            <div>
                <div> 
                    <img src={this.state.product.product_image1} alt='image1'/>
                    <div>
                        <img src={this.state.product.product_image2} alt='image2'/>
                        <img src={this.state.product.product_image3} alt='image3'/>
                        <img src={this.state.product.product_image4} alt='image4'/>
                        <img src={this.state.product.product_image5} alt='image5'/>
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