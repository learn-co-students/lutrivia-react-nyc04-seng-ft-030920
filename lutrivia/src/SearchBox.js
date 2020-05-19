import React, { Component } from 'react'

export class SearchBox extends Component {

    state = {
       name: ""
    }


    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="Name" value={this.state.value} />
                <button>Submit Score </button>
            </div>
        )
    }
}

export default SearchBox
