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
        <div className="sidebar-container">
          <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the the area!</p>
          <div className="sidebar-button-container">
            <input id="search-text" type="text" placeholder="Ex: Google Office NYC or 75 9th Ave, New York, NY" onChange={(e) => this.props.handleSearchText(e.target.value)}></input>
            <input id="search-text-button" type="button" value="Search" onClick={this.props.handleSearchButton}></input>
            <div>
              <p>Price:</p>
              <select id="price-filter" onChange={(e) => this.props.handlePriceFilter(e.target.value)}>
                <option value="any-price">Any price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
              </select>
            </div>
            <div>
              <p>Rating:</p>
              <select id="rating-filter" onChange={(e) => this.props.handleRatingFilter(e.target.value)}>
                <option value="3">3+</option>
                <option value="3.5">3.5+</option>
                <option value="4">4</option>
                <option value="4.5">4.5+</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <p>Distance:</p>
              <select id="max-duration">
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="60">1 hour</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;
