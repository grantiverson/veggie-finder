import React, { Component } from 'react';

class Sidebar extends Component {

  // toggleNav = () => {
  // }

  render() {
    return(
      <div className="sidebar">
        <button
          className="menu-button"
          // onClick={this.toggleNav}
        >
          Menu Button
        </button>
        <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the the area!</p>
        <input id="search-text" type="text" placeholder="Enter a location" onChange={(e) => this.props.handleSearchText(e.target.value)}></input>
        <input id="search-text-button" type="button" value="Search" onClick={this.props.handleSearchButton}></input>
        <div className="sidebar-ratings-container">
          <div className="filter-container">
            <p>Price:</p>
            <select id="price-filter" onChange={(e) => this.props.handlePriceFilter(e.target.value)}>
              <option value="any-price">Any price</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
          </div>
          <div className="filter-container">
            <p>Rating:</p>
            <select id="rating-filter" onChange={(e) => this.props.handleRatingFilter(e.target.value)}>
              <option value="3">3+</option>
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
}

export default Sidebar;
