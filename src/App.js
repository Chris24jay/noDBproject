import React, { Component } from 'react';
import Header from './Components/Header'
import Assemble from './Components/Assemble'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <body>
          <Assemble />          
        </body>       
      </div>

    );
  }
}

export default App;
