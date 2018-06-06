import React, { Component } from 'react';

class Sidebar extends Component {

  // toggleNav = () => {
  // }



  filterRestaurants = () => {

  }

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
          <p>Use our Veggie Finder to find restaurants that serve the best vegetarian food in the Orlando area!</p>
          <div className="sidebar-button-container">
            <input type="button" value="Show All" onClick={this.props.show}></input>
            <div id="price-buttons">
              <select id="price-selector" onChange={(e) => this.props.filterRestaurants(e.target.value)}>
                <option value="any-price">Any price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
              </select>
            </div>
            <div id="rating-buttons">
              <select id="rating-selector" onChange={(e) => this.props.filterRestaurants(e.target.value)}>
                <option value="any-rating">Any rating</option>
                <option value="5">5</option>
                <option value="4.5">4.5+</option>
                <option value="4">4</option>
                <option value="3.5">3.5+</option>
                <option value="3">3+</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;
