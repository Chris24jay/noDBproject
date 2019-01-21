import React, { Component } from 'react';
import axios from 'axios';

//This should be the input area and the button 
class HeroInput extends Component {
    constructor(){
        super()

        this.state={
            inputText: '',
            avengers: []
        }

    this.handleUpdateAvengers = this.handleUpdateAvengers.bind(this)
    }

    handleUpdateAvengers(){
        let teamUpdate = this.state.avengers
        let newHero = this.state.inputText
        teamUpdate.push(newHero)
        axios.post(`http://localhost:4000/api/avengers/${this.state.inputText}`)
        .then((response)=> {
            console.log(response.data)
            this.setState({
                inputText: '',
                avengers: response.data
            })
        })
        
        console.log(this.state.avengers)
    }

    handleInput(val){
        this.setState({
            inputText: val
        })
    }

    
    render(){
        let displayHeroes = this.state.avengers.map((val,ind) => {
            return ( 
                <h2 key={ ind }>{ val.madeUpName }</h2>
            )
        })
        return(
            <div>
                <input 
                    onChange={(e)=> 
                        this.handleInput(e.target.value)} 
                    placeholder="Enter Hero"
                    value={this.state.inputText}
                />

                <button onClick={(e)=> this.handleUpdateAvengers()}>
                     Suit up!
                </button>
                {displayHeroes}
            </div>
        )
    }
}

export default HeroInput