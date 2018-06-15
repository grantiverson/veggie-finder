import React from 'react';
import ListItem from './ListItem'
import PropTypes from 'prop-types';

const LocationsList = (props) => {

  const { markers, yelpStars, yelpLogo, showList, toggleShowList } = props

  return(
    // Shows or hides locations-list-container when the locations-list-button is clicked
    <div className={"locations-list-container " + (showList ? "show" : "hide")}>
      {/* Aria-label changes on click so users will know if the list is displayed */}
      <button id="locations-list-button" onClick={(e) => toggleShowList()}
        aria-label={(showList ? "Hide" : "Show") + "list of locations"}
      ></button>
      <div className="locations-list">
        {/* Filters list-items so the visible ones match the markers on the map */}
        {markers.filter(marker => marker.map)
          .map((marker, index) => {
          // list items that show information about each restaurant
          return <ListItem
                  yelpStars={yelpStars}
                  yelpLogo={yelpLogo}

                  key={index}
                  marker={marker}

                  populateInfoWindow={props.populateInfoWindow}
                 />
        })}
      </div>
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
