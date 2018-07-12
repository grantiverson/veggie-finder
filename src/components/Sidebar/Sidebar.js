import React from 'react';
import Search from './Search/Search';
import ToggleButton from './ToggleButton/ToggleButton'
import Locations from './Locations/Locations';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <Search
        handleSearchText={props.handleSearchText}
        searchForLocations={props.searchForLocations}
        handlePriceFilter={props.handlePriceFilter}
        handleRatingFilter={props.handleRatingFilter}
      />
      {/* Shows or hides locations-list-container when the locations-list-button is clicked */}
      <div className={"locations-list-container " + (props.showList ? "show" : "hide")}>
        {/* Aria-label changes on click so users will know if the list is displayed */}
        <ToggleButton
          showList={props.showList}
          toggleShowList={props.toggleShowList}
        />
        <Locations
          yelpStars={props.yelpStars}
          yelpLogo={props.yelpLogo}

          markers={props.markers}
          showList={props.showList}

          toggleShowList={props.toggleShowList}
          populateInfoWindow={props.populateInfoWindow}
        />
      </div>
    </div>
  )
}

export default Sidebar;

Sidebar.propTypes = {
  handleSearchText: PropTypes.func.isRequired,
  searchForLocations: PropTypes.func.isRequired,
  handlePriceFilter: PropTypes.func.isRequired,
  handleRatingFilter: PropTypes.func.isRequired,
  yelpStars: PropTypes.array.isRequired,
  yelpLogo: PropTypes.string.isRequired,
  markers: PropTypes.array.isRequired,
  showList:  PropTypes.bool.isRequired,
  toggleShowList: PropTypes.func.isRequired,
  populateInfoWindow: PropTypes.func.isRequired
}