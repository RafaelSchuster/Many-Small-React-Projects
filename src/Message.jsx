import React, { Component } from 'react'

export default class Message extends Component {
    componentWillUnmount = () => {
        console.log('Did unmount');
    }

    render() {
        return (
            <div>
                {this.props.msg}
            </div>
        )
    }
}
