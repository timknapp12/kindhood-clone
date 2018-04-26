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

    changePhoto(image) {
        this.setState({selectedPhoto: image})
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
                    <img src={image} className='images-container__small-photos--image'
                    onClick={() => this.changePhoto(image)}/>
                </div> 
            )
        })
        console.log(images[0][2])

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
                        <p className='image-text-container__paragraph' >
                            Each Kindhood poncho is made from 70% sustainable bamboo fiber and 30% cotton blend. Ponchos feature an ultra-soft, absorbent, and quick-drying terrycloth interior; a hood for warmth and protection; and a pouch pocket for your littles to keep their hands warm, snacks safe, and seashell collections secure.
                        </p>
                        <p className='image-text-container__paragraph' >
                            Machine wash separately in cold water. Tumble dry on medium heat. Do not bleach.
                        </p>
                        <div className={images[0][2] !== null ? 'size-chart-div' : 'size-chart-div-hidden'} > 
                            <ul type="square" className="faq-section__sizes" id='image-text-container__size-chart'>
                                <li className="">
                                    <strong id="bold_type">Large</strong> - 26” x 26” ages 7-8
                                </li>
                                <li className="">
                                    <strong id="bold_type">Medium</strong> - 24” x 24” ages 4-6
                                </li>
                                <li className="">
                                    <strong id="bold_type">Small</strong> - 20” x 20” ages 2-3
                                </li>
                                <li className="">
                                    <strong id="bold_type">Extra-Small</strong> - 20” x 18” ages
                                    12-24 months
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>
            </div> 
        )
    }
}