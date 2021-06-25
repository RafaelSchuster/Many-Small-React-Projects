import React, { Component } from 'react'

export default class Binding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            food: '',
            drink: ''
        }
        this.handleChangeDrink = this.handleChangeDrink.bind(this)
    }
    handleChange() {
        this.setState({ food: 'hamburger' })
    }
    handleChangeDrink() {
        this.setState({ drink: 'cola' })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChange.bind(this)}>Food</button>
                <button onClick={this.handleChangeDrink}>Drink</button>
                <h1>{this.state.food}</h1>
                <h1>{this.state.drink}</h1>
            </div>
        )
    }
}
