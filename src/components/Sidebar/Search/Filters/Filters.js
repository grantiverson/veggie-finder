import React, { Component } from 'react';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

class Filters extends Component {
  state = {
    filtersArray: [
      {
        id: 'price-filter',
        ariaLabel: 'Filter locations by price',
        optionsArray: [
          {'Any price': 'any price'},
          {$: '$'},
          {$$: '$$'},
          {$$$: '$$$'}
        ],
        handleChange: this.props.handlePriceFilter
      },
      {
        id: 'rating-filter',
        ariaLabel: 'Filter locations by rating',
        optionsArray: [
          {'Any rating': 3},
          {'3.5+': 3.5},
          {'4+': 4},
          {'4.5+': 4.5},
          {'5': 5}
        ],
        handleChange: this.props.handleRatingFilter
      }
    ]
  }

  filters = this.state.filtersArray.map(filter => {
    return (
      <Filter
        key={filter.id}
        id={filter.id}
        ariaLabel={filter.ariaLabel}
        optionsArray={filter.optionsArray}
        handleChange={filter.handleChange}
      />
    )
  });

  render() {
    return(
      <div className="filter-container">
        {this.filters}
      </div>
    )
  }

}

export default Filters;

Filters.propTypes = {
  handlePriceFilter: PropTypes.func.isRequired,
  handleRatingFilter: PropTypes.func.isRequired,
}
