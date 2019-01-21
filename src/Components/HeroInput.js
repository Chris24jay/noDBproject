import React, { Component } from 'react';
import Decimate from '../Components/Decimate'
import Heroname from '../Components/Heroname'

import axios from 'axios';

//This should be the input area and the button 
class HeroInput extends Component {
    constructor(){
        super()

        this.state={
            inputText: '',
            avengers: [], 

        }

    this.handleUpdateAvengers = this.handleUpdateAvengers.bind(this)
    this.handleButtonChange = this.handleButtonChange.bind(this)
    
    this.handleEdit = this.handleEdit.bind(this)
    }

    //Post; create
    handleUpdateAvengers(){
        let teamUpdate = this.state.avengers
        let newHero = this.state.inputText
        teamUpdate.push(newHero)
        axios.post(`http://localhost:4000/api/avengers/${this.state.inputText}`)
        .then((response)=> {
            this.setState({
                inputText: '',
                avengers: response.data,
                
            })
        })
    }

    handleInput(val){
        this.setState({
            inputText: val
        })
    }

    //This is the Delete.
    handleButtonChange(){
        axios.delete('http://localhost:4000/api/avengers')
        .then((response => {
            console.log(response.data)
            this.setState({
                avengers: response.data
            }) 
        }))
    }
    
    //Put; update
    handleEdit(key){
        let newArr  = this.state.avengers
        let mode = this.state.mode
        newArr[key].madeUpName = this.state.heroEdit
            this.setState({
                avengers: newArr,

            })      
        
    }

    

    
    render(){
        
        let displayHeroes = this.state.avengers.map((val,ind) => {
            
            return <Heroname val={val} ind={ind} key={ind}
            editArray={this.handleEdit}
            />     
        })


        return(
            <div>
                <input 
                    onChange={(e)=> 
                        this.handleInput(e.target.value)} 
                    placeholder="Enter Hero"
                    value={this.state.inputText}
                />

                <button onClick={(e)=> this.handleUpdateAvengers()} 
                >
                     Suit up!
                </button>
                {displayHeroes}

                <Decimate buttonChangeFn={
                    this.handleButtonChange} />
            </div>
        )
    }
}

export default HeroInput