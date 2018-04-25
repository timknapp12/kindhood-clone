import React, {Component} from 'react';
import axios from 'axios';

export default class Product extends Component {
    // constructor(props){
    //     super(props);

        state = {
            product: [],
            images: [],
            selectedPhoto: ''
        }

    componentDidMount = () => {
        console.log(this.props.match.params.id)
        console.log(this.state.product)
        this.getProduct();
        // THIS METHOD BELOW WORKS TOO BUT I WANTED TO TRY AN ASYNC METHOD INSTEAD
    //   axios.get(`/api/products/${this.props.match.params.id}`).then((res) => {
    //       this.setState({product: res.data[0], selectedPhoto: res.data[0].product_image1})
    //   })
    }    
  async getProduct() {
      const result = await axios.get(`/api/products/${this.props.match.params.id}`)
      this.setState({product: result.data[0], selectedPhoto: result.data[0].product_image1})
  }

    render(){
        console.log(this.state.product)
        console.log(this.state.product.product_name)
        const {product_image1, product_image2, product_image3, product_image4, product_image5} = this.state.product
        const images = this.state.images.slice();
        images.push([product_image1, product_image2, product_image3, product_image4, product_image5])
        console.log(images[0])
        const list = images[0].map((image, i) => {
            return(
                <div key={i}>
                    <img src={image} className='images-container__small-photos--image'/>
                </div> 
            )
        })

        return(
            <div className='image-body'>
                <div className='images-container' > 
                    <img className='images-container__selected-photo' src={this.state.selectedPhoto} alt='image1'/>
                    <div className='images-container__small-photos' >
                        {list}
                    </div> 
                </div>
                <div className='image-text-container' > 
                    <div className='image-text-container__top-wrapper' >
                        <h2 className='image-text-container__title' >{this.state.product.product_name}</h2>
                        <h4 className='image-text-container__price' >{`$${this.state.product.product_price}.00`}</h4>
                        <div className='image-text-container__size' >Size</div>
                        <div className='image-text-container__sizes' >XS  S  M  L</div> 
                        <button type='' className='image-text-container__button'>ADD TO CART</button>
                    </div> 
                </div>
            </div> 
        )
    }
}