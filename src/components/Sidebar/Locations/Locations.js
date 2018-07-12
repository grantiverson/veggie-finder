import React from 'react';
import Location from './Location/Location'
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
  return (
    <button id="locations-list-button" onClick={(e) => props.toggleShowList()}
      aria-label={(props.showList ? "Hide" : "Show") + "list of locations"}
    ></button>
  )
}

const Locations = (props) => {
  // Filters list-items so the visible ones match the markers on the map
  const locations = <div className="locations-list">
    {props.markers.filter(marker => marker.map)
      .map((marker, index) => {
        // list items that show information about each restaurant
        if (marker.loading) {
          return <h2 key={index}>Loading...</h2>
        } else {
          return (
            <Location
              yelpStars={props.yelpStars}
              yelpLogo={props.yelpLogo}

              key={index}
              marker={marker}

              populateInfoWindow={props.populateInfoWindow}
            />
          )
        }
      })}
  </div>

  return(
    locations
  )
}

export default Locations;

Locations.propTypes = {
  yelpStars: PropTypes.array.isRequired,
  yelpLogo: PropTypes.string.isRequired,
  markers: PropTypes.array.isRequired,
  showList:  PropTypes.bool.isRequired,
  toggleShowList: PropTypes.func.isRequired,
  populateInfoWindow: PropTypes.func.isRequired
}
