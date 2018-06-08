import React, { Component } from 'react';
import List from './List'

class Sidebar extends Component {

  // toggleNav = () => {
  // }

  render() {
    return(
      <div id="sidebar">
        <button id="sidebar-button"></button>
        <div id="search-filter-container">
          <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the the area!</p>
          <div id="sidebar-inputs-container">
            <div id="search-text-container">
              <input id="search-text" type="text" placeholder="Enter a location" onChange={(e) => this.props.handleSearchText(e.target.value)}></input>
              <input id="search-text-button" type="button" value="Search" onClick={this.props.handleSearchButton}></input>
            </div>
            <div className="filter-container">
              <select id="price-filter" onChange={(e) => this.props.handlePriceFilter(e.target.value)}>
                <option value="any price">Any price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
              <select id="rating-filter" onChange={(e) => this.props.handleRatingFilter(e.target.value)}>
                <option value="3">Any rating</option>
                <option value="3.5">3.5+</option>
                <option value="4">4</option>
                <option value="4.5">4.5+</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <List
          markers={this.props.markers}
          yelpStars={this.props.yelpStars}
          yelpLogo={this.props.yelpLogo}
          findMarker={this.props.findMarker}
        />
      </div>
    )
  }
}

export default Sidebar;
