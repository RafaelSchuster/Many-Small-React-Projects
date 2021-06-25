import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errorThrown: false
        }
    }

    componentDidCatch = (error, info) => {
        console.log(error + info);
        this.setState({ errorThrown: true })
    }

    render() {
        return (
            <>
                {this.state.errorThrown && <h3>Error Detected</h3>}
                {this.props.children}
            </>
        )
    }
}
