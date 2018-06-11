import React, { Component } from 'react';

class List extends Component {
  render() {
    const { markers, yelpStars, yelpLogo, showList, toggleShowList } = this.props


    return(
      // Shows or hides locations-list-container when the locations-list-button is clicked
      <div className={"locations-list-container " + (showList ? "show" : "hide")}>
        <button id="locations-list-button" onClick={(e) => toggleShowList()}
          aria-label={(showList ? "Hide" : "Show") + "list of locations"}
          ></button>
        <div className="locations-list">
          {/* Filters markers to only display the ones visible on the map */}
          {markers.filter(marker => marker.map)
            .map((marker, index) => {
            // list items that show information about each restaurant
            return <div className="list-item" key={index} tabIndex="0" aria-label={"Details about " + marker.name} onClick={(e) => this.props.populateInfoWindow(marker)} onKeyPress={(e) => this.props.populateInfoWindow(marker)}>
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
                <a className="list-item-link"href={marker.url} tabIndex="-1"><img id="yelp-logo" src={yelpLogo} alt="yelp!"></img></a>
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
