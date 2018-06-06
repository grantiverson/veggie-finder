import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarOpen: true
    }

  }

  render() {

    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
