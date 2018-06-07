import React, { Component } from 'react';

class List extends Component {
  render() {
    const { markers, locations, yelpStars, yelpLogo } = this.props

    return(
      <div className="locations-list-container">
        <button id="locations-list-button"></button>
        <div className="locations-list">
          {locations.map((location, index) => {
            return <div className="list-item" key={index}>
              <div className="list-item-img-container">
                <img className="list-item-img" src={location.image_url} alt={location.name}></img>
              </div>
              <div className="list-item-container">
                <div className="list-item-text-container">
                  <a className="list-item-link"href={location.url}><h2 className="list-item-name">{location.name}</h2></a>
                  <p className="list-item-address">{location.address}</p>
                  <p className="list-item-price">{location.price}</p>
                </div>
                <img className="list-item-rating-img"src={yelpStars[location.rating * 2 - 6]} alt={location.rating}></img>
                <a className="list-item-link"href={location.url}><img id="yelp-logo" src={yelpLogo} alt="yelp!"></img></a>
                <p>Based on {location.review_count} reviews</p>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default List;
