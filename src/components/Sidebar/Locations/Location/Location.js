import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {
  const { marker, yelpStars, yelpLogo, populateInfoWindow } = props

  // Chooses the correct image from the yelpStars array based on marker.rating
  const yelpStarRatingImg = yelpStars[marker.rating * 2 - 6];

  return(
    <div className="list-item" tabIndex="0" aria-label={"Details about " + marker.name} onClick={() => populateInfoWindow(marker)} onKeyPress={() => populateInfoWindow(marker)}>
      <div className="list-item-img-container">
        <img className="list-item-img" src={marker.image_url} alt={marker.name}></img>
      </div>
      <div className="list-item-container">
        <div className="list-item-text-container">
          <h2 className="list-item-name">{marker.name}</h2>
          <p className="list-item-address">{marker.address}</p>
          <p className="list-item-price">{marker.price}</p>
        </div>
        <div className="list-item-rating-container">
          <img className="list-item-rating-img" src={yelpStarRatingImg} alt={marker.rating}></img>
          <a className="list-item-link" href={marker.url} tabIndex="-1" target="_blank"><img className="list-item-yelp-logo" src={yelpLogo} alt="yelp!"></img></a>
          <p className="list-item-review-count">Based on {marker.review_count} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Location;

Location.propTypes = {
  yelpStars: PropTypes.array.isRequired,
  yelpLogo: PropTypes.string.isRequired,
  populateInfoWindow: PropTypes.func.isRequired
}