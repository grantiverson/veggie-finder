import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Map extends Component {

  componentDidMount() {
    window.initMap = this.initMap();

  }

  initMap = () => {
  //   let map = new google.maps.Map(document.getElementById('map'), {
  //        center: {lat: 40.7413549, lng: -73.99802439999996},
  //        zoom: 13,
  //        mapTypeControl: false
  //      });
  }

  render() {
    return (
      <div>
        <Link
          to="/">
          Back to the list
        </Link>

      </div>
    );
  }
}

export default Map;
