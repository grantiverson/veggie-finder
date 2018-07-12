import React from 'react';
import SearchText from './SearchText/SearchText';
import Filters from './Filters/Filters';
import PropTypes from 'prop-types';

const Search = (props) => {
	return (
		<div id="search-filter-container">
			<p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the area!</p>
			<div id="sidebar-inputs-container" role="Search">
				<SearchText
					handleSearchText={props.handleSearchText}
					searchForLocations={props.searchForLocations}
				/>
				<Filters
					handlePriceFilter={props.handlePriceFilter}
					handleRatingFilter={props.handleRatingFilter}
				/>
			</div>
	    </div>
	)
}

export default Search;

Search.propTypes = {
  handleSearchText: PropTypes.func.isRequired,
  searchForLocations: PropTypes.func.isRequired,
  handlePriceFilter: PropTypes.func.isRequired,
  handleRatingFilter: PropTypes.func.isRequired,
}