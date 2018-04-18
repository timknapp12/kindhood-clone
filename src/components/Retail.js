import React from "react";
import axios from "axios";
import underscore from "underscore";

export default class Retail extends React.Component {
  state = { locations: {} };

  async getLocations() {
    const locations = await axios.get("/api/locations");
    // If I don't attach 'data' to 'locations' then I get nothing back
    return locations.data;
  }

  componentDidMount = () => {
    this.getLocations().then(locations =>
      // the method below uses the underscore library to group all of the locations by state_name. The database has 'California' listed several times but I only want it listed once so when it is mapped through and displayed on the screen it will only be listed once, instead of each time a city whithin California is listed. This method takes in an array and returns an object
      this.setState({ locations: underscore.groupBy(locations, "state_name") })
    );
  };

  render() {
    console.log(this.state.locations);

    // the javascript below is a 'for in loop' so I can get each state in the newly created object (see comment ablove) 'this.state.locations' pushed into an array. Then below, under the render method I wil map through the newly created array to dispaly state_name and then inside that method I will nest another map method to display each store_name and city within the respective state_name
    const states = [];
    for (var prop in this.state.locations) {
      states.push(this.state.locations[prop]);
    }
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
            {states.map((state, i) => {
              return (
                <div key={state[0].state_id} 
                className="retail-container__location-container--groups">
                  <h5 className='retail-container__location-container--groups__states' >
                  {state[0].state_name}
                  </h5>
                  {state.map((item, i) => {
                    return (
                      <div key={item.city} 
                      className='retail-container__location-container--groups__cities' >
                        <h6 className='retail-container__location-container--groups__cities--stores'>{item.store_name}</h6>
                        <h6>{item.city}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
