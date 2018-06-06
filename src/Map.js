import React, { Component } from 'react';
import Sidebar from './Sidebar';

import yelpLogo from './images/yelp-logo.png';
import yelpStars6 from './images/yelp-stars-6.png';
import yelpStars7 from './images/yelp-stars-7.png';
import yelpStars8 from './images/yelp-stars-8.png';
import yelpStars9 from './images/yelp-stars-9.png';
import yelpStars10 from './images/yelp-stars-10.png';

let map;
let markers = [];

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: [
        {
          name: 'Dandelion Communitea Caf&eacute;',
          address: '618 N Thornton Ave, Orlando, FL 32803',
          rating: 4.5,
          review_count: 674,
          price: '$$',
          coordinates: {latitude: 28.552027, longitude: -81.365711},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/u_gBxBIpx5r48teO7XykSw/180s.jpg',
          url: 'https://www.yelp.com/biz/dandelion-communitea-caf%C3%A9-orlando-2?osq=dandelion'
        },
        {
          name: 'Dajen Eats',
          address: 'NOT UPDATED',
          rating: 5,
          review_count: 30,
          price: '$$',
          coordinates: {latitude: 28.602381, longitude: -81.418670},
          image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/A7YnuHm-rLc6vOWh_zovXg/180s.jpg',
          url: 'https://www.yelp.com/biz/dajen-eats-orlando-2?osq=Dajen+Eats'
        },
        {
          name: 'Dixie Dharma',
          address: '2603 E S St, Orlando, FL 32803',
          rating: 4.5,
          review_count: 147,
          price: '$$',
          coordinates: {latitude: 28.538881, longitude: -81.349373},
          image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/KDb8UrN6mhXwoyHMawifog/180s.jpg',
          url: 'https://www.yelp.com/biz/dixie-dharma-orlando-2?osq=Dixie+Dharma'
        },
        {
          name: 'Loving Hut',
          address: '2101 E Colonial Dr, Orlando, FL 32803',
          rating: 4,
          review_count: 174,
          price: '$',
          coordinates: {latitude: 28.553386, longitude: -81.354787},
          image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/G7MmlmbNrEP3DS11kRlulw/180s.jpg',
          url: 'https://www.yelp.com/biz/loving-hut-orlando?osq=loving+hut'
        },
        {
          name: 'Raw Juicing and Detox',
          address: '898 E Washington St, Orlando, FL 32801',
          rating: 4.5,
          review_count: 58,
          price: '$$',
          coordinates: {latitude: 28.543536, longitude: -81.366743},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/2cd8FNlARME_FP2rQ-YNmw/180s.jpg',
          url: 'https://www.yelp.com/biz/raw-juicing-and-detox-orlando?osq=Raw+Juicing+and+Detox'
        },
        {
          name: 'Veggie Garden',
          address: '1216 E Colonial Dr, Orlando, FL 32803',
          rating: 4.5,
          review_count: 83,
          price: '$',
          coordinates: {latitude: 28.552801, longitude: -81.363701},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/sUdr1FrrtnM0f6zH9MQQQQ/180s.jpg',
          url: 'https://www.yelp.com/biz/veggie-garden-orlando-2?osq=Veggie+Garden'
        },
        {
          name: 'Infusion Tea',
          address: '1600 Edgewater Dr, Orlando, FL 32804',
          rating: 4,
          review_count: 436,
          price: '$',
          coordinates: {latitude: 28.565833, longitude: -81.389666},
          image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/YcwSq2oXVfKjtFF5rbyEVw/180s.jpg',
          url: 'https://www.yelp.com/biz/infusion-tea-orlando'
        },
        {
          name: 'Juice\'d Orlando',
          address: '12 N Summerlin Ave, Orlando, FL 32801',
          rating: 4,
          review_count: 65,
          price: '$$',
          coordinates: {latitude: 28.542880, longitude: -81.368618},
          image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/VjRWo6jr-KuOr_FV0HBIlA/180s.jpg',
          url: 'https://www.yelp.com/biz/juiced-orlando-3?osq=juice%27d'
        },
        {
          name: 'Khasiyat',
          address: '852 W Lancaster Rd, Orlando, FL 32809',
          rating: 4,
          review_count: 77,
          price: '$$',
          coordinates: {latitude: 28.464931, longitude: -81.389559},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/53GlgJH46ImFluaf3sjsJQ/180s.jpg',
          url: 'https://www.yelp.com/biz/khasiyat-indian-restaurant-orlando?osq=khasiyat'
        },
        {
          name: 'Maoz',
          address: '4200 Conroy Rd, Orlando, FL 32839',
          rating: 4.5,
          review_count: 84,
          price: '$',
          coordinates: {latitude: 28.485318, longitude: -81.432146},
          image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/bR_IpWyyb6Bpe802OT4Kog/180s.jpg',
          url: 'https://www.yelp.com/biz/maoz-orlando?osq=Maoz'
        },
        {
          name: 'Skyebird',
          address: '3201 Corrine Dr, Orlando, FL 32803',
          rating: 4.5,
          review_count: 104,
          price: '$',
          coordinates: {latitude: 28.568161, longitude: -81.343824},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/-WQi8wu_82flrgC75eX6GQ/180s.jpg',
          url: 'https://www.yelp.com/biz/skyebird-orlando-2?osq=Skyebird'
        },
        {
          name: 'Nature\'s Table Cafe',
          address: '8001 S Orange Blossom Trl, Orlando, FL 32809',
          rating: 3,
          review_count: 10,
          price: '$',
          coordinates: {latitude: 28.446041, longitude: -81.395459},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/tLf3ug-1YZ4lFc4gOAtwrA/180s.jpg',
          url: 'https://www.yelp.com/biz/natures-table-orlando-2?osq=nature%27s+table'
        },
        {
          name: 'Sweet Tomatoes',
          address: '4678 E Colonial Dr, Orlando, FL 32803',
          rating: 3.5,
          review_count: 127,
          price: '$$',
          coordinates: {latitude: 28.552238, longitude: -81.327420},
          image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/oiMk6yN57BJegG2RKYQLPg/180s.jpg',
          url: 'https://www.yelp.com/biz/sweet-tomatoes-orlando?osq=sweet+tomatoes+4678+e+colonial+dr'
        }
      ]
    }
  }

  UNSAFE_componentWillMount() {
    const googleMap = document.createElement('script');
    googleMap.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAlON1P3WcMsZMFUhEOXrvVftIg02fEVN4&v=3&callback=initMap';
    document.body.appendChild(googleMap);

    window.initMap = this.initMap;

  }

  componentDidMount() {
    // Authorization info for Yelp
    // https://forum.freecodecamp.org/t/authorization-http-header-for-yelp-fusion-api-access-token/140974
    const access_token = "Opsi88BMRhY9PANt58XH8NSBCbDCLLnHL5VLKDmhaOt4qoruzhDzZcqAdCIAAO59a5UvhRFFAqdR6SSZ65VWNpiSsyyX-sLl3TLQNUg1sqi1R-sl4JJQ5QbzqWsUW3Yx";
    const myHeaders = new Headers({
      "Authorization": "Bearer " + access_token
    });

    // Allows access when CORS is disabled
    const cors = "https://cors-anywhere.herokuapp.com/"

    let oldLocations = this.state.locations[1];
    let updatedLocations = []

    const urlToFetch = `${cors}https://api.yelp.com/v3/businesses/search?term=${oldLocations.name}&latitude=${oldLocations.coordinates.latitude}&longitude=${oldLocations.coordinates.longitude}&limit=1`
    console.log(urlToFetch);

    fetch(urlToFetch, {
        headers: myHeaders
      }).then(result => {
        return result.json();
      }).then(places => {
        if (places.businesses[0]) {
          const returnedBusiness = places.businesses[0];
          let updatedBusiness = {
            name: returnedBusiness.name,
            address: returnedBusiness.location.display_address.join(', '),
            rating: returnedBusiness.rating,
            review_count: returnedBusiness.review_count,
            price: returnedBusiness.price,
            coordinates: returnedBusiness.coordinates,
            image_url: returnedBusiness.image_url,
            url: returnedBusiness.url
          };

          this.setState(prevState => {
            prevState.locations[1] = updatedBusiness
          },
            console.log(this.state.locations),
            this.forceUpdate(console.log('component updated'))
          )
        }

      }).catch(error => {
        console.log(error);
      });
  }

  initMap = () => {

    let { locations } = this.state;

    map = new window.google.maps.Map(document.getElementById('map'), {mapTypeControl: false});

    const infoWindow = new window.google.maps.InfoWindow();

    const bounds = new window.google.maps.LatLngBounds();

    for (let location of locations) {
      const marker = new window.google.maps.Marker({
        position: {lat: location.coordinates.latitude, lng: location.coordinates.longitude},
        map: map,
        name: location.name,
        animation: window.google.maps.Animation.DROP,
        address: location.address,
        rating: location.rating,
        price: location.price,
        id: location.index,
        image_url: location.image_url,
        url: location.url,
        review_count: location.review_count
      })

      marker.addListener('click', function() {
        populateInfoWindow(this, infoWindow);
      })

      markers.push(marker);

      bounds.extend(marker.position);
    }
    map.fitBounds(bounds);

    function populateInfoWindow(marker, infoWindow) {

      if (infoWindow.marker !== marker) {
        markers.forEach(marker => {
          marker.setAnimation(null);
        })

        infoWindow.marker = marker;
        marker.setAnimation(window.google.maps.Animation.BOUNCE);

        let yelpStars = [yelpStars6, yelpStars7, yelpStars8, yelpStars9, yelpStars10]

        infoWindow.setContent(
         `<img class="info-window-img" src=${marker.image_url} alt=${marker.name}>
          <div class="info-window-container">
            <div class="info-window-text-container">
              <a className="info-window-link"href=${marker.url}><h2 className="info-window-name">${marker.name}</h2></a>
              <p className="info-window-address">${marker.address}</p>
              <p className="info-window-price">${marker.price}</p>
            </div>
            <img className="info-window-rating-img"src=${yelpStars[marker.rating * 2 - 6]} alt="${marker.rating}">
            <a className="info-window-link"href=${marker.url}><img id="yelp-logo" src=${yelpLogo} alt="yelp!"></a>
            <p>Based on ${marker.review_count} reviews</p>
         </div>`
        )
        infoWindow.open(map, marker);
        infoWindow.addListener('closeclick', function() {
          marker.setAnimation(null);
          infoWindow.setMarker = null;
        })

      }
    }
  }

  hide = () => {
    markers.forEach(marker => {
      marker.setMap(null);
      marker.setAnimation(null);
    })
  }

  show = () => {
    let bounds = new window.google.maps.LatLngBounds();

    markers.forEach(marker => {
      marker.setAnimation(window.google.maps.Animation.DROP);
      marker.setMap(map);
      bounds.extend(marker.position);
    })
    map.fitBounds(bounds);
  }

  filterRestaurants = (value) => {

    let { locations } = this.state;

    this.hide();

    let priceFilterValue = 'any-price';
    let ratingFilterValue = 'any-rating';

    if (value === 'any-price' || value === '$' || value === '$$') {
      priceFilterValue = value;
    }
    if (value === 'any-rating' || parseInt(value, 10)) {
      ratingFilterValue = value;
    }

    let bounds = new window.google.maps.LatLngBounds();

    for (let i = 0; i < locations.length; i++) {
      let priceMatch = false;
      let ratingMatch = false;

      let locationPrice = locations[i].price;
      let locationRating = locations[i].rating;

      (locationPrice === priceFilterValue || priceFilterValue === 'any-price') ? priceMatch = true : null;
      (locationRating >= ratingFilterValue || ratingFilterValue === 'any-rating') ? ratingMatch = true : null;

      if (priceMatch && ratingMatch) {
        markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
        markers[i].setMap(map);
        setTimeout(function() {
          markers[i].setAnimation(null);
        }, 1400);

        bounds.extend(markers[i].position);
      } else {
        markers[i].setMap(null);
      }
    }
    map.fitBounds(bounds);
  }

  render() {
    return (
      <div>
        <div className="header">Veggie Finder</div>
        <Sidebar
          hide={this.hide}
          show={this.show}
          filterRestaurants={this.filterRestaurants}
        />
        <div id="map"></div>
      </div>
    );
  }
}

export default Map;
