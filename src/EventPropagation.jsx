import React, { Component } from 'react'

export default class EventPropagation extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleClick = (e) => {
        console.log(`${e.type} // ${e.target.tagName}// ${e.currentTarget.tagName}// ${e.bubbles}`);
        // e.stopPropagation()
    }
    render() {
        return (
            <div onClick={this.handleClick} onClickCapture={this.handleClick}>
                <button onClick={this.handleClick} >Eventing</button>

            </div>
        )
    }
}
