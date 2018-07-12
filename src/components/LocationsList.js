import React from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types';

const ToggleButton = (props) => {
  return (
    <button id="locations-list-button" onClick={(e) => props.toggleShowList()}
      aria-label={(props.showList ? "Hide" : "Show") + "list of locations"}
    ></button>
  )
}

const LocationsList = (props) => {
  {/* Filters list-items so the visible ones match the markers on the map */}
  const locationsList = <div className="locations-list">
    {props.markers.filter(marker => marker.map)
      .map((marker, index) => {
        // list items that show information about each restaurant
        return (
          <ListItem
            yelpStars={props.yelpStars}
            yelpLogo={props.yelpLogo}

            key={index}
            marker={marker}

            populateInfoWindow={props.populateInfoWindow}
          />
        )
      })}
  </div>

  return(
    // Shows or hides locations-list-container when the locations-list-button is clicked
    <div className={"locations-list-container " + (props.showList ? "show" : "hide")}>
      {/* Aria-label changes on click so users will know if the list is displayed */}
      <ToggleButton
        showList={props.showList}
        toggleShowList={props.toggleShowList}
      />
      {locationsList}
    </div>
  )
}

export default LocationsList;

LocationsList.propTypes = {
  yelpStars: PropTypes.array.isRequired,
  yelpLogo: PropTypes.string.isRequired,
  markers: PropTypes.array.isRequired,
  showList:  PropTypes.bool.isRequired,
  toggleShowList: PropTypes.func.isRequired,
  populateInfoWindow: PropTypes.func.isRequired
}
