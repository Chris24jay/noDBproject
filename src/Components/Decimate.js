import React, { Component } from 'react';

class Decimate extends Component {
    constructor(){
        super()

        this.state = {
            buttonText: 'Fight!'
        }
    this.handleButtonChange = this.handleButtonChange.bind(this)
    }


    //method to change buttonText 
    handleButtonChange(){
        //do I put my axios.delete here?
        this.setState({
            buttonText: 'Oh Snap!'
        })
    } 


    render(){
        return(
            <div>
                <button onClick={() => {this.handleButtonChange()}}>
                {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default Decimate