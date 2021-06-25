import React, { Component } from 'react'

export default class AccumulateState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            isAdded: false
        }
    }

    handleClick = () => {
        this.setState(state => ({ counter: state.counter += 1 }), () => {
            this.setState({ isAdded: true }, () => {
                console.log(this.state);
            })
        })
    }
    handleCounterAdding = () => {
        this.setState(state => ({ counter: state.counter + 1 }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add Counter CallBack</button>
                <button onClick={this.handleCounterAdding}>Add Counter Function</button>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
