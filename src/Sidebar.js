import React, { Component } from 'react';
import List from './List'

class Sidebar extends Component {

  // toggleNav = () => {
  // }

  render() {
    return(
      <div id="sidebar">
        <div id="search-filter-container">
          <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the the area!</p>
          <div id="sidebar-inputs-container" role="Search">
            <div id="search-text-container">
              <input id="search-text" type="text" placeholder="Enter a location" role="textbox" aria-label="Search textbox" onChange={(e) => this.props.handleSearchText(e.target.value)}></input>
              <input id="search-text-button" type="button" value="Search" role="button" aria-label="Click to search" onClick={this.props.handleSearchButton}></input>
            </div>
            <div className="filter-container">
              <select id="price-filter" role="listbox" aria-label="Filter locations by price" onChange={(e) => this.props.handlePriceFilter(e.target.value)}>
                <option value="any price" role="option">Any price</option>
                <option value="$" role="option">$</option>
                <option value="$$" role="option">$$</option>
                <option value="$$$" role="option">$$$</option>
              </select>
              <select id="rating-filter" role="listbox" aria-label="Filter locations by rating" onChange={(e) => this.props.handleRatingFilter(e.target.value)}>
                <option value="3" role="option">Any rating</option>
                <option value="3.5" role="option">3.5+</option>
                <option value="4" role="option">4</option>
                <option value="4.5" role="option">4.5+</option>
                <option value="5" role="option">5</option>
              </select>
            </div>
          </div>
        </div>
        {/* The list component displays details about all of the restaurants displayed on the map */}
        <List
          markers={this.props.markers}
          yelpStars={this.props.yelpStars}
          yelpLogo={this.props.yelpLogo}
          populateInfoWindow={this.props.populateInfoWindow}
          toggleShowList={this.props.toggleShowList}
          showList={this.props.showList}
        />
      </div>
    )
  }
}

export default Sidebar;
