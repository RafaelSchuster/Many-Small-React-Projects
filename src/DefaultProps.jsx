import React, { Component } from 'react'

export default class DefaultPropsComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

DefaultPropsComp.defaultProps = {
    text: "I am a default prop"
}
