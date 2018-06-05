'use strict'

// Authorization info for Yelp
// https://forum.freecodecamp.org/t/authorization-http-header-for-yelp-fusion-api-access-token/140974
// const access_token = "Opsi88BMRhY9PANt58XH8NSBCbDCLLnHL5VLKDmhaOt4qoruzhDzZcqAdCIAAO59a5UvhRFFAqdR6SSZ65VWNpiSsyyX-sLl3TLQNUg1sqi1R-sl4JJQ5QbzqWsUW3Yx";
//
// let myHeaders = new Headers({
//   "Authorization": "Bearer " + access_token
// });

let map,
    markers = [];

let locations = [
  {
    title: 'Dandelion Communitea Caf&eacute;',
    address: '618 N Thornton Ave, Orlando, FL 32803',
    rating: 4.5,
    price: '$$',
    position: {lat: 28.552027, lng: -81.365711}
  },
  {
    title: 'Dajen Eats',
    address: '4845 N Orange Blossom Trl, Orlando, FL 32810',
    rating: 5,
    price: '$$',
    position: {lat: 28.602381, lng: -81.418670}
  },
  {
    title: 'Dixie Dharma',
    address: '2603 E S St, Orlando, FL 32803',
    rating: 4.5,
    price: '$$',
    position: {lat: 28.538881, lng: -81.349373}
  },
  {
    title: 'Loving Hut',
    address: '2101 E Colonial Dr, Orlando, FL 32803',
    rating: 4,
    price: '$',
    position: {lat: 28.553386, lng: -81.354787}
  },
  {
    title: 'Raw Juicing and Detox',
    address: '898 E Washington St, Orlando, FL 32801',
    rating: 4.5,
    price: '$$',
    position: {lat: 28.543536, lng: -81.366743}
  },
  {
    title: 'Veggie Garden',
    address: '1216 E Colonial Dr, Orlando, FL 32803',
    rating: 4.5,
    price: '$',
    position: {lat: 28.552801, lng: -81.363701}
  },
  {
    title: 'InfusionTea',
    address: '1600 Edgewater Dr, Orlando, FL 32804',
    rating: 4,
    price: '$',
    position: {lat: 28.565833, lng: -81.389666}
  },
  {
    title: 'Juice\'d Orlando',
    address: '12 N Summerlin Ave, Orlando, FL 32801',
    rating: 4,
    price: '$$',
    position: {lat: 28.542880, lng: -81.368618}
  },
  {
    title: 'Khasiyat',
    address: '852 W Lancaster Rd, Orlando, FL 32809',
    rating: 4,
    price: '$$',
    position: {lat: 28.464931, lng: -81.389559}
  },
  {
    title: 'Maoz',
    address: '4200 Conroy Rd, Orlando, FL 32839',
    rating: 4.5,
    price: '$',
    position: {lat: 28.485318, lng: -81.432146}
  },
  {
    title: 'Skyebird',
    address: '3201 Corrine Dr, Orlando, FL 32803',
    rating: 4.5,
    price: '$',
    position: {lat: 28.568161, lng: -81.343824}
  },
  {
    title: 'Nature\'s Table Cafe',
    address: '8001 S Orange Blossom Trl, Orlando, FL 32809',
    rating: 3,
    price: '$',
    position: {lat: 28.446041, lng: -81.395459}
  },
  {
    title: 'Sweet Tomatoes',
    address: '4678 E Colonial Dr, Orlando, FL 32803',
    rating: 3.5,
    price: '$$',
    position: {lat: 28.552238, lng: -81.327420}
  }
];

function initMap() {
  // let directionsService = new google.maps.DirectionsService();
  // let directionsDisplay = new google.maps.DirectionsRenderer();
  const mapOptions = {
        zoom: 13,
        center: {lat: 28.537880, lng: -81.379571},
        mapTypeControl: false
      };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const infoWindow = new google.maps.InfoWindow();

  const bounds = new google.maps.LatLngBounds();

  for (let location of locations) {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      animation: google.maps.Animation.DROP,
      address: location.address,
      rating: location.rating,
      price: location.price,
      id: location.index
    })

    marker.addListener('click', function() {
      populateInfoWindow(this, infoWindow);
    })

    markers.push(marker);

    bounds.extend(marker.position);
  }
  map.fitBounds(bounds);

  function populateInfoWindow(marker, infoWindow) {

    if (infoWindow.marker != marker) {
      markers.forEach(marker => {
        marker.setAnimation(null);
      })

      infoWindow.marker = marker;
      marker.setAnimation(google.maps.Animation.BOUNCE);
      infoWindow.setContent(
        `<h1>${marker.title}</h1>
         <p>Address: ${marker.address}</p>
         <p>Rating: ${marker.rating}</p>
         <p>Price: ${marker.price}</p>`
      )
      infoWindow.open(map, marker);
      infoWindow.addListener('closeclick', function() {
        marker.setAnimation(null);
        infoWindow.setMarker = null;
      })

    }
  }


  // directionsDisplay.setMap(map);

  // displayDirections(directionsService, directionsDisplay);
}

function hide() {
  markers.forEach(marker => {
    marker.setMap(null);
    marker.setAnimation(null);
  })
}

function show() {
  let bounds = new google.maps.LatLngBounds();



  markers.forEach(marker => {
    marker.setAnimation(google.maps.Animation.DROP);
    marker.setMap(map);
    bounds.extend(marker.position);
  })
  map.fitBounds(bounds);
}

function filterRestaurants() {
  hide();

  let priceFilterValue = document.getElementById('price-selector').value;
  let ratingFilterValue = document.getElementById('rating-selector').value;

  let bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < locations.length; i++) {
    let priceMatch = false;
    let ratingMatch = false;

    let locationPrice = locations[i].price;
    let locationRating = locations[i].rating;

    (locationPrice === priceFilterValue || priceFilterValue === 'all') ? priceMatch = true : null;
    (locationRating >= ratingFilterValue || ratingFilterValue === 'all') ? ratingMatch = true : null;

    if (priceMatch && ratingMatch) {
      markers[i].setAnimation(google.maps.Animation.BOUNCE);
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

// function displayDirections(directionsService, directionsDisplay) {
//   let start = '998 US-27, Avon Park, FL 33825',
//       end = '100 S Verona Ave, Avon Park, FL 33825',
//       waypoints = [],
//       request = {
//         origin: start,
//         destination: end,
//         travelMode: 'DRIVING',
//         waypoints: waypoints,
//         optimizeWaypoints: true
//       };
//
//   for (let i = 0; i < (locations.length); i++) {
//     let newWaypoint = locations[i].address;
//     request.waypoints.push({
//       location: newWaypoint,
//       stopover: true
//     });
//
//   }
//
//   directionsService.route(request, function(result, status) {
//     if (status === 'OK') {
//       directionsDisplay.setDirections(result);
//       directionsDisplay.setPanel(document.getElementById('directions'));
//       console.log(result);
//     } else {
//       window.alert('Directions request failed due to ' + status);
//     }
//   });
//
// }

// function searchForPlace(addPlaceText) {
//
//   fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${addPlaceText}&limit=5&location=Avon Park`, {
//     headers: myHeaders
//   }).then(result => {
//     return result.json();
//   }).then(places => {
//     console.log(places.businesses);
//     return places.businesses;
//   }).catch(error => {
//     console.log(error);
//   });
//
// }
