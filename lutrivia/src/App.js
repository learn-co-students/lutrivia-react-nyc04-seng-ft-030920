import React, { Component } from 'react'
import TriviaContainer from './TriviaContainer'
import  questions from  './data'
import SearchBox from './SearchBox'
class App extends Component {
  state = {

      data: questions.questions,
      
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        <h1> Lutrivia</h1>
      
        <TriviaContainer item = {this.state.data} score = {this.state.score}/>
        <SearchBox/>
      </div>
    )
  }
}



export default App

