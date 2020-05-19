import React, { Component } from 'react'
import TriviaItem from './TriviaItem'


class TriviaContainer extends Component {
  
    render() {
        console.log(this.props.item)
        return (
            <div style = {style}>
               <TriviaItem item ={this.props.item} score={this.props.score} />
            </div>
        )
    }
}


const style = {
 
    
    marginTop: "50px"

}
export default TriviaContainer
