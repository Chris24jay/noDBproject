import React, {Component} from 'react';
import Logo from '../Avengers-logo.png'
import axios from 'axios';


//I want this to pull up a list of heroes for now
class Assemble extends Component {
    constructor(){
        super()

        this.state={
            heroRoster: [],
        }
        this.handleGetHeroes = this.handleGetHeroes.bind(this)
    }

    handleGetHeroes(){
        axios.get('http://localhost:4000/api/heroRoster')
        .then((response)=> {
            let heroName = response.data.map((val)=> {
                return `${val.madeUpName},  `
            })
            this.setState({
                heroRoster: heroName
            })
        }) 
    }




    render(){
        return(
            <div>
                <img src={Logo} alt="Logo" /><br/>
                <button onClick={(e) => this.handleGetHeroes()}>Assemble!</button>
                {this.state.heroRoster}
            </div>
        )
    }
    

}

export default Assemble
