import React, { Component } from 'react'

export default class Contexting extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }
    handleChange(e) {
        this.props.callback(e.target.value)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.contInfo}
                <h1>{this.props.animal}</h1>
                <input type="text" onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
