import React from 'react';
import PropTypes from 'prop-types';

const Map = (props) => {

  return (
    <div
      id="map"
      // Changes the styling of the map to fill space when the locations-list is shown or hidden
      className={(props.showList ? "show" : "hide")}
      aria-label="Google Maps Container"
      >
    </div>
  );
}

export default Map;

Map.propTypes = {
  showList:  PropTypes.bool.isRequired
}
