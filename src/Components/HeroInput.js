import React, { Component } from 'react';

//This should be the input area and the button 
class HeroInput extends Component {
    constructor(){
        super()

        this.state={
            inputText: '',
            avengers: [],
        }

    this.handleUpdateAvengers = this.handleUpdateAvengers.bind(this)
    }

    handleUpdateAvengers(){
        let teamUpdate = this.state.avengers
        let newHero = this.state.inputText
        teamUpdate.push(newHero)
        this.setState({
            avenger: teamUpdate
        })
        console.log(this.state.avengers)
    }

    handleInput(val){
        this.setState({
            inputText: val
        })
    }

    
    render(){
        return(
            <div>
                <input onChange={(e)=> this.handleInput(e.target.value)} placeholder="Enter Hero" />
                <button onClick={(e)=> this.handleUpdateAvengers()} >Suit up!</button>
                <h1>
                    {this.state.avengers}
                </h1>
            </div>
        )
    }
}

export default HeroInput