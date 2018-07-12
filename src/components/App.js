import React, { Component } from 'react';
import SearchFilter from './SearchFilter';
import LocationsList from './LocationsList'
import Map from './Map';

import yelpLogo from '../images/yelp-logo.png';
import yelpStars6 from '../images/yelp-stars-6.png';
import yelpStars7 from '../images/yelp-stars-7.png';
import yelpStars8 from '../images/yelp-stars-8.png';
import yelpStars9 from '../images/yelp-stars-9.png';
import yelpStars10 from '../images/yelp-stars-10.png';

let map;
let infoWindow;
// This array loads the images needed for yelp reviews
const yelpStars = [yelpStars6, yelpStars7, yelpStars8, yelpStars9, yelpStars10]

class App extends Component {
  state = {
    // Information about 13 locations that will display immediately upon load
    locations: [
      {
        name: 'Please search for a location',
        rating: 0,
        price: '$',
      }
    ],
    // Google Maps styles
    styles: [
      {
        "stylers": [
          { "hue": "#007fff" },
          { "saturation": 89 }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ],
    // Array that will contain the Google Maps markers
    markers: [],
    // State of the price-filter select tag
    priceFilterValue: 'any price',
    // State of the rating-filter select tag
    ratingFilterValue: '3',
    // State of the search-text input tag
    searchValue: 'Orlando',
    // State of the locations-list-container div
    showList: true
  }

  componentDidMount() {
    this.searchForLocations();

    // Creates the Google Maps map script tag, calls the API request, then
    // appends the tag to the end of the document
    function loadError(oError) {
      alert('There was an error loading the map :/');
    }

    function appendScriptToBody(url, onloadFunction) {
      var googleMap = document.createElement("script");
      googleMap.onerror = loadError;
      if (onloadFunction) { googleMap.onload = onloadFunction; }
      document.body.appendChild(googleMap);
      googleMap.src = url;
    }

    appendScriptToBody('https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAlON1P3WcMsZMFUhEOXrvVftIg02fEVN4&v=3&callback=initMap');

    // Makes the initMap function globally accessable
    window.initMap = this.initMap;
  }

  // Initializes the Google Maps map
  initMap = () => {

    let { locations } = this.state;
    let { populateInfoWindow } = this;

    let updatedMarkers = [];

    map = new window.google.maps.Map(document.getElementById('map'), {
      mapTypeControl: false,
      styles: this.state.styles
    });

    infoWindow = new window.google.maps.InfoWindow();

    const bounds = new window.google.maps.LatLngBounds();

    // Loops over the this.state.locations array and generates/updates map markers
    for (let i = 0; i < locations.length; i++) {
      const location = locations[i];
      const marker = new window.google.maps.Marker({
        position: {lat: location.coordinates.latitude, lng: location.coordinates.longitude},
        map: map,
        name: location.name,
        animation: window.google.maps.Animation.DROP,
        // address: location.location.display_address.join(', '),
        rating: location.rating,
        price: location.price,
        id: i,
        image_url: location.image_url,
        url: location.url,
        review_count: location.review_count
      })

      // Adds an event listener to each marker
      marker.addListener('click', function() {
        populateInfoWindow(this);
      })


      updatedMarkers.push(marker);

      bounds.extend(marker.position);
    }
    map.fitBounds(bounds);

    this.setState({
      markers: updatedMarkers
    },
      this.filterRestaurants
    )
  }

  // Generates content for the infoWindow that will display when a list-item or
  // map marker is clicked
  populateInfoWindow = (marker) => {

    if (infoWindow.marker !== marker) {
      // Removes animations from the markers
      this.setState((previousState) => {
        const updatedMarkers = previousState.markers.map(marker => {
          return marker.setAnimation(null);
        })
        return {updatedMarkers}
      })


      infoWindow.marker = marker;
      // Makes the selected marker bounce
      marker.setAnimation(window.google.maps.Animation.BOUNCE);

      // Sets the content of the infoWindow and opens the window
      infoWindow.setContent(
       `<div class="info-window-container">
          <div class="info-window-text-container">
            <a className="info-window-link"href=${marker.url} target="_blank"><h2 className="info-window-name">${marker.name}</h2></a>
            <p className="info-window-address">${marker.address}</p>
            <p className="info-window-price">${marker.price}</p>
          </div>
          <img className="info-window-rating-img"src=${yelpStars[marker.rating * 2 - 6]} alt=${marker.rating}>
          <a className="info-window-link"href=${marker.url}><img id="yelp-logo" src=${yelpLogo} alt="yelp!"></a>
          <p>Based on ${marker.review_count} reviews</p>
       </div>`
      )
      infoWindow.open(map, marker);
      // Stops animations if the infoWindow is closed
      infoWindow.addListener('closeclick', function() {
        marker.setAnimation(null);
        infoWindow.setMarker = null;
      })

    }
  }

  // Hides all markers
  hide = () => {
    this.setState(previousState => {
      const updatedMarkers = previousState.markers.map(marker => {
        return (marker.setMap(null),
        marker.setAnimation(null));
      })
      return {updatedMarkers}
    })
  }

  // Controls the state of the search-text input tag
  handleSearchText = (value) => {
    this.setState({
      searchValue: value
    })
  }

  // Calls Yelp API and handles return
  searchForLocations = (e) => {
    e ? e.preventDefault() : null;
    // Authorization info for Yelp
    // https://forum.freecodecamp.org/t/authorization-http-header-for-yelp-fusion-api-access-token/140974
    const access_token = "Opsi88BMRhY9PANt58XH8NSBCbDCLLnHL5VLKDmhaOt4qoruzhDzZcqAdCIAAO59a5UvhRFFAqdR6SSZ65VWNpiSsyyX-sLl3TLQNUg1sqi1R-sl4JJQ5QbzqWsUW3Yx";
    const myHeaders = new Headers({
      "Authorization": "Bearer " + access_token
    });

    // Allows access when CORS is disabled
    const cors = "https://cors-anywhere.herokuapp.com/"
    const urlToFetch = `${cors}https://api.yelp.com/v3/businesses/search?term=vegetarian restaurants&location=${this.state.searchValue}`

    fetch(urlToFetch, {
        headers: myHeaders
      }).then(result => {
        return result.json();
      }).then(places => {
        if (places.businesses[0]) {
          this.setState({
            locations: places.businesses
          },
            map ? this.initMap : null
          )
        }

      }).catch(error => {
        alert('Sorry, but we seem to have hit a snag :/');
        console.log(error);
      });
  }

  // Controls the state of the price-filter select tag
  handlePriceFilter = (value) => {
    this.setState({
      priceFilterValue: value
    },
    this.filterRestaurants
  )}

  // Controls the state of the rating-filter select tag
  handleRatingFilter = (value) => {
    this.setState({
      ratingFilterValue: value
    },
    this.filterRestaurants
  )}

  // Decides which locations to show and which to hide
  filterRestaurants = () => {
    let { markers, priceFilterValue, ratingFilterValue } = this.state;

    this.hide;

    let bounds = new window.google.maps.LatLngBounds();

    let atLeastOneLocationFound = false;

    for (let i = 0; i < markers.length; i++) {
      let priceMatch = false;
      let ratingMatch = false;

      let locationPrice = markers[i].price;
      let locationRating = markers[i].rating;

      priceMatch = (locationPrice === priceFilterValue || priceFilterValue === 'any price') ? true : false;
      ratingMatch = (locationRating >= ratingFilterValue) ? true : false;

      // If the location matches both filters it will be shown
      if (priceMatch && ratingMatch) {
        markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
        markers[i].setMap(map);

        setTimeout(function() {
          markers[i].setAnimation(null);
        }, 1400);

        atLeastOneLocationFound = true;
        bounds.extend(markers[i].position);
      } else {
        markers[i].setMap(null);
      }
    }

    this.setState({
      markers
    })

    // Makes sure at least one is returned to prevent bounds problem
    if (!atLeastOneLocationFound) {
      alert('No restaurants found. Please try another search.')
      return
    }
    map.fitBounds(bounds);
  }

  // Controls the state of the locations-list-container div which shows or
  // hides the list of location deatils
  toggleShowList = () => {
    this.setState(previousState => {
      let toggleShowListState = previousState;
      toggleShowListState.showList = !previousState.showList;
      return { toggleShowListState }
    })
  }

  render() {

    return (
      <div className="App">
        <div id="header">Veggie Finder</div>
        <div id="sidebar">
          <SearchFilter
            handleSearchText={this.handleSearchText}
            handlePriceFilter={this.handlePriceFilter}
            handleRatingFilter={this.handleRatingFilter}
            searchForLocations={this.searchForLocations}
          />
          <LocationsList
            yelpStars={yelpStars}
            yelpLogo={yelpLogo}

            markers={this.state.markers}
            showList={this.state.showList}

            toggleShowList={this.toggleShowList}
            populateInfoWindow={this.populateInfoWindow}
          />
        </div>
        <Map
          showList={this.state.showList}
        />
      </div>
    );
  }
}

export default App;
