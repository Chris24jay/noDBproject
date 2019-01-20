import React, { Component } from 'react';
import Logo from '../Avengers-logo.png'

//Maybe this component just needs to be a functional component?
//I want this to pull up a list of heroes for now
class Assemble extends Component {
    render(){
        return(
            <div>
                <img src={Logo} alt="Logo" /><br/>
                <button>Assemble!</button>
            </div>
            
        )
    }
}

export default Assemble