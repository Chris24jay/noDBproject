import React, { Component } from 'react';
import Header from './Components/Header'
import Assemble from './Components/Assemble'
import Decimate from './Components/Decimate'
import HeroInput from './Components/HeroInput'

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      assembleButton: false,
    }
  }

  handleAssembleButton(){
    this.setState({
      assembleButton: true,
    })
  }

  render() {
    return (
      <div className="App">
        <Assemble />
        <main>
          <Header /> 
          <HeroInput />         
          <Decimate /> 
        </main>   
      
   
             
      </div>

    );
  }
}

export default App;
