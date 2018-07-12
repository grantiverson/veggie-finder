import React from 'react';
import PropTypes from 'prop-types';

const SearchText = (props) => {

  return(
    <form id="search-text-container" onSubmit={(e) => props.searchForLocations(e)}>
      <input id="search-text" type="text" placeholder="Enter a location" aria-label="Search textbox" onChange={(e) => props.handleSearchText(e.target.value)}></input>
      <input id="search-text-button" type="submit" value="Search" aria-label="Click to search"></input>
    </form>
  )
}

export default SearchText;

SearchText.propTypes = {
  handleSearchText: PropTypes.func.isRequired,
  searchForLocations: PropTypes.func.isRequired
}
