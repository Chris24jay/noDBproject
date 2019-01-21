import React, { Component } from 'react';
// import axios from 'axios'

class Decimate extends Component {
    constructor(){
        super()

        this.state = {
            buttonText: 'Fight!'
        }
        this.handleButtonText = this.handleButtonText.bind(this)

    }

    handleButtonText(){
        this.setState({
            buttonText: 'Oh Snap!'
        })
    }





    render(){
        return(
            <div>
                <button
                 onClick={() =>{this.props.buttonChangeFn();this.handleButtonText()}}

                >
                {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default Decimate