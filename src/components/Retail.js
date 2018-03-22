import React from "react";
import axios from 'axios';

export default class Retail extends React.Component {

    state={locations: []}

    async getLocations() {
        const locations = await axios.get('/api/locations');
        return locations.data
    }

    componentDidMount = () => {
        this.getLocations().then(locations => 
            this.setState({locations: locations}))
        
        }
      
    
    

  render() {
      console.log(this.state.locations);
      const retailLocations = this.state.locations
    return (

      <div className="retail-body">
        <div className="retail-container">
          <h3 className="retail-container__heading">KINDHOOD RETAILERS</h3>
          <p className="retail-container__paragraph">
            Kindhood’s innovative girls’ and boys’ poncho towels are more than
            just a comfy, absorbent, and fast-drying towel. These children’s
            cover-ups are a solution to the frequent complaints of a child who’s
            “freezing” after swimming or bathing. Our towels also put an end to
            the fuss and frustration of a child who’s wrapped up tight in a bath
            towel, unable to move or play. Our girls’ and boys’ poncho towels
            can easily be slipped over your little one’s head, so they can
            continue to run, play, and stay warm. As talk about our free-fitting
            and fashionable children’s cover-ups increases, so do the
            opportunities for our poncho and hooded towels to be sold in stores.
            Find out which of your favorite stores we’re partnered with here.
          </p>

          <h5 className="retail-container__subheading">
            HOW TO PARTNER WITH US
          </h5>
          <p className="retail-container__paragraph">
            We’re always looking for brand representatives and ambassadors. From
            wholesale to retail, <a>contact us today</a> for more information
            about how to partner with Kindhood.
          </p>
          <div className="retail-container__location-container">
            {retailLocations.map(item => {
                return <div key={item.location_id} >
                        <h6>{item.state_name}</h6>
                        <h6>{item.store_name}</h6>
                        <h6>{item.city}</h6>
                       </div> 
            })}
          </div>
        </div>
      </div>
    );
  }
}
