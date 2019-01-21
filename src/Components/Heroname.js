import React, { Component } from 'react'

class Heroname extends Component {
    constructor(){
        super()

        this.state ={
            heroEdit: '',
            mode: false
        }
        this.changeHeroEdit = this.changeHeroEdit.bind(this)
    }

    changeHeroEdit (val){
        console.log(val)
        this.setState({
            heroEdit: val
        })

    }

    changeMode(){
        this.setState({
            mode: !this.state.mode
        })
    }

    render(){
        let text = "Edit"
        return(
            <div>
             
                
                <div>
                    <h2>{ this.props.val.madeUpName }</h2>

                    

                     {this.state.mode 

                        ? <div>
                            <input onChange={(e) => this.changeHeroEdit(e.target.value)}></input>
                            <button onClick={() => this.props.editArray(this.props.ind)}>Save</button>

                        </div>                            
                        
                        :<button onClick= {() => {this.changeMode()}}>
                        Edit                           
                       </button>} 
                </div>
            </div>
        )
    }
}

export default Heroname