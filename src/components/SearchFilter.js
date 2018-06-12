import React from 'react';
import PropTypes from 'prop-types';

const SearchFilter = (props) => {
  this.propTypes = {
    handleSearchText: PropTypes.func.isRequired,
    handlePriceFilter: PropTypes.func.isRequired,
    handleRatingFilter: PropTypes.func.isRequired,
    searchForLocations: PropTypes.func.isRequired
  }

  return(
    <div id="search-filter-container">
      <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the area!</p>
      <div id="sidebar-inputs-container" role="Search">
        <div id="search-text-container">
          <input id="search-text" type="text" placeholder="Enter a location" aria-label="Search textbox" onChange={(e) => props.handleSearchText(e.target.value)}></input>
          <input id="search-text-button" type="button" value="Search" aria-label="Click to search" onClick={props.searchForLocations}></input>
        </div>
        <div className="filter-container">
          <select id="price-filter" aria-label="Filter locations by price" onChange={(e) => props.handlePriceFilter(e.target.value)}>
            <option value="any price">Any price</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
          <select id="rating-filter" aria-label="Filter locations by rating" onChange={(e) => props.handleRatingFilter(e.target.value)}>
            <option value="3">Any rating</option>
            <option value="3.5">3.5+</option>
            <option value="4">4</option>
            <option value="4.5">4.5+</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter;
