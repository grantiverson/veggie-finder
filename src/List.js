import React, { Component } from 'react';

class List extends Component {
  render() {
    const { markers, yelpStars, yelpLogo } = this.props


    return(
      <div className="locations-list-container">
        <button id="locations-list-button"></button>
        <div className="locations-list">
          {markers.map((marker, index) => {
            return <div className="list-item" key={index} onClick={() => this.props.findMarkerByName(marker.name)}>
              <div className="list-item-img-container">
                <img className="list-item-img" src={marker.image_url} alt={marker.name}></img>
              </div>
              <div className="list-item-container">
                <div className="list-item-text-container">
                  <a className="list-item-link"href={marker.url} target="_blank"><h2 className="list-item-name">{marker.name}</h2></a>
                  <p className="list-item-address">{marker.address}</p>
                  <p className="list-item-price">{marker.price}</p>
                </div>
                <img className="list-item-rating-img"src={yelpStars[marker.rating * 2 - 6]} alt={marker.rating}></img>
                <a className="list-item-link"href={marker.url}><img id="yelp-logo" src={yelpLogo} alt="yelp!"></img></a>
                <p>Based on {marker.review_count} reviews</p>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default List;
