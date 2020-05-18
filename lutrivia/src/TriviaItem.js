import React, { Component } from 'react'

class TriviaItem extends Component {
    state = {
        score: 0
    }

    handleChange = () => {
  
     this.setState({
         score: this.state.score + 1 
     })


    }


    render() {
    
        
        const array = this.props.item.map((text,index) => {
           return (
               <div style = {style}>
                  <p key={index}> {text.text} </p>
            {text.answer? <button style ={btnStyle} onClick ={this.handleChange}>True </button> : <button>True</button>}
            {text.answer? <button onClick ={this.handleChange}>False</button> : <button onClick={this.handleChange} style ={btnFalse}>False</button>}
            </div>
            )
        })

       
        return (
    <div>
     Score: {this.state.score}
     {array}
    </div>
    )
 }
}

const style = {
 
    backgroundColor:"grey",
    marginTop: "50px"

}

const btnStyle = {
    backgroundColor: "green",
    marginRight: "10px"
}

const btnFalse = {
    backgroundColor: "red"
}

export default TriviaItem
